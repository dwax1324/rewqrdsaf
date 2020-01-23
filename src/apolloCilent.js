import ApolloClient from "apollo-boost";

const client = new ApolloClient({
  uri: "https://fast-lake-32832.herokuapp.com/"
});

export default client;
