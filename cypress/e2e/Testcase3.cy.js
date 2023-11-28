it('Test case 3', () => {
    cy.visit('/');
    
    cy.get(':nth-child(1) > :nth-child(1) > .card-body > h5').click();
    cy.get(':nth-child(1) > .element-list > .menu-list > #item-2').click();
    try{
    cy.get('.custom-control.disabled > .custom-control-label').click();
    }
    catch(e){
        cy.get('.text-success').should('not.be.visible');
    }
    

});
