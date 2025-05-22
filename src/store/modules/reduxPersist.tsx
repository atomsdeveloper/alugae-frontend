// Config Storage of persit Redux to data storage in local storage.
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";

import type { Reducer, AnyAction } from "redux";

// Function with receive all reducers to persist in local storage.
export const persistedReducer = (reducers: Reducer<unknown, AnyAction>) => {
  return persistReducer(
    {
      key: "LOGIN_REQUEST_POST_API",
      storage,
      whitelist: ["auth"],
    },
    reducers
  );
};
