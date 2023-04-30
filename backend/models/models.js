const uuid = require("uuid");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// collection for org
const orgDataSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
  },
  {
    collection: "org",
  }
);

// collection for clients
const clientDataSchema = new Schema(
  {
    _id: { type: String, default: uuid.v1 },
    firstName: {
      type: String,
      required: true,
    },
    middleName: {
      type: String,
    },
    lastName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
    },
    phoneNumber: {
      primary: {
        type: String,
        required: true,
      },
      alternate: {
        type: String,
      },
    },
    address: {
      line1: {
        type: String,
      },
      line2: {
        type: String,
      },
      city: {
        type: String,
        required: true,
      },
      county: {
        type: String,
      },
      zip: {
        type: String,
      },
    },
    orgs: {
      type: [{ type: String, ref: "org" }],
      required: true,
      validate: [(org) => org.length > 0, "needs at least one org"],
    },
  },
  {
    collection: "client",
    timestamps: true,
  }
);

// collection for events
const eventDataSchema = new Schema(
  {
    _id: { type: String, default: uuid.v1 },
    org: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    services: [
      {
        type: String,
      },
    ],
    date: {
      type: Date,
      required: true,
    },
    address: {
      line1: {
        type: String,
      },
      line2: {
        type: String,
      },
      city: {
        type: String,
      },
      county: {
        type: String,
      },
      zip: {
        type: String,
      },
    },
    description: {
      type: String,
    },
    attendees: [
      {
        type: String,
        ref: "client",
      },
    ],
  },
  {
    collection: "event",
  }
);

// collection for user credentials encrypted with bcrypt
const authDataSchema = new Schema(
  {
    _id: {
      type: String,
      default: uuid.v1,
      required: true,
    },
    userName: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  {
    collection: "auth",
  }
);

const userDataSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ["viewer", "editor"],
    default: "viewer",
  },
  org: {
    type: String,
    required: true,
  },
});

const serviceSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String },
  active: { type: Boolean, default: true },
  org: { type: String, required: true },
});

// create models from mongoose schemas
const clients = mongoose.model("client", clientDataSchema);
const service = mongoose.model("Service", serviceSchema);
const orgs = mongoose.model("org", orgDataSchema);
const events = mongoose.model("event", eventDataSchema);
const auth = mongoose.model("auth", authDataSchema);
const user = mongoose.model("user", userDataSchema);

// package the models in an object to export
module.exports = { clients, orgs, events, auth, user, service };
