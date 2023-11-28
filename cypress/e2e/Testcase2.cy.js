    

    it('Test case 2', () => {
        cy.visit('/');
        
        cy.get(':nth-child(1) > :nth-child(1) > .card-body > h5').click();
        cy.get(':nth-child(1) > .element-list > .menu-list > #item-1').click();
        cy.get('.rct-checkbox').click();
        cy.get('#result > :nth-child(1)').should('be.visible');
    
    });
   