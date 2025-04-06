const mongoose = require('mongoose');

const folderStruct = new mongoose.schema({
    title: String
});

module.exports = mongoose.model('folder', foldersSchema);