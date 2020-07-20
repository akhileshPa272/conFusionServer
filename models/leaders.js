const mongoose = require('mongoose');
const Schema = mongoose.Schema;
require('mongoose-currency').loadType(mongoose);
const Currency = mongoose.Types.Currency;

const leaderSchema = new Schema({
	name:{
		type: String,
		required: true,
		unique: true,
	},
	image:{
    	type: String,
    	require: true
    },
    designation:{
    	type: String,
    	required: true
    },
    abbr: {
    	type: String,
    	required: true
    },
    description: {
        type: String,
        required: true
    },
    featured:{
    	type: Boolean,
    	default: false
    }
});

var Leaders = mongoose.model('leader', leaderSchema);

module.exports = Leaders;