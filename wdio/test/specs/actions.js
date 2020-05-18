const assert = require('assert');

describe('todo actions', () => {
    beforeEach(() => {
        browser.url('/');
        $('.new-todo').waitForDisplayed();
        $('.new-todo').setValue('Learn JavaScript');
        browser.keys("\uE007");
    });

    it('should add a new todo to the list', () => {
        assert.equal($('label').getText(), 'Learn JavaScript');
        assert.equal($('.toggle').isSelected(), false);
    });

    describe('toggling todos', () => {
        it('should toggle test correctly', () => {
            $('.toggle').click();
            assert.equal($('.toggle').isSelected(), true);
        });
        it('should clear completed', () => {
            $('.toggle').click();
            $('.clear-completed').click();
            assert.equal($('.toggle').isExisting(), false);
        });
    });
});