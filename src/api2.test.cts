import { describe, expect, jest, test } from '@jest/globals';
import { helloWorld } from "./api.js";

/* istanbul ignore next */
describe('helloWorld', () => {
  test('should return "Hello World"', () => {
    expect.assertions(2);
    const logSpy = jest.spyOn(console, 'log');
    expect(helloWorld(false)).toBe("Hello World");
    expect(logSpy).toHaveBeenCalledWith("Hello World");
  });

  test('should append exclamation mark', () => {
    expect.assertions(2);
    const logSpy = jest.spyOn(console, 'log');
    expect(helloWorld(true)).toBe("Hello World!");
    expect(logSpy).toHaveBeenCalledWith("Hello World!");
  });
});