#!/bin/node
const { sequelize } = require('../models');
sequelize.sync({ force: true }).then(() => { process.exit(0) });