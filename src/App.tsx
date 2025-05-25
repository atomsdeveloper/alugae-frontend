// Redux
import { Provider } from "react-redux";
import { store, persistor } from "./store";
import { PersistGate } from "redux-persist/integration/react";

// Router
import { BrowserRouter } from "react-router-dom";

// Context
import { MenuToggleProvider } from "./context/MenuToggleContext";

// Components
import Header from "./components/Header";
import Menu from "./components/Menu";

// Routes
import RoutesClient from "./routes";

// Template
import Template from "./template";

// Toastify
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Global Styles
import { GlobalStyles } from "./styles/globals";

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <BrowserRouter>
          <MenuToggleProvider>
            <GlobalStyles />
            <ToastContainer
              position="top-right"
              autoClose={false}
              hideProgressBar={true}
              newestOnTop={false}
              closeOnClick={true}
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="light"
              icon={false}
            />
            <Header />
            <Menu />
            <Template>
              <RoutesClient />
            </Template>
          </MenuToggleProvider>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  );
}

export default App;
