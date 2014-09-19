// Import the page-mod API
var pageMod = require("sdk/page-mod");

pageMod.PageMod({
  include: [/.*ietf.org\/(about|blog).*/, "*.youtube.com", /.*(odnoklassniki|ok).ru.*/],
  contentScript: 'document.body.innerHTML = ' +
                 ' "<h1>Page matches ruleset</h1>";'
});
