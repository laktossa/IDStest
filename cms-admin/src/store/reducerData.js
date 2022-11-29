import { configureStore } from "@reduxjs/toolkit";

import transactionReducer from "./slicerData";

export default configureStore({
  reducer: {
    transaction: transactionReducer,
  },
});
