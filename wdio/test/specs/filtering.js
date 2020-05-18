const assert = require('assert');

describe('filtering', function () {
    beforeEach(() => {
        browser.url('/');
        $('.new-todo').setValue('Learn JavaScript');
        browser.keys("\uE007");
        $('.new-todo').setValue('Check Cypress Documentation');
        browser.keys("\uE007");
        $('.new-todo').setValue('Use Cypress');
        browser.keys("\uE007");
        $('.todo-list li:nth-child(2) .toggle').click();
    });

    it('should filter "Active" correctly', () => {
        $('//a[text()="Active"]').click();
        assert.equal($$('.todo-list li')[0].getText(), 'Use Cypress');
        assert.equal($$('.todo-list li')[1].getText(), 'Learn JavaScript');
    });

    it('should filter "Completed" correctly', () => {
        $('//a[text()="Completed"]').click();
        assert.equal($$('.todo-list li')[0].getText(), 'Check Cypress Documentation');
    });

    it('should filter "All" correctly', () => {
        $('//a[text()="All"]').click();
        assert.equal($$('.todo-list li')[0].getText(), 'Use Cypress');
        assert.equal($$('.todo-list li')[1].getText(), 'Check Cypress Documentation');
        assert.equal($$('.todo-list li')[2].getText(), 'Learn JavaScript');
    });
});