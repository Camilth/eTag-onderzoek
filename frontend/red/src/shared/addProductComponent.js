import {LitElement, html, css} from 'lit'
import {cardCss} from "../css/card-css.js";
import {addProduct} from "../services/productService.js";

export class addProductComponent extends LitElement {
    // static styles = [];

    static properties = {
        cachedProducts: { type: Array },
    };

    constructor() {
        super();
        this.cachedProducts = [];
    }


    async addProductToList(productName) {
        this.cachedProducts = await addProduct(productName);
    }

    render() {
        return html`
      <section>
          <button @click=${() => this.addProductToList("RandomProduct")}>Voeg product toe</button>
      </section>
    `
    }
}

window.customElements.define('add-product', addProductComponent);
