// Services
// import history from "./services/history.js";

// Global Styles

// Toastify
import { ToastContainer } from "react-toastify";

// Router Dom
import { BrowserRouter } from "react-router-dom";

// Components
import Header from "./components/Header";

// Routes
import RoutesClient from "./routes/index.jsx";

// Redux
import { Provider } from "react-redux";
import { store, persistor } from "./store/index";
// Redux -> Persist
import { PersistGate } from "redux-persist/integration/react"; // Pass datas to all components
import { GlobalStyles } from "./styles/globals.js";

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <BrowserRouter>
          <GlobalStyles />
          <Header />
          <RoutesClient />
          <ToastContainer autoClose={3000} theme="dark" position="top-right" />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  );
}

export default App;
