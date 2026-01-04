import {LitElement, html, css} from 'lit'
import {cardCss} from "../css/card-css.js";
import {addProduct, fetchProducts} from "../services/productService.js";
import {scrollableListCss} from "@/css/scrollableListCss.js";

export class zonderCaching extends LitElement {
    static styles = [cardCss, scrollableListCss];

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
        const { products, duration} = await fetchProducts();

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
          <ul class="scrollable-list">
              ${this.cachedProducts.map(p => html`<li>${p}</li>`)}
          </ul>
          <p class="time">Calltijd: ${this.fetchTime}ms</p>
      </section>
    `
    }
}

window.customElements.define('zonder-caching', zonderCaching)
