module.exports = (sequelize, Sequelize) => {
  const Setting = sequelize.define('setting', {
    data: {
      type: Sequelize.TEXT,
      get: () => {
        return JSON.parse(this.getDataValue('data'));
      },
      set: (value) => {
        return this.setDataValue('data', JSON.stringify(value));
      }
    }
  });

  return Setting;
};