describe ('Pizza Order Application', () => {
    beforeEach(() => {
        crypto.visit('http://localhost:5500')
    });
    it('sanity check to make sure tests work', () => {
        expect(1+2).to.equal(3)
        expect(2+2).not.to.equal(5)
        expect({}).not.to.equal({})
        expect({}).to.eql({})
    });
    it('inputs value', () => {
        cy.get('[for=name] > input')
        .type('Stuart')
        .should("have.value", 'Stuart')
    });
    it('toppings list', () => {
        cy.get('[for=toppings] > input')
        .check()
        .should('be.checked')
    });
    it('submit form', () => {
        cy.get('form').submit()
    });
});

