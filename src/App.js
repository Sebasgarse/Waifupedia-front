import { AppRouter } from "./AppRouter";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store/store";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <AppRouter></AppRouter>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
