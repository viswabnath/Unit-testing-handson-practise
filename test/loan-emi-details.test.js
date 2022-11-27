import { html, fixture, expect } from '@open-wc/testing';
import Sinon from 'sinon';
import '../src/LoanEMIDetails/LoanEMIDetails.js';

const el = fixture(html`<loanemi-details></loanemi-details>`);

describe('Loan EMI details', () => {

  it('Accessible', async () => {
    expect(el).to.be.accessible();
  });

  it('check for the h2 heading', async () => {
    const h2 = el.shadowRoot.querySelector('h2');
    expect(h2).to.exist;
    expect(h2.textContent).to.equal('EMI Details');
  });

  it('spy the method', () => {
    const func = Sinon.stub(el, "_toBasicDetails");
    button[0].click();
    expect(func.calledOnce).to.be.true;
  });

  it('spy the method', () => {
    const func = Sinon.stub(el, "_toCustomer");
    button[1].click();
    expect(func.calledOnce).to.be.true;
  });

});