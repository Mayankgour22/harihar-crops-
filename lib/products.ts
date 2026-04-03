export interface Product {
    id: string;
    name: string;
    category: string;
    image: string;
    description: string;
}

const categories = [
    { name: "Biostimulants", range: [1, 20] },
    { name: "Pesticides", range: [21, 40] },
    { name: "Fungicides", range: [41, 60] },
    { name: "Growth Regulators", range: [61, 75] },
    { name: "Soluble Fertilizers", range: [76, 83] },
];

export const products: Product[] = [];

// Helper to generate the product list based on the provided images
for (let i = 1; i <= 83; i++) {
    const paddedNum = i.toString().padStart(5, '0');
    const filename = `Hari Har Product-3_${paddedNum}.jpg`;
    
    let category = "General";
    for (const cat of categories) {
        if (i >= cat.range[0] && i <= cat.range[1]) {
            category = cat.name;
            break;
        }
    }

    products.push({
        id: `prod-${i}`,
        name: `Harihar ${category} Spec-${i}`,
        category: category,
        image: `/products/${filename}`,
        description: `Premium quality ${category.toLowerCase()} designed for maximum crop yield and plant health. ISO 9001:2015 certified formulation of Harihar Crops Science.`
    });
}

export const getWhatsAppUrl = (productName: string, productId: string) => {
    const phoneNumber = "917773031120"; // Products WhatsApp number
    const message = encodeURIComponent(`Hello Harihar Crops! I'm interested in the product: ${productName} (ID: ${productId}). Please provide more details and pricing.`);
    return `https://wa.me/${phoneNumber}?text=${message}`;
};
