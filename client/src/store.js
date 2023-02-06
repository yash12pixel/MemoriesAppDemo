import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducers from "./reducers/index";

import { composeWithDevTools } from "redux-devtools-extension";

const composeEnhancers = composeWithDevTools({});

const configureStore = (preloadedState) => {
  const store = createStore(
    reducers,
    preloadedState,
    composeEnhancers(applyMiddleware(thunk))
  );

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept("./reducers/index", () => {
      const nextRootReducer = require("./reducers/index").default;
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
};

export default configureStore;
