import { Routes, Route } from 'react-router-dom'
import LoginPage from './pages/LoginPage'  

function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      {/* /home, /challenge/:id 같은 라우트 추가 */}
    </Routes>
  )
}

export default App
