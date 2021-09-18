import React from 'react';
import { ApolloProvider } from '@apollo/client';

import client from '@client';

function App({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}

export default App;
