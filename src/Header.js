import { html, css, LitElement } from 'lit-element';
import { localize, LocalizeMixin } from '@lion/localize';
import './inline-data.js';

export class Header extends LocalizeMixin(LitElement) {
  static get styles() {
    return css`
      :host {
      }
      .container {
        display: block;
        font-family: sans-serif;
        letter-spacing: 1px;
        font-size: 14px;
        background-color: #800000;
      }
      header {
        color: #fff;
        font-size: 200%;
        display: flex;
      }
      header p {
        display: flex;
        flex-basis: 55%;
        justify-content: flex-end;
        margin: 0;
        padding: 10px;
      }
      .btn {
        display: flex;
        flex-basis: 45%;
        justify-content: flex-end;
        align-self: center;
      }
      button {
        border: 0;
        outline: none;
      }
      .en-GB {
        padding: 5px 5px;
        border: 1px solid #fff;
        border-right: 0;
        border-color: #fff;
        color: #fff;
        background-color: #800000;
      }
      .nl-NL {
        padding: 5px 5px;
        border: 1px solid #fff;
        border-left: 0;
        border-color: #fff;
        color: #fff;
        background-color: #800000;
      }
      .bg-btn-color {
        background-color: green;
      }
      .btn-cursor {
        cursor: pointer;
      }
    `;
  }

  static get properties() {
    return {};
  }

  static get localizeNamespaces() {
    return [
      { 'change-language': locale => import(`${locale}`) },
      ...super.localizeNamespaces,
    ];
  }

  localeChanged(e) {
    if (
      e.target.id === 'en-GB' &&
      this.shadowRoot.getElementById('en-GB').classList.contains('btn-cursor')
    ) {
      localize.locale = 'en-GB';
      this.shadowRoot.getElementById('en-GB').classList.add('bg-btn-color');
      this.shadowRoot.getElementById('nl-NL').classList.remove('bg-btn-color');
      this.shadowRoot.getElementById('nl-NL').classList.add('btn-cursor');
      this.shadowRoot.getElementById('en-GB').classList.remove('btn-cursor');
    } else if (
      e.target.id === 'nl-NL' &&
      this.shadowRoot.getElementById('nl-NL').classList.contains('btn-cursor')
    ) {
      localize.locale = 'nl-NL';
      this.shadowRoot.getElementById('nl-NL').classList.add('bg-btn-color');
      this.shadowRoot.getElementById('en-GB').classList.remove('bg-btn-color');
      this.shadowRoot.getElementById('en-GB').classList.add('btn-cursor');
      this.shadowRoot.getElementById('nl-NL').classList.remove('btn-cursor');
    }
  }

  render() {
    return html`
      <div class="container">
        <header>
          <p>${localize.msg('change-language:heading')}</p>
          <div class="btn">
            <button
              id="en-GB"
              class="en-GB bg-btn-color "
              @click=${e => this.localeChanged(e)}
            >
              EN
            </button>
            <button
              id="nl-NL"
              class="nl-NL btn-cursor"
              @click=${e => this.localeChanged(e)}
            >
              NL
            </button>
          </div>
        </header>
      </div>
    `;
  }
}

window.customElements.define('loan-header', Header);
