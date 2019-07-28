import React from "react";
import { print } from "graphql";
import { useQuery } from "graphql-hooks";
import gql from "graphql-tag";
import { denormalize } from "graphql-norm";
import { cache } from "./norm-cache";

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
  const variables = {
    code: "SE"
  };
  const { loading, error, data } = useQuery(print(secondQuery), { variables });

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Something Bad Happened</div>;

  console.log(
    "Yout can also programatically query (denormalize) the cache using any graphql query: ",
    denormalize(secondQuery, variables, cache)
  );

  return <ul>{data.country.name}</ul>;
}
