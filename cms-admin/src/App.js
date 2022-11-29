import { RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import routes from "./routes/router";
import store from "./store/reducerData";
function App() {
  return (
    <>
      <Provider store={store}>
        <RouterProvider router={routes} />
      </Provider>
    </>
  );
}

export default App;
