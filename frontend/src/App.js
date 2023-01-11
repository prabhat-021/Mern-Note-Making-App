import Footer from './components/Footer/Footer.js';
import Header from './components/Header/Header.js';
import LandingPage from './pages/LandingPage.js';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MyNotes from "./MyNotes/MyNotes.js";
import LoginPage from "./pages/LoginPage.js";
import RegisterPage from "./pages/RegisterPage.js";
import CreateNote from './pages/CreateNote.js';
import SingleNote from './pages/SingleNote.js';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/mynotes" element={<MyNotes />} />
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
