import React from "react";
import { useQuery } from "./graphql-hooks-wrappers";
import gql from "graphql-tag";

const firstQuery = gql`
  query GetCountry($code: String!) {
    country(code: $code) {
      __typename
      code
      name
    }
  }
`;

export function Second() {
  const { loading, error, data } = useQuery(firstQuery, {
    variables: {
      code: "SE"
    }
  });

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Something Bad Happened</div>;

  return <ul>{data.country.name}</ul>;
}
