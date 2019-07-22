import React from "react";
import { print } from "graphql";
import { useQuery } from "graphql-hooks";
import gql from "graphql-tag";

const secondQuery = gql`
  query GetCountry2($code: String!) {
    country(code: $code) {
      __typename
      code
      name
    }
  }
`;

export function Second() {
  const { loading, error, data } = useQuery(print(secondQuery), {
    variables: {
      code: "SE"
    }
  });

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Something Bad Happened</div>;

  return <ul>{data.country.name}</ul>;
}
