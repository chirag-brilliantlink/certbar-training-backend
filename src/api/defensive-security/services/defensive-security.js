'use strict';

/**
 * defensive-security service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::defensive-security.defensive-security');
