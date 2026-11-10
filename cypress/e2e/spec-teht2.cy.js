describe('testataan pizza-sovellusta', () => {
  // it - Mocha.js:n toiminto, joka kuvastaa yksittäistä testitapausta
  it('clicking "type" shows the right headings', () => {
    // cy. - viittaa Cypressin toimintoihin
    // visit - vieraillaan annetulla verkkosivulla
    cy.visit('https://tiko.jamk.fi/~imjar/fronttiper/esimteht/pizza_anim/');

    cy.wait(3000);

    cy.get('#nimi').type('Matti').should('have.value', 'Matti');

    cy.get('#puhelin').type('0401234567').should('have.value', '0401234567');

    cy.get('#sposti')
      .type('Matti@Rossi.fi')
      .should('have.value', 'Matti@Rossi.fi');

    cy.get('#koko').select('Pieni');

    cy.get('[for="Ruis"] > [name="pohja"]').click();

    cy.get('#Kinkku').click();

    cy.get('#Ananas').click();

    cy.get('#Sipuli').click();

    cy.get('.lomake > :nth-child(8)').should('have.text', 'Hinta: 10.00 e');
  });
});
