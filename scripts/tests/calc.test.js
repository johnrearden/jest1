const { TestScheduler } = require("jest");
const addition = require("../calc");

describe("Calculator", () => {
    describe("Addition function", () => {
        test("should return 42 for 20 + 22", () => {
            expect(addition(20, 22)).toBe(42);
        });
        test("should return 43 for 21 + 22", () => {
            expect(addition(21, 22)).toBe(43);
        });
        test("should throw an error for non-number parameters", () => {
            expect(() => {addition(20, 'str')}).toThrow();
        });
        test("should throw an error for no parameters", () => {
            expect(() => {addition()}).toThrow();
        });
        test("should throw an error for null as one or both parameters", () => {
            expect(() => {addition(1, null)}).toThrow();
        });
        test("should give correct answer for floats as parameters", () => {
            expect(addition(20.234, 1)).toBeCloseTo(21.234, 4);
        })
    });
    describe("Subtraction function", () => {

    });
    describe("Multiplication function", () => {

    });
    describe("Division function", () => {

    });
})