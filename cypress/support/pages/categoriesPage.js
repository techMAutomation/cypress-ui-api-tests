class CategoriesPage {

    getCatalogMenu() {
        return cy.get('p').contains('Catalog')
    }

    getCategoriesMenu() {
        return cy.get('p').contains('Categories')
    }

    getAddNewButton() {
        return cy.get('a').contains('Add new')
    }

    getCategoryNameInput() {
        return cy.get('#Name')
    }

    getParentCategoryDropdown() {
        return cy.get('#ParentCategoryId')
    }

    getPictureUploadFileButton() {
        return cy.get('input[type="file"]')
    }

    getSaveButton() {
        return cy.get('[name="save"]')
    }

    getCategorySuccessText() {
        return cy.get('div.alert-success').contains('added')
    }

    getSearchCategoryName() {
        return cy.get('#SearchCategoryName')
    }

    getSearchButton(){
        return cy.get('#search-categories').contains('Search')
    }

    getAllCheckboxesTable() {
        return cy.get('table > thead > tr > th:nth-child(1) > input')
    }

    getDeleteButton() {
        return cy.get('#delete-selected')
    }

    getYesButtonInConfirmationModal() {
        return cy.get('#delete-selected-action-confirmation-submit-button').contains('Yes')
    }

    getNoDataAvailableMessageInTable() {
        return cy.get('.dataTables_empty')
    }

}
export default CategoriesPage;
