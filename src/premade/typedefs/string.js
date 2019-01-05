const { ParameterType } = require('./../../structures/ParameterType');

module.exports = class extends ParameterType {
  constructor(registry) {
    super(registry, { id: 'string' });
  }

  /* eslint-disable class-methods-use-this */
  async parse(string) {
    return String(string);
  }

  async validate(value) {
    return typeof value === 'string';
  }
  /* eslint-enable class-methods-use-this */
};
