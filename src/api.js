
import {
    graphql,
    GraphQLSchema,
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt
  } from 'graphql';  

export const schema = new GraphQLSchema({
    people: new GraphQLObjectType({
        name: 'people',
        fields: {
            image: {
                type: GraphQLString
            },
            name: {
                type: GraphQLString
            },
            id: {
                type: GraphQLInt
            }
        }
    }),
    groups: new GraphQLObjectType({
        name: 'groups',
        fields: {
            name: {
                type: GraphQLString
            }
        }
    })
});

export default class API {
    constructor() {

    }

    async request(query) {
        return (await (await fetch(`/graphql`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ query })
        })).json()).data;
    } 

    async emperors() {
        return (await this.request(`
            query {
                emperors {
                    name
                    imageUrl
                    house {
                        name
                    }
                }
            }
        `)).emperors;
    }

    async houses() {
        return (await this.request(`
            query {
                houses {
                    name
                    members {
                        name,
                        imageUrl
                    }
                }
            }
        `)).houses;
    }
}