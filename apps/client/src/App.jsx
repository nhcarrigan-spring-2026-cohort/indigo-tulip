import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import SignUpPage from "./pages/Sign-upPage";
import LoginPage from "./pages/LoginPage";
import AskQuestion from "./components/QuestionForm"

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<SignUpPage />} />
          <Route path="/login" element={<LoginPage />} />
            <Route path='/' element={<AskQuestion/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
