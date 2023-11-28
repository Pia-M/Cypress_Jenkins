it('Test case 6', () => {
    cy.visit('/');
    cy.get(':nth-child(1) > :nth-child(1) > .card-body > h5').click();
    cy.get(':nth-child(1) > .element-list > .menu-list > #item-8').click();
    cy.wait(5000);
    cy.get('#visibleAfter').should('be.visible');
    cy.get('#enableAfter').should('be.enabled');
    cy.get('#colorChange').should('have.css', 'color', 'rgb(220, 53, 69)');

    cy.get('p').invoke('text').should('contain','This text has random Id');
    cy.get('p').should('have.text','This text has random Id');
    console.log("Piya");
    cy.screenshot();

 
});
