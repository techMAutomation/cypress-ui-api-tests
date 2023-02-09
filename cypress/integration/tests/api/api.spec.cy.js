//CYPRESS API TESTS

describe('API Tests',  {tags: ['@apiSmoke', '@apiRegression']}, () => {

    it('Test to Get Users list', () => {
        cy.request({
            method: 'GET',
            url: Cypress.env('apiUrl')  + '/users',
            failOnStatusCode: false,
        }).then(({body}) => {
            cy.log('response :: ' + JSON.stringify(body));
            let res = body;
            if (res !== null) {
                const name = res[1].name
                cy.log(' username :: ' + name);
                expect(name).not.to.be.empty;
            }
        }); 
    });

    it('Test to see User Not Found message', () => {
        cy.request({
            method: 'GET',
            url: Cypress.env('apiUrl')  + '/users/692',
            failOnStatusCode: false,
        }).then(({body}) => {
            cy.log('response :: ' + JSON.stringify(body));
            expect(body.message).equal('Resource not found');
        }); 
    });

    it('Test to Get Specific User details', () => {
        const userId = '350062';
        cy.request({
            method: 'GET',
            url: Cypress.env('apiUrl')  + '/users/'+ userId,
            failOnStatusCode: false,
        }).then(({body}) => {
            cy.log('response :: ' + JSON.stringify(body));
            if (body !== null) {
                const id = JSON.stringify(body.id);
                expect(id).to.include(userId);
            }
        }); 
    });

});