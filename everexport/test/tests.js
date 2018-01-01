// Tests for EverExport
const assert = require('assert');
const everexport = require('everexport');

describe('EvernoteExporter', () => {
  const token = 'S=s1:U=93aa5:E=167af159bc9:C=16057646f00:P=1cd:A=en-devtoken:V=2:H=62d4673ee2568acef054ff56e5c1e41d';
  const exporter = new everexport.EvernoteExporter(token, true)
  
  describe('#listNotebooks()', () => {
    it('should return an array of four Notebooks', () => {
      exporter.listNotebooks().then((notebooks) => {
        assert(Array.isArray(notebooks) &&  notebooks.length == 4)
      });
    });
  });
});
