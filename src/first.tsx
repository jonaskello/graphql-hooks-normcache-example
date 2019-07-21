import gql from "graphql-tag";
import React, { useState } from "react";
import { useQuery } from "./graphql-hooks-wrappers";
import { Second } from "./second";

const firstQuery = gql`
  query GetCountry($code: String!) {
    country(code: $code) {
      __typename
      code
      name
      continent {
        __typename
        code
        name
      }
      languages {
        __typename
        code
        name
      }
    }
  }
`;

export function First() {
  const [clicked, setClicked] = useState(false);
  const { loading, error, data } = useQuery(firstQuery, {
    variables: {
      code: "SE"
    }
  });

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Something Bad Happened</div>;

  return (
    <div>
      <ul>{data.country.name}</ul>
      {!clicked ? (
        <button onClick={_ => setClicked(true)}>Second query</button>
      ) : (
        <div>
          <Second />
        </div>
      )}
    </div>
  );
}
