import { html, css, LitElement } from 'lit-element';

export class LoanApplication extends LitElement {
  static get styles() {
    return css`
      :host {
        display: block;
        padding: 0px;
        color: var(--loan-application-text-color, #000);
      }
    `;
  }

  static get properties() {
    return {
      title: { type: String },
      counter: { type: Number },
    };
  }

  constructor() {
    super();
    this.title = 'Hey there';
    this.counter = 5;
  }

  __increment() {
    this.counter += 1;
  }

  render() {
    return html`
      <div>
        <dash-board> </dash-board>
      </div>
    `;
  }
}
