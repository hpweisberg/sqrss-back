import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const nflTeamSchema = new Schema(
  {
    teamName: {
      type: String,
      required: true,
      enum: [
        'Arizona Cardinals',
        'Atlanta Falcons',
        'Baltimore Ravens',
        'Buffalo Bills',
        'Carolina Panthers',
        'Chicago Bears',
        'Cincinnati Bengals',
        'Cleveland Browns',
        'Dallas Cowboys',
        'Denver Broncos',
        'Detroit Lions',
        'Green Bay Packers',
        'Houston Texans',
        'Indianapolis Colts',
        'Jacksonville Jaguars',
        'Kansas City Chiefs',
        'Las Vegas Raiders',
        'Los Angeles Chargers',
        'Los Angeles Rams',
        'Miami Dolphins',
        'Minnesota Vikings',
        'New England Patriots',
        'New Orleans Saints',
        'New York Giants',
        'New York Jets',
        'Philadelphia Eagles',
        'Pittsburgh Steelers',
        'San Francisco 49ers',
        'Seattle Seahawks',
        'Tampa Bay Buccaneers',
        'Tennessee Titans',
        'Washington Football Team',
      ],
    },
    score: {
      type: Number,
      default: 0,
      required: true,
    },
  },
  { timestamps: true }
);

const squareSchema = new Schema(
  {
    contestant: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Profile',
      required: true,
    },
    squareNum: {
      type: Number,
      required: true,
    },
    time: {
      type: Date,
      required: true,
    },
  },
  { timestamps: true }
);

const teamQuarterScoreSchema = new Schema({
  team: nflTeamSchema,
  q1Score: {
    type: Number,
    default: 0,
    required: true,
  },
  q2Score: {
    type: Number,
    default: 0,
    required: true,
  },
  q3Score: {
    type: Number,
    default: 0,
    required: true,
  },
  q4Score: {
    type: Number,
    default: 0,
    required: true,
  },
});

const gameSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    HomeTeam: teamQuarterScoreSchema,
    AwayTeam: teamQuarterScoreSchema,
    timeLeft: {
      type: Number,
    },
    contestants: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Profile',
        validate: {
          validator: function (arr) {
            return arr.length <= 100; // Maximum 100 contestants
          },
          message: 'Maximum 100 contestants allowed.',
        },
      },
    ],
    squares: [squareSchema],
    gameHasStarted: {
      type: Boolean,
      default: false,
      required: true,
    },
    gameHasEnded: {
      type: Boolean,
      default: false,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Game = mongoose.model('Game', gameSchema);

export { Game };
