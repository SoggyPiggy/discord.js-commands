const { ParameterType } = require('./../../structures/ParameterType');

module.exports = class extends ParameterType {
  constructor(registry) {
    super(registry, { id: 'boolean' });
  }

  /* eslint-disable class-methods-use-this */
  async parse(string) {
    return Number(string);
  }

  async validate(value, original) {
    return !Number.isNaN(original);
  }
  /* eslint-enable class-methods-use-this */
};
