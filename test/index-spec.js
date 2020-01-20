const expect = require('chai').expect
const server = require('../index');
const yamlLint = require('yaml-lint');
 
yamlLint.lint('test: 123').then(() => {
  console.log('Valid YAML file.');
}).catch((error) => {
  console.error('Invalid YAML file.', error);
});

describe('test', () => {
  it('should return a string', () => {
    expect('ci with travis').to.equal('ci with travis');
  });
});
