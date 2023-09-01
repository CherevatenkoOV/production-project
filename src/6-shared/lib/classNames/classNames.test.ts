import {classNames} from "./classNames";


describe('classNames', () => {

    test('only styles from cls', () => {
        const expected = "class-from-cls"
        expect(classNames('class-from-cls')).toBe(expected)
    })

    test('styles from cls + mods', () => {
        const expected = "class-from-cls hovered"
        expect(classNames('class-from-cls', {hovered: true})).toBe(expected)
    })

    test('styles from cls + 1 mode true + additional classes', () => {
        const expected = "class-from-cls class1 class2 hovered"
        expect(classNames('class-from-cls', {hovered: true}, ["class1", "class2"])).toBe(expected)
    })

    test('styles from cls + 1 mode true + additional classes', () => {
        const expected = "class-from-cls class1 class2 hovered"
        expect(classNames('class-from-cls', {hovered: true}, ["class1", "class2"])).toBe(expected)
    })

    test('styles from cls + 1 mode true + 1 mode false + additional classes', () => {
        const expected = "class-from-cls class1 class2 hovered"
        expect(classNames('class-from-cls', {hovered: true, scrollable: false}, ["class1", "class2"])).toBe(expected)
    })

});