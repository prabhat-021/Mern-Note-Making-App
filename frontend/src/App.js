import Footer from './components/Footer/Footer.js';
import Header from './components/Header/Header.js';
import LandingPage from './pages/LandingPage.js';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MyNotes from "./MyNotes/MyNotes.js";
import LoginPage from "./pages/LoginPage.js";
import RegisterPage from "./pages/RegisterPage.js";
import CreateNote from './pages/CreateNote.js';
import SingleNote from './pages/SingleNote.js';
import { useState } from 'react';

function App() {

  const [search, setSearch] = useState("");

  return (
    <BrowserRouter>
      <Header setSearch={setSearch} />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/mynotes" element={<MyNotes search={search} />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path='/createnotes' element={<CreateNote />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/note/:id" element={<SingleNote />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
