import { Cache } from "graphql-hooks";
import {
  normalize,
  merge,
  denormalize,
  NormMap,
  GetObjectId
} from "graphql-norm";
import { parse } from "graphql";

export function normCache(getObjectId: GetObjectId): Cache {
  let cache: NormMap = {};
  return {
    get(keyObject) {
      const denormResult = denormalize(
        parse(keyObject.operation.query),
        keyObject.operation.variables,
        cache
      );
      console.log("denormResult", denormResult);
      console.log("denormResult.data as object", denormResult.data as object);
      //   return denormResult.data as object;
      if (!denormResult.data) {
        return undefined as any;
      }
      return { data: denormResult.data, error: false };
    },
    set(keyObject, data) {
      console.log("CACHE:set data", data);
      const normMap = normalize(
        parse(keyObject.operation.query),
        keyObject.operation.variables,
        (data as any).data,
        getObjectId
      );
      cache = merge(cache, normMap);
    },
    delete(_keyObject) {
      // Do nothing
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