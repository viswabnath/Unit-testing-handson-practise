/* eslint-disable class-methods-use-this */
import { html, css, LitElement } from 'lit-element';
import { Required, MinMaxNumber } from '@lion/form-core';
import '@lion/input/lion-input.js';
import '@lion/input-amount/lion-input-amount.js';
import '@lion/input-range/lion-input-range.js';
import '@lion/button/lion-button.js';
import { Router } from '@vaadin/router';
import { LocalizeMixin, localize } from '@lion/localize';
// import {inwords} '../utils/numToWord.js';

export class BasicDetails extends LocalizeMixin(LitElement) {
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
      .form-field {
        width: 50%;
        padding: 10px 5px;
        margin: auto;
        height: 5%;
      }
      .form-basic {
        margin: auto;
      }
      input {
        height: 25px;
        padding: 4px;
        text-transform: capitalize;
        border: 2px solid grey;
        border-radius: 5px;
      }
      .form-control:focus {
        outline: none;
        box-shadow: 10px grey;
      }
      .btn-previous {
        background-color: #ff0000;
        color: white;
        border-radius: 5px;
        /* width:100px; */
        /* text-align:center; */
      }
      .btn-next {
        background-color: dodgerblue;
        color: white;
        border-radius: 5px;
        /* width:100px; */
      }
      .button-content {
        text-align: left;
      }
      .btn-prev-nxt-parent {
        margin: 20px auto;
        width: 50%;
        display: flex;
        justify-content: space-between;
      }
    `;
  }

  constructor() {
    super();
    this.amount = 10000;
    this.range = 2;
  }

  render() {
    return html` <div class="form-basic">
      <h2>${localize.msg('change-language:loandetails')}</h2>
      <lion-form>
        <form class="basic-web-form">
          <div class="basic-form">
            <lion-input
              label="${localize.msg('change-language:Name')}"
              type="text"
              name="name"
              id="name"
              class="name"
              .validators="${[
                new Required(
                  {},
                  { getMessage: () => 'Name is a required field' }
                ),
              ]}"
            ></lion-input>

            <lion-input-amount
              type="Number"
              name="amount"
              id="amount"
              class="amount"
              .validators="${[
                new MinMaxNumber(
                  { min: 10000, max: 10000000 },
                  {
                    getMessage: () =>
                      'Should enter an amount greater than ten thousand ',
                  }
                ),
                new Required(
                  {},
                  { getMessage: () => 'Amount is a required field' }
                ),
              ]}"
              .modelValue="${this.amount}"
              label="${localize.msg('change-language:Amount')}"
            >
              @keyup = ${this._numToWord}
            </lion-input-amount>

            <div class="word"></div>

            <lion-input-range
              style="max-width: 400px;"
              min="1"
              max="20"
              step="1"
              .modelValue="${this.range}"
              label="${localize.msg('change-language:loanPeriod')}"
              name="Period"
              id="Period"
              class="period"
            >
            </lion-input-range>
          </div>
        </form>
      </lion-form>

      <div class="btn-prev-nxt-parent">
        <lion-button class="btn-previous" @click=${this._toDashboard}
          >${localize.msg('change-language:btnPrev')}</lion-button
        >
        <lion-button @click=${this._toCustomer} class="btn-next"
          >${localize.msg('change-language:btnNext')}</lion-button
        >
      </div>
    </div>`;
  }

  /* _numToWord() {
    this.shadowRoot.querySelector('.word').innerHTML = inwords(
      this.shadowRoot.querySelector('.basic-web-form').elements['amount'].value
    );
  } */

  _captureDetails() {
    // let _name = this.shadowRoot.querySelector('basic-web-form').elements["name"].value;
    // let _amount = this.shadowRoot.querySelector('basic-web-form').elements["amount"].value;
    // let _period = this.shadowRoot.querySelector('basic-web-form').elements["period"].value;

    const _name = this.shadowRoot.querySelector('.name').value;
    const _amount = this.shadowRoot.querySelector('.amount').value;
    const _period = this.shadowRoot.querySelector('.period').value;

    // eslint-disable-next-line no-console
    console.log(_name, _amount, _period);
    // e.preventDefault();
  }

  _toCustomer() {
    this._captureDetails();
    Router.go('/emidetails');
  }

  _toDashboard() {
    Router.go('/');
  }
}
customElements.define('basic-details', BasicDetails);
