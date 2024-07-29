'use strict';

/**
 * offensive-security service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::offensive-security.offensive-security');
