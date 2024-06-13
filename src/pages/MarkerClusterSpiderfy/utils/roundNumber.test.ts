import { describe, expect, it } from 'vitest';
import roundNumber from './roundNumber';

describe('roundNumber', () => {
  it('returns a six digit decimal by default', () => {
    expect(roundNumber(1.134234234234284)).toEqual(1.134234);
  });

  it('returns a eight digit decimal when given an decimalPlaces argument of 8', () => {
    expect(roundNumber(1.13423423823422342, 8)).toEqual(1.13423424);
  });
});
