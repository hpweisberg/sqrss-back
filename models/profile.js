import mongoose from 'mongoose'

const Schema = mongoose.Schema

const profileSchema = new Schema({
  firstName: String,
  lastName: String,
  photo: String,
  initials: String,
  // contestant: [String],
  friends: [String],
  friendRequests: [String],
  blockedUser: [String],
  games: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'SqrGame'
  }],
  oldGames: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'SqrGame'
  }],
  gameInvites: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'SqrGame'
  }],

  
},{
  timestamps: true,
})

const Profile = mongoose.model('Profile', profileSchema)

export { Profile }
