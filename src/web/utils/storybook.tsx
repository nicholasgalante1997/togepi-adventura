import React from 'react';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';

const apClient = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  cache: new InMemoryCache(),
});

export function withApolloWrapper(Story: React.ComponentType) {
  return (
    <ApolloProvider client={apClient}>
      <Story />
    </ApolloProvider>
  );
}
