import { useQuery as useQueryHook } from "graphql-hooks";
import { print } from "graphql";

export function useQuery(query, opts = {}) {
  const queryToUse = typeof query === "string" ? query : print(query);
  return useQueryHook(queryToUse, opts);
}
