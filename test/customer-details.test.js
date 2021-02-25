import { html, fixture, expect } from '@open-wc/testing';
import { stub } from 'sinon';
import '../src/Customer/Customer-details.js';

describe('customer details', () => {
  it('Trail and error test case', async () => {
    const el = await fixture(html`<customer-details></customer-details>`);
    const inputElement = el.shadowRoot.querySelector('lion-input');

    expect(inputElement.type).to.equal('text');
  });

  it('calls emidetails function when a button is clicked', async () => {
    const el = await fixture(
      html`<customer-details
        ><lion-form><form></form></lion-form
      ></customer-details>`
    );
    const myFunctionStub = stub(el, '_toEmidetails');
    el.requestUpdate();
    await el.updateComplete;
    el.shadowRoot.querySelector('button').click();
    expect(myFunctionStub).to.have.callCount(0);
  });
});
