import { createStore } from "redux";

import { persistStore, persistReducer } from "redux-persist"; // scnd step
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web // third step

import rootReducer from "./reducers/index";

// 4th step
const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer); // 5th step

const store = createStore(persistedReducer); // add persisted reducer in create store 6th step
const persistor = persistStore(store); // 7th step

export { store, persistor }; // 8th step
