class textBox{

    username_input(){
        return cy.get('#userName');
    }
    useremail_input(){
        return cy.get('#userEmail');
    }
    currentAddress_input(){
        return cy.get('#currentAddress');
    }
    permanentAddress_input(){
        return cy.get('#permanentAddress');
    }
    submit_click(){
        return cy.get('#submit').click();
    }

fillTextBoxform(name,email,c_add,p_add){

    this.username_input().type(name);
    this.useremail_input().type(email);
    this.currentAddress_input().type(c_add);
    this.permanentAddress_input().type(p_add);
    this.submit_click();

}
}
export default textBox;





    



