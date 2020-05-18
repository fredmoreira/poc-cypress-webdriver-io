/// <reference types="cypress" />

describe('todo actions', () => {
  beforeEach(() => {
    cy.visit('http://todomvc-app-for-testing.surge.sh/');
    cy.get('.new-todo').type('Learn JavaScript{enter}');
  });

  it('should add a new todo to the list', () => {
    cy.get('label').should('have.text', 'Learn JavaScript');
    cy.get('.toggle').should('not.be.checked');
  });

  describe('toggling todos', () => {
    it('should toggle test correctly', () => {
      cy.get('.toggle').click();
      cy.get('label').should('have.css', 'text-decoration-line', 'line-through');
    });

    it('should clear completed', () => {
      cy.get('.toggle').click();
      cy.contains('Clear completed').click();
      cy.get('.todo-list').should('not.have.descendants', 'li');
    });
  });
});