const express = require('express');
const graphqlHTTP = require('express-graphql');
const cors = require('cors');

const schema = require('./graphql/schema');

const app = express();
const PORT = process.env.PORT || 5000

app.use(cors());

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}));

app.listen(PORT, () => {
    console.log(`Server listen at port ${PORT}`)
})

// process.on('warning', (warning) => {
//     console.warn(warning.name);    // Print the warning name
//     console.warn(warning.message); // Print the warning message
//     console.warn(warning.stack);   // Print the stack trace
//   });