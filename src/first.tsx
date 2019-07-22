import gql from "graphql-tag";
import React, { useState } from "react";
import { print } from "graphql";
import { useQuery } from "graphql-hooks";
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
  const { loading, error, data } = useQuery(print(firstQuery), {
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
        <div>
          <p>
            The second query will be loaded without fetching from the server,
            check network tab in devtools.
          </p>
          <button onClick={_ => setClicked(true)}>Load second query</button>
        </div>
      ) : (
        <div>
          <Second />
        </div>
      )}
    </div>
  );
}
