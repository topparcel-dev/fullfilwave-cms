/**
 * A set of functions called "actions" for `doc`
 */

export default {
  loadJson: async (ctx) => {
    try {
      ctx.body = await strapi.service("api::doc.doc").loadJson();
    } catch (err) {
      ctx.body = err;
    }
  }
};
