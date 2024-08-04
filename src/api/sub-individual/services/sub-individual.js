'use strict';

/**
 * sub-individual service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::sub-individual.sub-individual');
