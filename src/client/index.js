import {
  ApolloClient,
  InMemoryCache,
} from '@apollo/client';

const getClientUri = () => {
  const protocol = process.env.NEXT_PUBLIC_CLIENT_PROTOCOL || 'http';
  const host = process.env.NEXT_PUBLIC_CLIENT_HOST || 'localhost';
  const port = process.env.NEXT_PUBLIC_CLIENT_PORT || '3000';

  let url = `${protocol}://${host}`;
  if (port) {
    url += `:${port}`;
  }

  return `${url}/api/graphql`;
}

const CLIENT_URI = getClientUri();

const client = new ApolloClient({
  uri: CLIENT_URI,
  cache: new InMemoryCache()
});

export default client;
