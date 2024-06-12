import { render, screen, renderHook } from '@testing-library/react';
import handleNumberSum from '../NumberSum/handleNumberSum';

describe("Number string sum test case", () => {  
  test('Function should accept null string and return 0', async () => {
    const { result } = renderHook(() => handleNumberSum());
    expect(result.current).toEqual(0);
  });

  test('Function should accept single number string and return sum', async () => {
    const { result } = renderHook(() => handleNumberSum("8"));
    expect(result.current).toEqual(8);
  });

  test('Function should accept comma seperated string and return sum', async () => {
    const { result } = renderHook(() => handleNumberSum("8,6"));
    expect(result.current).toEqual(14);
  });

  test('Function should accept new line command in between numbers', async () => {
    const { result } = renderHook(() => handleNumberSum("8\n2,6"));
    expect(result.current).toEqual(16);
  });

  test('Function should accept delimiter', async () => {
    const { result } = renderHook(() => handleNumberSum("//;\n8;6"));
    expect(result.current).toEqual(14);
  });

  test('Function should not accept negitive number', async () => {
    try {
      expect(() => {
        renderHook(() => (handleNumberSum("8,-6, -4")))
      }).toThrow(Error("negative numbers not allowed -6 -4"))
    } catch (err) {
      return false
    }
  });
});
