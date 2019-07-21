import React from "react";
import { useQuery } from "graphql-hooks";

const query = `
  query GetCountry($code: String!) {
    country(code: $code) {
      __typename code name
      continent {__typename code name}
      languages {__typename code name}
    }
  }`;

export function Main() {
  const { loading, error, data } = useQuery(query, {
    variables: {
      code: "SE"
    }
  });

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Something Bad Happened</div>;

  return <ul>{data.country.name}</ul>;
}
