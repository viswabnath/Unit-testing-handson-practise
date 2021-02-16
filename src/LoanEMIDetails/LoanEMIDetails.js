import { LitElement, html, css } from 'lit-element';
import '@lion/button/lion-button.js';
import { LocalizeMixin, localize } from '@lion/localize';
import { Router } from '@vaadin/router';

export class LoanEMIDetails extends LocalizeMixin(LitElement) {
  static get styles() {
    return css`
      :host {
        display: block;
        padding: 25px;
        color: var(--loan-application-text-color, #000);
        font-family: monospace;
        font-size: 1.5rem;
      }
      h2 {
        font-size: 2rem;
        font-family: monospace;
        text-align: center;
      }
      .emi-details {
        margin: 5px auto;
        text-align: center;
      }
      .btn-cont {
        margin: 20px auto;
        width: 50%;
        display: flex;
        justify-content: space-between;
      }
      .cancel-btn,
      .continue-btn {
        color: white;
        border-radius: 5px;
      }
      .cancel-btn {
        background-color: #ff0000;
      }
      .continue-btn {
        background-color: dodgerblue;
      }
    `;
  }

  constructor() {
    super();

    this.interestRate = 7;

    this.montlyEMI = 44444;

    this.principal = 55555;

    this.interest = 55555;

    this.totalAmount = 55555;
  }

  // connectedCallback(){
  //   super.connectedCallback();

  // }

  render() {
    return html`
      <div>
        <div class="emi-details">
          <h2>EMI Details</h2>
          <p>
            ${localize.msg('change-language:intRate')} :<span
              >${this.interestRate}</span
            >
          </p>
          <p>
            ${localize.msg('change-language:mnthlyEmi')} :<span
              >${this.montlyEMI}</span
            >
          </p>
          <p>
            ${localize.msg('change-language:pricipal')} :
            <span>${this.principal}</span>
          </p>
          <p>
            ${localize.msg('change-language:interest')} :
            <span>${this.interest}</span>
          </p>
          <p>
            ${localize.msg('change-language:TotalAmt')} :
            <span>${this.totalAmount}</span>
          </p>

          <div class="btn-cont">
            <lion-button class="cancel-btn" @click=${this._toBasicDetails}
              >${localize.msg('change-language:btnCancel')}</lion-button
            >
            <lion-button class="continue-btn" @click=${this._toCustomer}
              >${localize.msg('change-language:btnCont')}</lion-button
            >
          </div>
        </div>
      </div>
    `;
  }

  // eslint-disable-next-line class-methods-use-this
  _toBasicDetails() {
    Router.go('/details');
  }

  // eslint-disable-next-line class-methods-use-this
  _toCustomer() {
    Router.go('/customer');
  }
}
customElements.define('loanemi-details', LoanEMIDetails);
