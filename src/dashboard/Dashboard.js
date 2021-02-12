import { html, css, LitElement } from 'lit-element';
import '../Customer/Customer-details.js';

export class Dashboard extends LitElement {
  static get styles() {
    return css`
      :host {
        margin: 0;
      }
    `;
  }

  static get properties() {
    return {};
  }

  render() {
    return html`
      <loan-header></loan-header>

      <dashboard-overview></dashboard-overview>
      <customer-details> form details</customer-details>
    `;
  }
}
window.customElements.define('dash-board', Dashboard);
