const React = require("react");
const { Layout } = require("./src/components");

exports.wrapPageElement = ({ element, props }) => {
  return <Layout {...props}>{element}</Layout>;
};
