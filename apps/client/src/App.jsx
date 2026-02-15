import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignUpPage from './pages/Sign-upPage';

import LoginPage from './pages/LoginPage';

function App() {

  return (
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<SignUpPage/>} />
    <Route path='/' element={<LoginPage/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App