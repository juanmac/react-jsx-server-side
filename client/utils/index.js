// A utility function to safely escape JSON for
// embedding in a <script> tag. Taken from here:
// https://github.com/mhart/react-server-example/blob/master/server.js#L96
module.exports.safeStringify = function(obj) {
  return JSON.stringify(obj).replace(/<\/script/g, '<\\/script').replace(/<!--/g, '<\\!--')
}