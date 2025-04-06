const mongoose = require('mongoose');

const todolistSchema = new mongoose.schema({
    folderId: String,
    title: String,
    done: Boolean,
    timeToStart: Date,
    timeToFinish: Date
});

module.exports = mongoose.model('todolistStruct', todo-list);