import LogIn from "./Pages/Login/LogIn"
import  {Routes, Route, Navigate } from "react-router-dom"
import Home from './Pages/Home/Home';
import SignUp from './Pages/Signup/SignUp';
import { Toaster } from "react-hot-toast";
import { useAuthContext } from "./context/AuthContext";

function App() {
  const { authUser } = useAuthContext()

  return (
    <div className='p-4 h-screen flex items-center justify-center'>
      <Routes>
        <Route path='/' element={authUser ? <Home /> : <Navigate to={"/login"} />} />
				<Route path='/login' element={authUser ? <Navigate to='/' /> : <LogIn />} />
				<Route path='/signup' element={authUser ? <Navigate to='/' /> : <SignUp />} />
      </Routes>
      <Toaster/>
    </div>
  )
}

export default App
