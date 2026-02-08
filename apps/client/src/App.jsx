import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignUpPage from './pages/Sign-upPage';

function App() {

  return (
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<SignUpPage/>} />
    </Routes>
    </BrowserRouter>
  )
}

export default App