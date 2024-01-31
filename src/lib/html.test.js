import { describe, expect, it } from '@jest/globals';
import { indexTemplate, leikirTemplate, stadaTemplate, template } from './html';

describe('html', () => {
  describe.only('indexTemplate', () => {
    it('should have a test', () => {
      expect(indexTemplate()).toBe('html');
    });
  });


  describe.only('template', () => {
    it('should return null if input is invalid',
     () => {
        const result = template('lol', null);

        expect(result).toBe(null);
     });
    });

  describe.only('stadaTemplate', () => {
    it('should return null if data is invalid',
     () => {
        const result = stadaTemplate(null);

        expect(result).toBe(null);
     });
  });

  describe.only('leikirTemplate', () => {
    it('should return null if data is invalid',
     () => {
        const result = leikirTemplate(null);

        expect(result).toBe(null);
     });
  });

});
