import { html, css, LitElement } from 'lit-element';
import { Router } from '@vaadin/router';

import '../header/Header.js';
import './Dashboard-overview.js';
import '../LoanBasicDetails/BasicDetails.js';
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
      <a href="customer">Customer</a>
      <div id="outlet"></div>
    `;
  }

  firstUpdated() {
    this.getOverview();
  }

  getOverview() {
    const outlet = this.shadowRoot.getElementById('outlet');
    const router = new Router(outlet);
    router.setRoutes([
      { path: '/', component: 'dashboard-overview' },
      { path: '/details', component: 'basic-details' },
      { path: '/customer', component: 'customer-details' },
    ]);
  }
}
window.customElements.define('dash-board', Dashboard);
