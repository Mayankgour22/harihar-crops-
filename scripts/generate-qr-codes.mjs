import fs from "fs";
import path from "path";
import QRCode from "qrcode";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, "..");

// 1. Read lib/products.ts and extract all products
const productsFilePath = path.join(projectRoot, "lib", "products.ts");
const fileContent = fs.readFileSync(productsFilePath, "utf-8");

// Parse products array using regex to guarantee clean extraction
const products = [];
const regex = /{\s*id:\s*"([^"]+)",\s*name:\s*"([^"]+)",\s*category:\s*"([^"]+)",\s*image:\s*"([^"]+)"/g;
let match;
while ((match = regex.exec(fileContent)) !== null) {
  products.push({
    id: match[1],
    name: match[2],
    category: match[3],
    image: match[4]
  });
}

console.log(`Found ${products.length} products to generate QR codes for.`);

// 2. Setup output directories
const outDir = path.join(projectRoot, "qr-codes");
const publicOutDir = path.join(projectRoot, "public", "qr-codes");

if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });
if (!fs.existsSync(publicOutDir)) fs.mkdirSync(publicOutDir, { recursive: true });

// Base scan URL for packaging (Production domain)
const BASE_URL = "https://hariharcropscience.in";

async function generateAllQRCodes() {
  const manifest = [];

  for (let i = 0; i < products.length; i++) {
    const product = products[i];
    
    // Scan destination URL: https://hariharcropscience.in/products/prod-1
    const scanUrl = `${BASE_URL}/products/${product.id}`;

    // Clean filename: prod-01_VINAASH-404.png
    const numPart = product.id.replace("prod-", "").padStart(2, "0");
    const safeName = product.name
      .replace(/[^a-zA-Z0-9]/g, "-")
      .replace(/-+/g, "-")
      .replace(/^-|-$/g, "");
    const fileName = `prod-${numPart}_${safeName}.png`;

    const filePath = path.join(outDir, fileName);
    const publicFilePath = path.join(publicOutDir, fileName);

    // High resolution 1024x1024 PNG with Level 'H' Error Correction (ideal for printed packaging)
    await QRCode.toFile(filePath, scanUrl, {
      type: "png",
      width: 1024,
      margin: 2,
      color: {
        dark: "#141210", // Rich dark charcoal
        light: "#ffffff"
      },
      errorCorrectionLevel: "H"
    });

    // Copy to public folder
    fs.copyFileSync(filePath, publicFilePath);

    manifest.push({
      index: i + 1,
      id: product.id,
      name: product.name,
      category: product.category,
      fileName,
      scanUrl,
      publicPath: `/qr-codes/${fileName}`
    });

    if ((i + 1) % 10 === 0 || i === products.length - 1) {
      console.log(`Generated [${i + 1}/${products.length}] QR codes...`);
    }
  }

  // 3. Save JSON manifest
  fs.writeFileSync(
    path.join(outDir, "qr-manifest.json"),
    JSON.stringify(manifest, null, 2),
    "utf-8"
  );

  // 4. Generate an interactive offline HTML Catalogue for client & printing press
  const htmlContent = `<!DOCTYPE html>
<html lang="hi">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Harihar Crop Science - Official Product QR Codes Catalogue</title>
  <style>
    :root {
      --primary: #15803d;
      --primary-dark: #166534;
      --bg: #f8fafc;
      --card-bg: #ffffff;
      --text: #0f172a;
      --text-muted: #64748b;
    }
    * { box-sizing: border-box; margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif; }
    body { background: var(--bg); color: var(--text); padding: 30px 20px; line-height: 1.5; }
    .container { max-width: 1400px; margin: 0 auto; }
    header { background: white; padding: 30px; border-radius: 20px; box-shadow: 0 4px 20px rgba(0,0,0,0.05); margin-bottom: 30px; text-align: center; border: 1px solid #e2e8f0; }
    h1 { color: var(--primary); font-size: 28px; font-weight: 800; margin-bottom: 8px; }
    p.subtitle { color: var(--text-muted); font-size: 15px; margin-bottom: 20px; }
    .controls { display: flex; flex-wrap: wrap; gap: 12px; justify-content: center; align-items: center; }
    input[type="text"] { padding: 12px 20px; border-radius: 12px; border: 1px solid #cbd5e1; width: 340px; max-width: 100%; font-size: 15px; outline: none; }
    input[type="text"]:focus { border-color: var(--primary); box-shadow: 0 0 0 3px rgba(21,128,61,0.15); }
    .badge-count { background: #e0f2fe; color: #0284c7; padding: 6px 14px; border-radius: 20px; font-weight: 700; font-size: 14px; }
    .btn-print { background: var(--primary); color: white; border: none; padding: 12px 24px; border-radius: 12px; font-weight: 700; cursor: pointer; transition: 0.2s; }
    .btn-print:hover { background: var(--primary-dark); }
    
    .grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 24px; }
    .card { background: var(--card-bg); border-radius: 20px; padding: 20px; text-align: center; border: 1px solid #e2e8f0; box-shadow: 0 4px 15px rgba(0,0,0,0.03); transition: transform 0.2s, box-shadow 0.2s; display: flex; flex-col; flex-direction: column; justify-content: space-between; }
    .card:hover { transform: translateY(-4px); box-shadow: 0 12px 30px rgba(0,0,0,0.08); }
    .category-tag { display: inline-block; font-size: 11px; font-weight: 800; text-transform: uppercase; tracking: 1px; color: var(--primary); background: #dcfce7; padding: 4px 10px; border-radius: 8px; margin-bottom: 10px; }
    .product-id { font-size: 12px; font-weight: 700; color: #94a3b8; }
    .product-name { font-size: 18px; font-weight: 800; margin: 4px 0 14px 0; color: #0f172a; }
    .qr-frame { background: #ffffff; padding: 12px; border-radius: 16px; border: 1px solid #f1f5f9; display: inline-block; margin-bottom: 14px; }
    .qr-frame img { width: 180px; height: 180px; display: block; margin: 0 auto; }
    .scan-url { font-size: 11px; color: #64748b; word-break: break-all; margin-bottom: 14px; background: #f1f5f9; padding: 6px 10px; border-radius: 8px; text-decoration: none; display: block; }
    .scan-url:hover { color: var(--primary); }
    .card-actions { display: flex; gap: 8px; margin-top: auto; }
    .btn-download { flex: 1; background: #0f172a; color: white; text-decoration: none; padding: 10px; border-radius: 10px; font-size: 13px; font-weight: 700; text-align: center; transition: 0.2s; }
    .btn-download:hover { background: var(--primary); }
    
    @media print {
      body { background: white; padding: 0; }
      header, .controls, .card-actions { display: none !important; }
      .grid { grid-template-columns: repeat(3, 1fr) !important; gap: 15px !important; }
      .card { page-break-inside: avoid; border: 1px solid #ccc; box-shadow: none !important; padding: 15px !important; }
      .qr-frame img { width: 140px; height: 140px; }
    }
  </style>
</head>
<body>
  <div class="container">
    <header>
      <h1>🌱 Harihar Crop Science - Official Packaging QR Codes</h1>
      <p class="subtitle">Scan any QR code with a phone camera to immediately open the product's details & dosage page.</p>
      <div class="controls">
        <input type="text" id="searchInput" placeholder="Search by product name, ID, or category..." onkeyup="filterCards()">
        <span class="badge-count" id="countBadge">${manifest.length} Products</span>
        <button class="btn-print" onclick="window.print()">🖨️ Print Labels / Catalog</button>
      </div>
    </header>

    <div class="grid" id="productsGrid">
      ${manifest
        .map(
          (item) => `
        <div class="card" data-name="${item.name.toLowerCase()}" data-id="${item.id.toLowerCase()}" data-cat="${item.category.toLowerCase()}">
          <div>
            <span class="category-tag">${item.category}</span>
            <div class="product-id">${item.id}</div>
            <div class="product-name">${item.name}</div>
            <div class="qr-frame">
              <img src="${item.fileName}" alt="${item.name} QR Code" loading="lazy">
            </div>
            <a href="${item.scanUrl}" target="_blank" class="scan-url">${item.scanUrl}</a>
          </div>
          <div class="card-actions">
            <a href="${item.fileName}" download="${item.fileName}" class="btn-download">⬇️ Download High-Res PNG</a>
          </div>
        </div>
      `
        )
        .join("")}
    </div>
  </div>

  <script>
    function filterCards() {
      const query = document.getElementById("searchInput").value.toLowerCase().trim();
      const cards = document.querySelectorAll(".card");
      let visible = 0;
      cards.forEach(card => {
        const name = card.getAttribute("data-name");
        const id = card.getAttribute("data-id");
        const cat = card.getAttribute("data-cat");
        if (name.includes(query) || id.includes(query) || cat.includes(query)) {
          card.style.display = "flex";
          visible++;
        } else {
          card.style.display = "none";
        }
      });
      document.getElementById("countBadge").innerText = visible + " Products";
    }
  </script>
</body>
</html>`;

  fs.writeFileSync(path.join(outDir, "index.html"), htmlContent, "utf-8");
  fs.writeFileSync(path.join(publicOutDir, "index.html"), htmlContent, "utf-8");

  // 5. Generate Markdown Summary
  const readmeContent = `# Harihar Crop Science - Product Packaging QR Codes

This folder contains high-resolution (1024x1024 px) print-ready QR codes for all **${manifest.length} products** of Harihar Crop Science.

## Quick Links
- **Interactive Visual Catalogue:** Double-click \`index.html\` in this folder to open the offline viewer and preview/search/print all QR codes.
- **Data Manifest:** See \`qr-manifest.json\` for the structured list of all products and scan URLs.

## Scan Behavior
When any QR code is scanned via a mobile smartphone camera or barcode scanner, it directly redirects to the product details page:
\`https://hariharcropscience.in/products/{product_id}\`

## File Naming Convention
Files are named in alphanumeric sorting order for easy navigation:
\`prod-{ID}_{PRODUCT_NAME}.png\`
Example: \`prod-01_VINAASH-404.png\`
`;

  fs.writeFileSync(path.join(outDir, "README.md"), readmeContent, "utf-8");
  console.log(`\n🎉 Successfully generated ${manifest.length} high-res QR codes in:`);
  console.log(`- ${outDir}`);
  console.log(`- ${publicOutDir}`);
  console.log(`- Catalogue: ${path.join(outDir, "index.html")}\n`);
}

generateAllQRCodes().catch(console.error);
