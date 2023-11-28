import textBox from './POM Test Cases';

const txt= new textBox;
import DT from '../fixtures/data.json';


before(()=>
{
    cy.visit('/');
    cy.get(':nth-child(1) > :nth-child(1) > .card-body > h5').click();
    cy.get(':nth-child(1) > .element-list > .menu-list > #item-0').click();
});

describe('Test Suite 1', () => {
    
    it('Testcase 1-Text Box Form', () => {
      

        txt.fillTextBoxform(DT.name,DT.email,DT['permanent address'],DT['current address']);
        txt.submit_click();
        cy.get('#name').should('be.visible');
        cy.screenshot();
        
    });
    
}
);