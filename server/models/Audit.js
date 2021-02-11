const mongoose = require('mongoose');
const { Schema } = mongoose;

const auditSchema = new Schema({
    _user: { type: Schema.Types.ObjectId, ref: 'User' },
    rating: Number,
    description: String,
    dateCreated: Date
});

mongoose.model('audits', auditSchema);