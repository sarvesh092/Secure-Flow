import { configureStore, combineReducers } from "@reduxjs/toolkit";
import authReducer from "./reducer/auth-reducer";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const combineReduxReducer = combineReducers({
  auth: authReducer,
});

const persistConfig = {
  key: "root",
  storage,
};

const rootreducer = (state, action) => {
  if (action.type === "LOGOUT") {
    localStorage.clear();
    sessionStorage.clear();
    storage.removeItem("persist:root");
    return combineReduxReducer(undefined, action);
  }
  return combineReduxReducer(state, action);
};

const persistedReducer = persistReducer(persistConfig, rootreducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

const persistor = persistStore(store);

export { persistor };
export default store;
