/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it

const { CURRENT_EVENT } = require('./page-config');

exports.onCreatePage = ({ page, actions }) => {
  const { createPage, deletePage } = actions;

  deletePage(page);
  createPage({
    ...page,
    context: {
      ...page.context,
      currentEvent: CURRENT_EVENT,
    },
  });
};
