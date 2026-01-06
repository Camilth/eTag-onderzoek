import {LitElement, html, css} from 'lit'
import {addProduct} from "../services/productService.js";
import {AddProductCSS} from "@/shared/addProductCSS.js";

export class addProductComponent extends LitElement {
    static styles = [AddProductCSS];

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
          <button @click=${() => this.addProductToList("RandomProduct")}>+ Voeg product toe</button>
      </section>
    `
    }
}

window.customElements.define('add-product', addProductComponent);
