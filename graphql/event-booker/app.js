const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const graphqlHttp = require('express-graphql');
const { buildSchema } = require('graphql');
const bcrypt = require('bcryptjs');

const Event = require('./models/event');
const User = require('./models/user');

const app = express();

app.use(bodyParser.json());

app.use(
  '/graphql',
  graphqlHttp({
    schema: buildSchema(`
    type Event {
      _id: ID!
      title: String!
      description: String!
      price: Float!
      date: String!
    }

    type User {
      _id: ID!
      email: String!
      password: String
    }

    input EventInput {
      title: String!
      description: String!
      price: Float!
      date: String!
    }

    input UserInput {
      email: String!
      password: String!
    }

    type RootQuery {
      events: [Event!]!
    }

    type RootMutation {
      createEvent(eventInput: EventInput): Event
      createUser(userInput: UserInput): User
    }

    schema {
      query: RootQuery
      mutation: RootMutation
    }
  `),
    rootValue: {
      events: () => {
        return Event.find()
          .then(events => {
            return events.map(event => {
              return { ...event._doc };
              // return { ...event._doc, _id: event._doc._id.toString() };
            });
          })
          .catch(err => {
            throw err;
          });
      },
      createEvent: args => {
        const event = new Event({
          title: args.eventInput.title,
          description: args.eventInput.description,
          price: +args.eventInput.price,
          date: new Date(args.eventInput.date),
          creator: '5c5271eb92324e31b89ac07f'
        });
        let createdEvent;
        return event
          .save()
          .then(result => {
            createdEvent = { ...result._doc };
            // createdEvent = { ...result._doc, _id: event._doc._id.toString() };
            return User.findById('5c5271eb92324e31b89ac07f');
          })
          .then(user => {
            if (!user) {
              throw new Error('User not found');
            }
            user.createdEvents.push(event);
            return user.save();
          })
          .then(() => {
            return createdEvent;
          })
          .catch(err => {
            console.log(err);
            throw err;
          });
      },
      createUser: args => {
        // Check for existing user, to prevent duplicates
        return User.findOne({ email: args.userInput.email })
          .then(user => {
            if (user) {
              throw new Error('User already exists');
            }
            return bcrypt.hash(args.userInput.password, 12);
          })
          .then(hashedPassword => {
            const user = new User({
              email: args.userInput.email,
              password: hashedPassword
            });
            return user.save();
          })
          .then(result => {
            return { ...result._doc, password: null, _id: result.id };
          })
          .catch(err => {
            throw err;
          });
      }
    },
    graphiql: true // use for debug only
  })
);

mongoose
  .connect(
    `mongodb://${process.env.MONGO_USER}:${
      process.env.MONGO_PASSWORD
    }@localhost:27017/${process.env.MONGO_DB}?retryWrites=true`,
    // 'mongodb://localhost:27017/eb?retryWrites=true',
    { useNewUrlParser: true }
  )
  .then(() => {
    // ('MongoDB works');
    app.listen(5002);
  })
  .catch(err => console.log(err));
