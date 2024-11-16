import { resolvers } from "./graphql/resolvers.js"

import express from "express";
import { createHandler } from "graphql-http/lib/use/express";
import { buildSchema } from "graphql";
import * as fs from "fs";

import { ruruHTML } from "ruru/server";

var text = fs.readFileSync("./graphql/schema.graphql", "utf8")

// Construct a schema, using GraphQL schema language
var schema = buildSchema(text)
 
var app = express()
 
// Create and use the GraphQL handler.
app.all(
  "/graphql",
  createHandler({
    schema: schema,
    rootValue: resolvers,
  })
)
 
// Start the server at port
app.listen(4000)

// Serve the GraphiQL IDE.
app.get("/", (_req, res) => {
  res.type("html")
  res.end(ruruHTML({ endpoint: "/graphql" }))
})
