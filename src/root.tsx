import React from "react";
import { GraphQLClient, ClientContext } from "graphql-hooks";
import { Main } from "./main";

const client = new GraphQLClient({
  url: "https://countries.trevorblades.com/graphql"
});

export function Root() {
  return (
    <ClientContext.Provider value={client}>
      <Main />
    </ClientContext.Provider>
  );
}
