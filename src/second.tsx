import React from "react";
import { useQuery } from "./graphql-hooks-wrappers";
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
  const { loading, error, data } = useQuery(secondQuery, {
    variables: {
      code: "SE"
    }
  });

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Something Bad Happened</div>;

  console.log("loading in componnet", loading);
  console.log("error in componnet", error);
  console.log("data in componnet", data);

  return <ul>{data.country.name}</ul>;
}
