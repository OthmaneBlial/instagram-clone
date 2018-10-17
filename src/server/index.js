const express = require('express');
const cors = require('cors');
const graphqlHTTP = require('express-graphql');
const gql = require('graphql-tag');
const { buildASTSchema } = require('graphql');

// To add Graphql Logic here


const port = process.env.PORT || 9090
app.listen(port);
console.log(`Running a GraphQL API server at localhost:${port}/graphql`);