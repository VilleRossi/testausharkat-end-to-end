/// <reference types="cypress" />

/*
 * Yllä oleva rivi (mukaanlukien ///-merkit) käynnistää IntelliSensen tälle kyseiselle tiedostolle, jonka avulla
 * näemme funktioiden määritelmät
 */

// describe - Mocha.js:n toiminto, joka kuvastaa testijoukkoa
describe('testataan wikipediaa', () => {
  // it - Mocha.js:n toiminto, joka kuvastaa yksittäistä testitapausta
  it('clicking "type" shows the right headings', () => {
    // cy. - viittaa Cypressin toimintoihin
    // visit - vieraillaan annetulla verkkosivulla
    cy.visit('https://fi.wikipedia.org/wiki/Wikipedia:Etusivu');

    cy.wait(3000);

    cy.get('#p-search > .cdx-button--fake-button').click();

    cy.get(
      '#searchform > .cdx-search-input > .cdx-search-input__input-wrapper > .cdx-text-input > [name="search"]',
    )
      .type('jamk')
      .should('have.value', 'jamk');

    cy.contains('ammattikorkeakoulu').click();

    cy.wait(3000);

    cy.url().should(
      'include',
      'https://fi.wikipedia.org/wiki/Jyv%C3%A4skyl%C3%A4n_ammattikorkeakoulu',
    );

    cy.contains('Kampukset');

    cy.get('#Kampukset').scrollIntoView();

    cy.wait(5000);

    cy.get('#p-lang-btn-checkbox').click();

    cy.get('#v-0-option-0 > .uls-rewrite__language-item-title > a').click();

    cy.url().should(
      'include',
      'https://en.wikipedia.org/wiki/JAMK_University_of_Applied_Sciences',
    );
  });
});
