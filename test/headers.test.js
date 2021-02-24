import { html, fixture, expect } from '@open-wc/testing';
import { stub } from 'sinon';
import '../src/header/Header.js';

describe('loan-header', () => {
  it('is defined', async () => {
    const el = await fixture(html`<loan-header></loan-header>`);
    expect(el).dom.exist;
  });
  it('calls localeChanged function when a button is clicked', async () => {
    const el = await fixture(html`<loan-header></loan-header>`);
    const myFunctionStub = stub(el, 'localeChanged');
    el.requestUpdate();
    await el.updateComplete;
    el.shadowRoot.querySelector('button').click();
    expect(myFunctionStub).to.have.callCount(1);
  });
});
