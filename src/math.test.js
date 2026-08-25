const { add, subtract, multiply, divide } = require("./math");

describe("Math functions", () => {
    describe("add", () => {
        test("adds positive numbers correctly", () => {
            expect(add(2, 3)).toBe(5);
        });

        test("adds negative numbers correctly", () => {
            expect(add(-2, -3)).toBe(-5);
        });
    });

    describe("subtract", () => {
        test("subtracts numbers correctly", () => {
            expect(subtract(5, 3)).toBe(2);
        });

        test("handles negative results", () => {
            expect(subtract(3, 5)).toBe(-2);
        });
    });

    describe("multiply", () => {
        test("multiplies numbers correctly", () => {
            expect(multiply(3, 4)).toBe(12);
        });

        test("multiplies with zero", () => {
            expect(multiply(5, 0)).toBe(0);
        });
    });

    describe("divide", () => {
        test("divides numbers correctly", () => {
            expect(divide(10, 2)).toBe(5);
        });

        test("throws an error when dividing by zero", () => {
            expect(() => divide(10, 0)).toThrow("Cannot divide by zero");
        });
    });
});