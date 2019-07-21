import { useQuery as useQueryHook } from "graphql-hooks";
import { print } from "graphql";

/**
 * Wrapped version of useQuery that allows a parsed graphql document
 * to be used as query parameter.
 * @param query
 * @param opts
 */
export function useQuery(query, opts = {}) {
  return useQueryHook(typeof query === "string" ? query : print(query), opts);
}
