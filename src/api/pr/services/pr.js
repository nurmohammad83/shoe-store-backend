'use strict';

/**
 * pr service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::pr.pr');
