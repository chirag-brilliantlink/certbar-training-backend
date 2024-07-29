'use strict';

/**
 * ethical-hacking service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::ethical-hacking.ethical-hacking');
