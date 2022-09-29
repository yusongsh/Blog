const path = require(`path`);

// Create blog pages dynamically
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const blogPostTemplate = path.resolve(`src/templates/blogPost.js`);
  const featuredPostTemplate = path.resolve(`src/templates/featuredPost.js`);

  const result = await graphql(`
    query {
      allContentfulHomepageDestination {
        edges {
          node {
            slug
            id
          }
        }
      }
      allContentfulBlogPost {
        edges {
          node {
            id
          }
        }
      }
      allContentfulFeatured {
        edges {
          node {
            slug
            id
          }
        }
      }
    }
  `);
  result.data.allContentfulHomepageDestination.edges.forEach((edge) => {
    createPage({
      path: `/${edge.node.slug}`,
      component: blogPostTemplate,
      context: {
        blogPostId: edge.node.id,
      },
    });
  });
  result.data.allContentfulFeatured.edges.forEach((edge) => {
    createPage({
      path: `/${edge.node.slug}`,
      component: featuredPostTemplate,
      context: {
        featuredPostId: edge.node.id,
      },
    });
  });
};
