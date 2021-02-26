import { html, css, LitElement } from 'lit-element';

import '@lion/form/lion-form.js';
import '@lion/button/lion-button.js';
import '@lion/input/lion-input.js';
import '@lion/input-datepicker/lion-input-datepicker.js';
import '@lion/input-email/lion-input-email.js';
import '@lion/input-amount/lion-input-amount.js';
import '@lion/checkbox-group/lion-checkbox-group.js';
import '@lion/checkbox-group/lion-checkbox.js';
import {
  MinLength,
  MaxLength,
  Required,
  Pattern,
  MinMaxDate,
} from '@lion/form-core';
import { loadDefaultFeedbackMessages } from '@lion/validate-messages';
import { localize, LocalizeMixin } from '@lion/localize';
import '../../locale/inline-data.js';
import { Router } from '@vaadin/router';

loadDefaultFeedbackMessages();
export class CustomerDetails extends LocalizeMixin(LitElement) {
  static get styles() {
    return css`
      :host {
        display: block;
        padding: 25px;
        color: var(--loan-application-text-color, #000);
        font-family: monospace;
        font-size: 1.5rem;
        // background-color:#e8eae6;
      }
      .container {
        width: 100%;
        margin: 0;
        font-family: sans-serif;
        letter-spacing: 1px;
        font-size: 14px;
        justify-content: space-evenly;
        margin: auto;
        flex-wrap: wrap;
        padding: 20px;
        font-family: monospace;
        font-size: 1.25rem;
      }
      h2 {
        font-size: 2rem;
        font-family: monospace;
        text-align: center;
      }
      // .form-input {
      //   margin: 10px;
      // }
      form {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }

      .backbg-btn-color {
        background-color: #ff0000;
        color: white;
        border-radius: 5px;
        cursor: pointer;
        margin-left: 150px;
      }
      .nextbg-btn-color {
        background-color: dodgerblue;
        color: white;
        border-radius: 5px;
        cursor: pointer;
      }
      form {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }
      .form-field {
        width: 50%;
        padding: 10px 5px;
        margin: auto;
        height: 5%;
      }

      input {
        height: 25px;
        padding: 4px;
        text-transform: capitalize;
        border: 2px solid black;
        border-radius: 5px;
        background-color: #f4f4f4;
      }
      .form-control:focus {
        outline: none;
        box-shadow: 10px grey;
      }
      .btn-cont {
        margin: 30px auto;
        width: 50%;
        display: flex;
        justify-content: space-between;
      }
      // .error-handle{
      //   border: 2px solid red;
      //   background-color:#f05454;
      //   padding: 5px 10px;
      //   border-radius:5px;
      //   color:azure;
      // }
      .error-handle > input {
        border: 3px solid red;
      }
    `;
  }

  static get properties() {
    return {};
  }

  render() {
    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth();
    const day = today.getDate();
    const mindate = new Date(year - 80, month, day);
    const maxdate = new Date(year - 18, month, day);

    const submitHandler = ev => {
      if (ev.target.hasFeedbackFor.includes('error')) {
        const firstFormElWithError = ev.target.formElements.find(el =>
          el.hasFeedbackFor.includes('error')
        );
        firstFormElWithError.focus();
        firstFormElWithError.classList.add('error-handle');
        setTimeout(() => {
          firstFormElWithError.classList.remove('error-handle');
        }, 2000);
        return;
      }
      const formData = ev.target.serializedValue;
      fetch('https://loanfeapi.herokuapp.com/submit-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      }).then(response => {
        if (response.status === 200) {
          Router.go('/success');
        } else {
          Router.go('/error');
        }
      });
    };

    return html`
      <div class="container">
        <h2>${localize.msg('change-language:customer')}</h2>
        <lion-form @submit=${submitHandler}>
          <form @submit=${ev => ev.preventDefault()}>
            <lion-input
              name="first_name"
              id="first_name"
              label="${localize.msg('change-language:firstname')}"
              .validators=${[
                new Pattern(/^[a-zA-Z\s]*$/),
                new MinLength(3),
                new Required(
                  {},
                  { getMessage: () => 'First name is a required field' }
                ),
              ]}
            >
            </lion-input>
            <lion-input
              name="last_name"
              id="last_name"
              label="${localize.msg('change-language:lastname')}"
              .validators=${[
                new Pattern(/^[a-zA-Z\s]*$/),
                new MinLength(3),
                new Required(
                  {},
                  { getMessage: () => 'Last name is a required field' }
                ),
              ]}
            >
            </lion-input>
            <lion-input-datepicker
              name="dateof_birth"
              id="dateof_birth"
              label="${localize.msg('change-language:dateofbirth')}"
              .modelValue=${new Date(maxdate)}
              .validators=${[
                new MinMaxDate({
                  min: new Date(mindate),
                  max: new Date(maxdate),
                }),
              ]}
            >
            </lion-input-datepicker>
            <lion-input-email
              name="email"
              id="email"
              .validators=${[
                new Pattern(
                  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
                ),
                new Required(
                  {},
                  { getMessage: () => 'E-mail is a required field' }
                ),
              ]}
              label="${localize.msg('change-language:email')}"
            >
            </lion-input-email>
            <lion-input
              name="mobile_number"
              id="mobile_number"
              label="${localize.msg('change-language:mobilenumber')}"
              .validators=${[
                new Pattern(/(6|7|8|9)\d{9}/),
                new MinLength(10),
                new MaxLength(10),
                new Required(
                  {},
                  { getMessage: () => 'Mobile Number is a required field' }
                ),
              ]}
            >
            </lion-input>
            <lion-input-amount
              name="monthly_salary"
              id="monthly_salary"
              label="${localize.msg('change-language:monthlysalary')}"
              .validators=${[
                new Required(
                  {},
                  { getMessage: () => 'Monthly salary is a required field' }
                ),
              ]}
            >
            </lion-input-amount>
            <lion-input-amount
              name="EMIs_amount"
              id="EMIs_amount"
              label="${localize.msg('change-language:previousemi')}"
              .validators=${[
                new Required(
                  {},
                  { getMessage: () => 'Previous EMI is a required field' }
                ),
              ]}
            >
            </lion-input-amount>

            <lion-checkbox-group
              class="checkbox"
              id="terms"
              name="terms"
              .validators="${[new Required()]}"
            >
              <lion-checkbox
                id="terms"
                label="${localize.msg('change-language:checkbox')}"
              ></lion-checkbox>
            </lion-checkbox-group>
            <div
              style=" margin: 40px auto;
              width: 50%;
              display: flex;
              justify-content: space-between;"
            >
            </div>
            <div class="btn-cont">
            <lion-button
              class="backbg-btn-color"
              raised
              @click=${this._toEmidetails}
              >${localize.msg('change-language:back')}
            </lion-button>

            <lion-button class="nextbg-btn-color" id="nextbtn" raised
              >${localize.msg('change-language:next')}</lion-button
            >
            <div>
          </form>
        </lion-form>
      </div>
    `;
  }

  // eslint-disable-next-line class-methods-use-this
  _toEmidetails() {
    Router.go('/emidetails');
  }
}

window.customElements.define('customer-details', CustomerDetails);
