const API_URL = '/api/products';

export async function fetchProducts(forceServer = false) {
    const result = await fetch(API_URL, {
        method: 'GET',
        cache: forceServer ? 'no-store' : 'default'
    })

    if (!result.ok) throw new Error('Failed to fetch products' + result.status);
    return result.json();
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