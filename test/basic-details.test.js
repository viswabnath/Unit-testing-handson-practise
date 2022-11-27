import { html, fixture, expect } from '@open-wc/testing';
import Sinon from 'sinon';
import '../src/LoanBasicDetails/BasicDetails.js';
import { Required } from '@lion/form-core';


const el = fixture(html`<basic-details></basic-details>`);
const myFuctionStub = Sinon.stub(el, '_captureDetails');


describe('Basic details', () => {

  it('Checking for accessebility', () => {
    expect(el).to.be.accessible;
  });

  it('Checking for empty field validation', () => {
    const type = el.shadowRoot.querySelector('lion-input-amount');
    const amount = new Required();
    const errorMessage = amount._getMessage();
    expect(errorMessage).to.not.equal();
  });

  it('Checking for capturedetails', async () => {
    el.requestUpdate();
    await el.updateComplete;
    el.shadowRoot.querySelector('lion-button').click();
    expect(myFuctionStub).to.have.callCount(0);
  });

  it('Checking for toDashboard', async () => {
    const myFunction = Sinon.stub(el, '_toDashboard');
    el.requestUpdate();
    await el.updateComplete;
    el.shadowRoot.querySelector('lion-button').click();
    expect(myFunction).to.have.callCount(1);
  });

  it('Checking for id', async () => {
    const el = await fixture('<div id = "word"></div>');
    expect(el.id).to.equal('word');
  });

  it('Checking for amount', async () => {
    const el = await fixture(html`<basic-details></basic-details>`);
    expect(el.amount).to.be.equal(10000);
  });

  it('Checking the type for amount', async () => {
    const el = await fixture(html`<basic-details></basic-details>`);
    expect(el.amount).to.be.a('number');
  });

  it('Checking for element', async () => {
    const el = await fixture(html`<lion-input .value="text"></lion-input>`);
    expect(el.getAttribute(".value")).to.be.equal("text");
  });

  it('Checking for emiCalc', async () => {
    const el = await fixture(html`<basic-details></basic-details>`);
    expect(el.emiCalc).to.be.equal(0);
  });

  it('Checking captureDetails when clicked', async () => {
    setTimeout(async () => {
      const el = await fixture(html`<basic-details></basic-details>`);
      const spy = sinon.spy(el._captureDetails);
      el.requestUpdate();
      await el.updateComplete;
      el.shadowRoot.getElementById('lion-btn').click();
      expect(spy.called).to.be.true;
    }, 2000);
  });

  it('Checking toDashBoard when clicked', async () => {
    const el = await fixture(html`<basic-details></basic-details>`);
    const myFunctionStub = Sinon.stub(el, '_toDashboard');
    el.requestUpdate();
    await el.updateComplete;
    el.shadowRoot.querySelector('lion-button').click();
    expect(myFunctionStub).to.have.callCount(1);
  });

  it('Checking for DOM', async () => {
    const el = await fixture(`<basic-details><div id="word"></div></basic-details>`);
    expect(el).dom.to.equal('<basic-details><div id="word"></div></basic-details>');
  });

  it('Checking for light-dom', async () => {
    const el = await fixture(`<basic-details><div id="word"></div></basic-details>`);
    expect(el).lightDom.to.equal('<div id="word"></div>');
  });

});