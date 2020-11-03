const db = require('../models');
const Setting = db.settings;
const Op = db.Sequelize.Op;

// Get Setting
export.findAll