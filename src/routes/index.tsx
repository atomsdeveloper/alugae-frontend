// Navegation
import { Route, Routes } from "react-router-dom";

// Route Personalization
// import PrivateRoute from "./PrivateRoute.jsx";

// Pages
import Home from "../pages/Home";
import Login from "../pages/Login";
// import Register from "../pages/Register";
// import Students from "../pages/Students";
// import Student from "../pages/Student";
// import Photos from "../pages/Photos";
import NotFound from "../pages/NotFound";

export default function RoutesClient() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/home" element={<Home />} />

      <Route path="/login" element={<Login />} />

      {/*
      <Route path="/register" element={<Register />} />

      <Route
        path="/students/create"
        element={
          <PrivateRoute isClosed>
            <Student />
          </PrivateRoute>
        }
      />

      <Route
        path="/students/:id/edit"
        element={
          <PrivateRoute isClosed>
            <Student />
          </PrivateRoute>
        }
      />

      <Route
        path="/photo/:id"
        element={
          <PrivateRoute isClosed>
            <Photos />
          </PrivateRoute>
        }
      /> */}

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
