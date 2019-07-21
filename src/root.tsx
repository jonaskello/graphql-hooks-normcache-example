import React from "react";
import { GraphQLClient, ClientContext } from "graphql-hooks";
import { Main } from "./main";
import { normCache } from "./norm-cache";

const client = new GraphQLClient({
  url: "https://countries.trevorblades.com/graphql",
  cache: normCache(getObjectId)
});

function getObjectId(obj: any) {
  return obj.code && obj.__typename && `${obj.__typename}:${obj.code}`;
}

export function Root() {
  return (
    <ClientContext.Provider value={client}>
      <Main />
    </ClientContext.Provider>
  );
}
