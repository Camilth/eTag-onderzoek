import {LitElement, html, css} from 'lit'
import {cardWithCss} from "../css/cardWith.css.js";
import {addProduct, fetchProducts} from "../services/productService.js";

export class metCaching extends LitElement {
    static styles = [cardWithCss];

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
        const { products} = await fetchProducts(false);
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
          <h1>Met Caching</h1>
          <button @click=${() => this.loadProducts()} class="call">[ CALL ]</button> 
          <section class="summary">
          <p>Aantal producten: ${this.cachedProducts.length}</p>
          <p class="time">Calltijd: ${this.fetchTime}ms</p>
          </section>
      </section>
    `
  }
}

window.customElements.define('met-caching', metCaching)
