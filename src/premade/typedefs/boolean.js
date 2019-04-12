const { ParameterType } = require('./../../structures/ParameterType');

const truthy = ['yes', 'y', 'true', 't', 'confirm', 'c', '1'];
const falsey = ['no', 'n', 'false', 'f', 'deny', 'd', '0'];

module.exports = class extends ParameterType {
  constructor(registry) {
    super(registry, { id: 'boolean' });
  }

  /* eslint-disable class-methods-use-this */
  async parse(string) {
    let value = string;
    value = value.toLowerCase();
    if (truthy.includes(value)) return true;
    if (falsey.includes(value)) return false;
    return null;
  }

  async validate(value) {
    if (typeof value === 'boolean') return true;
    return false;
  }
  /* eslint-enable class-methods-use-this */
};
