const optionDefaults = {
  id: null,
};

class CommandTypedef {
  constructor(options = {}) {
    this.options = { ...optionDefaults, ...options };

    this.parse = async value => value;
    this.validate = async () => true;
  }

  async check(param, message) {
    const value = await this.parse(param, message);
    const passed = await this.validate(value, param, message);
    return { value, passed };
  }
}

module.exports = { CommandTypedef };
