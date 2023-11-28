it('Test case 5', () => {

    cy.visit('/');
    cy.get(':nth-child(1) > :nth-child(1) > .card-body > h5').click();
    cy.get(':nth-child(1) > .element-list > .menu-list > #item-4').click();
    cy.get('#doubleClickBtn').dblclick();
    cy.get('#doubleClickMessage').should('be.visible');
    cy.get('#rightClickBtn').rightclick();
    cy.get('#rightClickMessage').should('be.visible');
    cy.get('[class="btn btn-primary"]').eq(2).click();
    cy.get('#dynamicClickMessage').should('be.visible');
    
});


