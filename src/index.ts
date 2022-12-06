const express = require('express');
const bodyParser = require('body-parser');
// const graphqlHttp = require('express-graphql');
const { buildSchema } = require('graphql');
const { graphqlHTTP } = require('express-graphql');
// const graphqlHTTP = require('express-graphql').graphqlHTTP;

const app = express();

app.use(bodyParser.json());

app.use('/graphql',graphqlHTTP({
    schema: buildSchema(`
        type RootQuery {
            events: [String!]!
        }
        type RootMutation {
            createEvent(name: String): String
        }
        schema {
            query: RootQuery
            mutation: RootMutation
        }
    `),
    rootValue: {
      events: () => {
        return ['Romantic Cooking', 'Sailing', 'All-Night Coding'];
      },
      createEvent: (args:any) => {
        const eventName = args.name;
        return eventName;
      }
    },
    graphiql: true
  })
);

app.listen(5000);