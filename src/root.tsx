import React from "react";
import { GraphQLClient, ClientContext } from "graphql-hooks";
import { Main } from "./main";
import { normCache } from "./norm-cache";

const client = new GraphQLClient({
  url: "https://countries.trevorblades.com/graphql",
  cache: normCache
});

export function Root() {
  return (
    <ClientContext.Provider value={client}>
      <Main />
    </ClientContext.Provider>
  );
}
