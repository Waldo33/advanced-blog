import { classNames } from 'shared/lib/classNames/classNames';

describe('classNames', () => {
    test('with only first param', () => {
        expect(classNames('someClass')).toBe('someClass');
    });

    test('with additional classes', () => {
        const expected = 'someClass test1 test2';
        expect(classNames('someClass', {}, ['test1', 'test2'])).toBe(expected);
    });

    test('with mods classes', () => {
        const expected = 'someClass test1 test2 hovered scroll';
        expect(classNames(
            'someClass',
            { hovered: true, scroll: true },
            ['test1', 'test2'],
        )).toBe(expected);
    });

    test('with mods classes false', () => {
        const expected = 'someClass test1 test2 hovered';
        expect(classNames(
            'someClass',
            { hovered: true, scroll: false },
            ['test1', 'test2'],
        )).toBe(expected);
    });

    test('with mods classes undefined', () => {
        const expected = 'someClass test1 test2 hovered';
        expect(classNames(
            'someClass',
            { hovered: true, scroll: undefined },
            ['test1', 'test2'],
        )).toBe(expected);
    });
});
