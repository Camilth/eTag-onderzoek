import {LitElement, html, css} from 'lit'
import {addProduct, fetchProducts} from "../services/productService.js";
import {cardWithoutCss} from "@/css/cardWithout.css.js";

export class zonderCaching extends LitElement {
    static styles = [cardWithoutCss];

    static properties = {
        cachedProducts: { type: Array },
        fetchTime: { type: Number },
    };

    constructor() {
        super();
        this.cachedProducts = [];
    }

    firstUpdated() {
        this.loadProducts();
    }

    async loadProducts() {
        const url = 'http://localhost:5173/api/products';
        const { products} = await fetchProducts(true);
        const entries = performance.getEntriesByName(url);
        if (entries.length > 0) {
            const lastEntry = entries[entries.length - 1];
            this.fetchTime = lastEntry.responseEnd - lastEntry.startTime;
        }

        if (products) {
            this.cachedProducts = products;
        }

        this.fetchTime = this.fetchTime.toFixed(2);
    }

    async addProduct(productName) {
        this.cachedProducts = await addProduct(productName);
    }

    render() {
        return html`
      <section class="wrapper">
          <h1>Zonder Caching</h1>
          <button @click=${() => this.loadProducts()}> [ CALL ]</button> 
          <section class="summary">
          <p>Aantal producten: ${this.cachedProducts.length}</p>
          <p class="time">Calltijd: ${this.fetchTime}ms</p>
          </section>
      </section>
    `
    }
}

window.customElements.define('zonder-caching', zonderCaching)
