import mongoose from 'mongoose';


const blacklistSchema = new mongoose.Schema({
    token: {
        type: String,
        required: true,
        unique: true,
    },
    blockedAt: {
        type: Date,
        default: Date.now,
    },
    expiresAt: {
        type: Date,
        default: function() {
            return new Date(this.blockedAt.getTime() + 24 * 60 * 60 * 1000);
        }
    },
});

const BlacklistToken = mongoose.model('BlacklistToken', blacklistSchema);

export default BlacklistToken;