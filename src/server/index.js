require('dotenv').config();

const express = require('express');
const path = require('path');
const { find, filter, uniqBy } = require('lodash');
const { ApolloServer, gql } = require('apollo-server-express');

const data = require('./data').map((d) => {
    d.house = { name: d.house };
    return d;
});

const typeDefs = gql(`
    type Emperor {
        name: String
        imageUrl: String
        house: House
    }

    type House {
        name: String
        members: [Emperor]
    }
    
    type Query {
        emperors: [Emperor]
        emperor: Emperor
        houses: [House]
    }
`);

const resolvers = {
    Query: {
        emperors: (parent, args, context, info) => { 
            return filter(data, args);
        },
        emperor: (parent, args, context, info) => { 
            return find(data, args);
        },
        houses: (parent, args, context, info) => {
            const housesHash = {};

            return uniqBy(data.map((emperor) => emperor.house), (h) => h.name);
        }
    },
    House: {
        members: (house) => {
            return data.filter((emperor) => emperor.house.name === house.name);
        }
    }
};

const context  = async ({req}) => {

};

const server = new ApolloServer({ typeDefs, resolvers, context });

const app = express();

const port = Number(process.env.PORT) || 3000;

app.use('/', express.static('build'));
server.applyMiddleware({ app });

app.listen(port, (err) => {
    if (err) {
        console.error(err.stack);
        return process.exit(1);
    } 

    console.log(`listening on ${port}`);
    console.log(`graphql at ${server.graphqlPath}`)
});