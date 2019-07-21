import { CacheKeyObject, Cache } from "graphql-hooks";

export const normCache: Cache = {
  get: _keyObject => {
    console.log("CACHE: get", _keyObject);
    return undefined as any;
  },
  set: (_keyObject: CacheKeyObject, _data: object) => {
    console.log("CACHE: set _keyObject", _keyObject);
    console.log("CACHE: set _data", _data);
  },
  delete: (_keyObject: CacheKeyObject) => {
    console.log("CACHE: delete");
  },
  clear: () => {
    console.log("CACHE: clear");
  },
  keys: () => {
    console.log("CACHE: keys");
    return [];
  },
  getInitialState: () => {
    console.log("CACHE: keys");
    return [];
  }
};
