import { Routes, Route } from "react-router-dom";
import { FacebookPage, InicioPage, InstagramPage, TwitterPage, WhatsappPage } from "../pages";

import { NavBar } from "./NavBar";

export const AppNav = () => {
  return (
    <div className="App">
      <NavBar />
      <h1>Bienvenido a React Router! 😉</h1>
      <Routes>
        <Route path="/*" element={<InicioPage />} />
        <Route path="/inicio" element={<InicioPage />} />
        <Route path="/facebook" element={<FacebookPage />} />
        <Route path="/whatsapp" element={<WhatsappPage />} />
        <Route path="/instagram" element={<InstagramPage />} />
        <Route path="/twitter" element={<TwitterPage />} />
      </Routes>
    </div>
  );
};

export default AppNav;
