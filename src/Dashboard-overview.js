import { html, css, LitElement } from 'lit-element';
import { LocalizeMixin } from '@lion/localize';
import './inline-data.js';

export class DashboardOverview extends LocalizeMixin(LitElement) {
  static get styles() {
    return css`
      :host {
      }
      .container {
        display: flex;
        font-family: sans-serif;
        letter-spacing: 1px;
        font-size: 14px;
        text-align: center;
        justify-content: space-evenly;
        margin: auto;
        flex-wrap: wrap;
        padding: 20px;
      }
      dashboard-menu {
        flex-basis: 30%;
        text-align: center;
        font-size: 20px;
        font-weight: 300;
        margin: 10px;
        padding: 5px;
        border-radius: 5px;
        background-color: #ddd;
      }
    `;
  }

  static get properties() {
    return {};
  }

  constructor() {
    super();
    this.data = [
      {
        title: 'Home Loan',
        image: 'images/Home-Loans.jpg.cf.jpg',
      },
      {
        title: 'Personal Loan',
        image: 'images/personal-Loan.jpg.cf.jpg',
      },
      {
        title: 'Car Loan',
        image: 'images/car loan.jpg.cf.jpg',
      },
      {
        title: 'Vacation Loan',
        image: 'images/vacation-loans.jpg.cf.jpg',
      },
    ];
  }
  // _renderdashboardcard  =() => {
  //   return this.data.map((card) => {
  //     const { title, image } = card;
  //     return html`
  //             <dashboard-menu
  //                 imageURL="../src/${image}"

  //                 title=${localize.msg('change-language:data.title')}

  //             >
  //             </dashboard-menu>
  //         `;
  //   });
  // }

  render() {
    return html` <div class="container">${this._renderdashboardcard()}</div> `;
  }
}
window.customElements.define('dashboard-overview', DashboardOverview);
