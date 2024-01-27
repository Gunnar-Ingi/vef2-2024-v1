import { describe, expect, it } from '@jest/globals';
import { parseGames, parseTeamsJson } from './parse';

describe('parse', () => {
  describe('parseTeamsJson', () => {
    it('should have a test', () => {
      expect(parseTeamsJson('{}')).toEqual({});
    });
  });

    describe('parseGames', () => {
      it('should return null if data is invalid json',
       () => {
          const result = parseGames('asdf');

          expect(result).toBe(null);
       });

       it('should return null if data is missing date',
       () => {
          const result = parseGames('{"games": []}');

          expect(result).toBe(null);
       });
    });
});
