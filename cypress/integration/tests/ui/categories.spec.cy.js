import CategoriesPage from '../../../support/pages/categoriesPage';
import LoginPage from '../../../support/pages/loginPage';

const loginPage = new LoginPage();
const categoriesPage = new CategoriesPage();
const categoryName = "Testing", categoryType = "Gift Cards";

describe('Category Tests',  {tags: ['@categories', '@regression']}, () => {

    beforeEach(() => {
        //visits the base url
        cy.visit('/');
        loginPage.getSubmitButton().click();
        categoriesPage.getCatalogMenu().should('be.visible').click({timout: 200});
        categoriesPage.getCategoriesMenu().should('be.visible').click();
    });

    it('Test User is able add new Category under Catalogs', () => {
        categoriesPage.getAddNewButton().should('exist').click({timout: 500});
        categoriesPage.getCategoryNameInput().clear().type(categoryName);
        categoriesPage.getParentCategoryDropdown().select(categoryType);
        //uploads picture
        categoriesPage.getPictureUploadFileButton().attachFile('gift-card.jpg');
        //wait until to upload the picture
        cy.wait(1000);
        categoriesPage.getSaveButton().should('be.visible').click({timout: 200});
        categoriesPage.getCategorySuccessText().invoke('text').then((message) => {
            cy.log(' Category Succses message :: ' + message);
            expect(message).contains('The new category has been added successfully.');
        });
    });

    it('Test User can delete the newly added category', () => {
        //enters category name in search
        categoriesPage.getSearchCategoryName().clear().type(categoryName);
        categoriesPage.getSearchButton().should('be.visible').click({timeout: 100});
        let name = categoryType + ' >> ' + categoryName;
        cy.log(' Category Search :: ' + name);
        //verifies table length
        cy.get('tbody').find('tr').contains(name).its('length').then((len) => {
            cy.log(' table length :: ' + len);
            if (len >= 1) {
                //verifies category name exists into the table
                cy.get('tbody').contains('tr', name);
                categoriesPage.getAllCheckboxesTable().click({mulitple: true, timeout: 100});
                categoriesPage.getDeleteButton().click({force: true});
                cy.wait(1000);
                //handles the modal
                cy.on('window:confirm', (text) => {
                    expect(text).to.contains('Are you sure you want to perform');
                });                
                categoriesPage.getYesButtonInConfirmationModal().dblclick({force: true});
                //verifies empty table data text
                categoriesPage.getNoDataAvailableMessageInTable().invoke('text').then((message)  => {
                    expect(message).contains('No data available in table');
                });
            }
        });
    });

});