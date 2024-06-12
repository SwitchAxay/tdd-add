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
});
