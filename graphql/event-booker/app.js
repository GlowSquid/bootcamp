const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const graphqlHttp = require('express-graphql');

const graphQLSchema = require('./graphql/schema/index');
const graphQLResolvers = require('./graphql/resolvers/index');

const app = express();

app.use(bodyParser.json());

app.use(
  '/graphql',
  graphqlHttp({
    schema: graphQLSchema,
    rootValue: graphQLResolvers,
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
