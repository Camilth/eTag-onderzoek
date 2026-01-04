const API_URL = '/api/products';

export async function fetchProducts(eTag) {
    const headers = {};

    if (eTag) {
        headers['If-None-Match'] = eTag;
    }

    const start = performance.now(); // start timer
    const result = await fetch(API_URL, {
        method: 'GET',
        headers
    })

    const end = performance.now(); // end timer
    const duration = Math.round(end - start);

    if (result.status === 304) {
        return { products: null, duration };
    }
    else if (!result.ok) throw new Error('Failed to fetch products' + result.status);

    const products = await result.json();

    return {products, duration};
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