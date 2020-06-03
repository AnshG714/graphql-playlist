const express = require("express");
const graphqlHTTP = require("express-graphql");
const schema = require("./schema/schema");
const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://anshuman:test123@graphql-ninja-ablvr.mongodb.net/test?retryWrites=true&w=majority",
  { useNewUrlParser: true, useUnifiedTopology: true }
);
mongoose.connection.once("open", () => {
  console.log("MongoDB connection established");
});

const app = express();
const port = process.env.PORT || 8080;

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

app.listen(port, () => console.log(`App listening on port ${port}!`));
