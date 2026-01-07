import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Home from "./pages/home.jsx";
import Basisrente from "./pages/basisrente.jsx";
import Datenschutz from "./pages/datenschutz.jsx";
import Impressum from "./pages/impressum.jsx";
import Karriere from "./pages/karriere.jsx";
import Kontakt from "./pages/kontakt.jsx";
import BAV from "./pages/betriebliche-altersvorsorge.jsx";
import BKV from "./pages/betriebliche-krankenversicherung.jsx";
import UeberUns from "./pages/ueber-uns.jsx";

// du hast "layout.jsx" — wir importieren das:
import Layout from "./layout.jsx";

const Wrap = ({ children }) => <Layout>{children}</Layout>;

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Wrap><Home /></Wrap>} />
      <Route path="/basisrente" element={<Wrap><Basisrente /></Wrap>} />
      <Route path="/datenschutz" element={<Wrap><Datenschutz /></Wrap>} />
      <Route path="/impressum" element={<Wrap><Impressum /></Wrap>} />
      <Route path="/karriere" element={<Wrap><Karriere /></Wrap>} />
      <Route path="/kontakt" element={<Wrap><Kontakt /></Wrap>} />
      <Route path="/betriebliche-altersvorsorge" element={<Wrap><BAV /></Wrap>} />
      <Route path="/betriebliche-krankenversicherung" element={<Wrap><BKV /></Wrap>} />
      <Route path="/ueber-uns" element={<Wrap><UeberUns /></Wrap>} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
