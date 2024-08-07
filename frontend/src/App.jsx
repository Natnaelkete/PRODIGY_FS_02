import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AuthPage from "./pages/AuthPage";
import { useAuth } from "./components/auth/AuthProvider";

function App() {
  const { user } = useAuth();
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={user ? <HomePage /> : <Navigate to="/signup" replace />}
        />
        <Route
          path="/signup"
          element={user ? <Navigate to="/" /> : <AuthPage replace />}
        />
        <Route
          path="/login"
          element={user ? <Navigate to="/" /> : <AuthPage replace />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
