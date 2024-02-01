import { describe, expect, it } from '@jest/globals';
import { calculateStandings } from './score';

describe('score', () => {
  describe.only('calculateStandings', () => {
    it('should return a num', () => {
      expect(calculateStandings(0)).toBe(0);
    });
  });
});
