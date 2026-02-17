import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import SignUpPage from "./pages/Sign-upPage";
import LoginPage from "./pages/LoginPage";
 {/* import SearchBar from "./components/Search";*/}

function App() {
 const mockQuestions = [ { id: 1, title: "React basics", body: "How do hooks work?" },
     { id: 2, title: "CSS tips", body: "Best way to center a div?" },
     { id: 3, title: "JavaScript", body: "Difference between let and var?" } ];
      
  return (
    <>
      <BrowserRouter>
        <Navbar />
        {/*<SearchBar questions={mockQuestions} />*/}
        <Routes>
          <Route path="/" element={<SignUpPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
