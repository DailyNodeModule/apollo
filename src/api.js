
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

    async listOfPeople() {
        debugger
        const q = await graphql(schema, `
            people { name, image, id }
        `);

        const x = await (await fetch(`http://localhost:8080/v1alpha1/graphql`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(q)
        })).json();
        console.log(x)
    }
}