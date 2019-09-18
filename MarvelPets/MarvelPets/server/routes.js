const bp = require('body-parser');
const api = require('./controllers');

function router(app) {
    app.use(bp.json());
    app.get('/marvelpets', api.findAll);
    app.get('/marvelpets/:id', api.findOne);
    app.post('/marvelpets', api.createOne);
    app.patch('/marvelpets/:id', api.editOne);
    app.delete('/marvelpets/:id', api.deleteOne);
}

module.exports = router;