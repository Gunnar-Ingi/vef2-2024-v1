import { describe, expect, it } from '@jest/globals';
import { indexTemplate, leikirTemplate, stadaTemplate, template } from './html';

describe('html', () => {
  describe.only('indexTemplate', () => {
    it('should generate the html', () => {
      const result = indexTemplate();

      expect(result).toContain('<h1>Velkomin í Boltadeildina!</h1>');
    });
  });


  describe.only('template', () => {
    it('should return null if input is invalid',
     () => {
        const result = template('lol', null);

        expect(result).toBe('');
     });
     it('should return html',
     () => {
        const result = template('lol', 'blah');

        expect(result).toContain('blah');
     });
  });

  describe.only('stadaTemplate', () => {
    it('should return null if data is invalid',
     () => {
        const result = stadaTemplate(null);

        expect(result).toBe('empty');
     });

     it('should generate this html',
     () => {
        const result = stadaTemplate('the thing');

        expect(result).toContain(
          'the thing');
     });
  });

  describe.only('leikirTemplate', () => {
    it('should return null if data is invalid',
     () => {
        const result = leikirTemplate([undefined]);

        expect(result).toBe('null');
     });
  });

});
