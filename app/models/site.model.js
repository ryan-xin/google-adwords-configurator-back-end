module.exports = (sequelize, Sequelize) => {
  const Keyword = sequelize.define('keyword', {
    url: {
      type: Sequelize.STRING
    }
  });

  return Keyword;
};