const API_URL = '/api/products';

export async function fetchProducts(noCache) {
    const headers = {};

    if (noCache) {
        headers['Cache-Control'] = 'no-store';
        headers['Pragma'] = 'no-store';
    }

    const startTime = performance.now();
    const result = await fetch(API_URL, {
        method: 'GET',
        headers,
        cache: noCache ? 'no-store' : 'default'
    })

    if (result.status === 304) {
        return { products: null };
    }
    else if (!result.ok) throw new Error('Failed to fetch products' + result.status);

    const products = await result.json();

    return {products};
}

export async function addProduct(productName) {
    const result = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: productName
    })
    if (!result.ok) throw new Error('Failed to add products' + result.status);
    return result.json();
}