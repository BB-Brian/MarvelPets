const MarvelPet = require('./models').MarvelPet;

function findAll(req, res) {
    MarvelPet.find({}).sort({ type: "ascending" })
        .then(data => res.json(data))
        .catch(errs => res.json(errs));
}

function findOne(req, res) {
    MarvelPet.findById(req.params.id)
        .then(data => res.json(data))
        .catch(errs => res.json(errs));
}

function createOne(req, res) {
    MarvelPet.create(req.body)
        .then(data => res.json(data))
        .catch(errs => res.json(errs));
}

function editOne(req, res) {
    MarvelPet.findByIdAndUpdate(req.params.id, req.body, {
        runValidators: true, context: "query"
    })
        .then(data => res.json(data))
        .catch(errs => res.json(errs));
}

function deleteOne(req, res) {
    MarvelPet.findByIdAndRemove(req.params.id)
        .then(data => res.json({ status: 'delete is working', data: data }))
        .catch(errs => res.json({ status: 'delete hit an error', data: errs }));
}

module.exports = {
    findAll: findAll,
    findOne: findOne,
    createOne: createOne,
    editOne: editOne,
    deleteOne: deleteOne
};