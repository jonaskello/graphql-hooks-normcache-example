import { Cache } from "graphql-hooks";
import {
  normalize,
  merge,
  denormalize,
  NormMap,
  GetObjectId
} from "graphql-norm";
import { parse } from "graphql";

export let cache: NormMap = {};

export function normCache(getObjectId: GetObjectId): Cache {
  // let cache: NormMap = {};
  return {
    get(keyObject) {
      const denormResult = denormalize(
        parse(keyObject.operation.query),
        keyObject.operation.variables,
        cache
      );
      return (denormResult.data && {
        data: denormResult.data,
        error: false
      }) as any;
    },
    set(keyObject, data) {
      const normMap = normalize(
        parse(keyObject.operation.query),
        keyObject.operation.variables,
        (data as any).data,
        getObjectId
      );
      cache = merge(cache, normMap);
    },
    delete(_keyObject) {
      // Do nothing?
    },
    clear() {
      cache = {};
    },
    keys() {
      return Object.keys(cache);
    },
    getInitialState() {
      return cache;
    }
  };
}
