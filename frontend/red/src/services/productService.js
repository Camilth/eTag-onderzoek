const API_URL = '/api/products';

export async function fetchProducts(forceServer = false) {
    const start = performance.now(); // start timer
    const result = await fetch(API_URL, {
        method: 'GET',
        cache: forceServer ? 'no-store' : 'default'
    })

    if (!result.ok) throw new Error('Failed to fetch products' + result.status);
    const products = await result.json();

    const end = performance.now(); // end timer
    const duration = Math.round(end - start);
    return {products, duration};
}

export async function addProduct(productName) {
    const result = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({productName})
    })
    if (!result.ok) throw new Error('Failed to add products' + result.status);
    return result.json();
}