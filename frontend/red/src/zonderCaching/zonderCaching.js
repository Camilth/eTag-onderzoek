import {LitElement, html, css} from 'lit'
import {cardCss} from "../css/card-css.js";
import {addProduct, fetchProducts} from "../services/productService.js";

export class zonderCaching extends LitElement {
    static styles = [cardCss];

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
        const startTime = performance.now();
        const { products} = await fetchProducts(true);
        const endTime = performance.now();
        const duration = (endTime - startTime).toFixed(2);

        if (products) {
            this.cachedProducts = products;
        }

        this.fetchTime = duration;
    }

    async addProduct(productName) {
        this.cachedProducts = await addProduct(productName);
    }

    render() {
        return html`
      <section>
          <h1>Zonder Caching</h1>
          <button @click=${() => this.loadProducts()}>Call</button> 
          <button @click=${() => this.addProduct("RandomProduct")}>Voeg product toe</button>
          <p>Aantal producten: ${this.cachedProducts.length}</p>
          <p class="time">Calltijd: ${this.fetchTime}ms</p>
      </section>
    `
    }
}

window.customElements.define('zonder-caching', zonderCaching)
