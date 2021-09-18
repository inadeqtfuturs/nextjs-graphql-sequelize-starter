import React from 'react';
import { gql, useQuery } from '@apollo/client';

const GET_TODOS = gql`
  query GetTodos {
    todos {
      name
      id
    }
  }
`;

function Home() {
  const { loading, error, data } = useQuery(GET_TODOS);

  if (error) {
    console.log({ error });
  }

  return (
    <>
      <h1>Todos</h1>
      <p>Loading: {loading.toString()}</p>
      <p>Error: {error ? JSON.stringify(error) : 'null'}
      </p>
      {data && (
        <pre>{JSON.stringify(data, null, 2)}</pre>
      )}
    </>
  );
}

export default Home;
