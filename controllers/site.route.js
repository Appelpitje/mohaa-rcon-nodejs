module.exports = function(app) {
    const Site = require('./site.controller.js');

    app.get('/', Site.showFrontpage);
    app.post('/rcon', Site.handleRCON);
}
