import AskQuestion from "./components/QuestionForm"
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import LoginPage from './pages/LoginPage';

function App() {

  return (
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<LoginPage/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
