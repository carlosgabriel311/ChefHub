import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import RecipiesDetail from "./components/recipies-detail/RecipiesDetail";

import Home from "./components/home/Home";
import UserRecipies from "./components/user-recipies/UserRecipies";
import Ingredients from "./components/ingredients/Ingredients";
import Login from "./components/login/Login";
import Signup from "./components/signup/Signup";
import Preferences from "./components/preferences/Preferences";

const LoginPage = () => {
  return <Login />;
};

const SignupPage = () => {
  return <Signup />;
};

const Homepage = () => {
  return <Home />;
};

const RecipiesDetailPage = () => {
  return <RecipiesDetail />;
};

const UserRecipiesPage = () => {
  return <UserRecipies />;
};

const IngredientsPage = () => {
  return <Ingredients />;
};

const PreferencesPage = () => {
  return <Preferences />
}

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/recipies-detail" element={<RecipiesDetailPage />} />
          <Route path="/user-recipies" element={<UserRecipiesPage />} />
          <Route path="/ingredients" element={<IngredientsPage />} />
          <Route path="/preferences" element={<PreferencesPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
