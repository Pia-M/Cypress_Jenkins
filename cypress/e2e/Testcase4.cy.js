
it('Test case 4', () => {

    cy.visit('/');
    cy.get(':nth-child(1) > :nth-child(1) > .card-body > h5').click();
    cy.get(':nth-child(1) > .element-list > .menu-list > #item-3').click();
cy.get('select').select("5");
cy.get('#addNewRecordButton').click();
cy.get('#firstName').type("piya");
cy.get('#lastName').type("mukherji");
cy.get('#userEmail').type("piya.m@gmail.com");
cy.get('#age').type("40");
cy.get('#salary').type("33000");
cy.get('#department').type("QA");
cy.get('#submit').click();


cy.wait(10000);
cy.get('#edit-record-1').scrollIntoView().click();
cy.wait(10000);
cy.get('#firstName').clear().type("piya");   
cy.get('#submit').click();

cy.get('#searchBox').type("piya").click();
cy.get('.rt-tr-group').should('contain','piya');
cy.get('[title="Delete"]').eq(1).click();



})

