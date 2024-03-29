import { describe, expect, it } from '@jest/globals';
import { parseDateJson, parseGames, parseTeamsJson } from './parse';

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

          expect(result).toStrictEqual([]);
       });

       it('should return null if data is missing date',
       () => {
          const result = parseGames('{"games": []}');

          expect(result).toStrictEqual([]);
       });
    });

    describe('parseDateJson', () => {
      it('should return null if data is invalid json',
       () => {
          const result = parseDateJson('asdf');

          expect(result).toBe('No Date');
       });

       it('should return null if data is missing date',
       () => {
          const result = parseDateJson('{"date": []}');

          expect(result).toBe('No Date');
       });
    });
});
