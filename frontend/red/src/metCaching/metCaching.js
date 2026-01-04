import {LitElement, html, css} from 'lit'
import {cardCss} from "../css/card-css.js";
import {fetchProducts} from "../services/productService.js";
import {scrollableListCss} from "@/css/scrollableListCss.js";

export class metCaching extends LitElement {
    static styles = [cardCss, scrollableListCss];

    static properties = {
        cachedProducts: { type: Array }
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

  render() {
    return html`
      <section>
          <h1>Met Caching</h1>
          <button>Test</button>
          <ul class="scrollable-list">
              ${this.cachedProducts.map(p => html`<li>${p}</li>`)}
          </ul>
          <p>${this.fetchTime}</p>
      </section>
    `
  }
}

window.customElements.define('met-caching', metCaching)
