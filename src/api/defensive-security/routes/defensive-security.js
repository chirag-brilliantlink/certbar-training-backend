'use strict';

/**
 * defensive-security router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::defensive-security.defensive-security');
