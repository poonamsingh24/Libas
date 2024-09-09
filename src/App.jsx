import React from "react";
import { Routes, Route } from "react-router-dom";
import SignupPage from "./components/page/SignupPage";
import LoginPage from "./components/page/LoginPage";
import HomePage from "./components/page/HomePage";
import PrivateRoute from "./components/routes/PrivateRoute";
import ProfilePage from "./components/page/ProfilePage";
import Search from "./components/page/Search";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/libasart" element={<h1>LIBAS ART</h1>} />
        <Route path="/new" element={<h1> New </h1>} />
        <Route path="/kurta" element={<h1>Kurtas</h1>} />
        <Route path="/suits" element={<h1>Suits</h1>} />
        <Route path="/sari" element={<h1>sari</h1>} />
        <Route path="bottoms" element={<h1>bottoms</h1>} />
        <Route path="/lhengas" element={<h1>Lahengas</h1>} />
        <Route path="/longwear" element={<h1>Long Wear</h1>} />
        <Route path="/winterwonder" element={<h1>Winter Wonders</h1>} />
        <Route path="/sale" element={<h1>Sale</h1>} />
        <Route path="/search" element={<Search />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route element={<PrivateRoute />}>
          <Route path="/trackorder" element={<h1>track order</h1>} />
          <Route path="/whistellist" element={<h1>whistel List</h1>} />
          <Route path="/cart" element={<h1>Cart</h1>} />
          <Route path="/profile" element={<ProfilePage />} />
        </Route>

        <Route path="*" element={<h1>Page not Found</h1>} />
      </Routes>
    </>
  );
}

export default App;
