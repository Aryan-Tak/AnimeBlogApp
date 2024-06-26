import React ,{ useState ,useEffect} from 'react'
import {useDispatch} from 'react-redux'
import './App.css'
import authService from './appwrite/auth'
import {login , logout} from "./store/authSlice"
import {Footer , Header} from './components'
import { Outlet } from 'react-router-dom'


function App() {
  const [ loading , setLoading]= useState(true)
  const dispatch = useDispatch()

  useEffect(() => {
    authService.getCurrentUser()
    .then((useData) => {
      if (useData) {
        dispatch(login({useData}))
        
      } else {
        dispatch(logout())
      }
    })
    .finally(() => setLoading(false))
  } , [])

  return !loading ? (
    <div className='bg-slate-300 min-h-screen w-full flex flex-wrap'>
      <div className='w-full block'>
        <Header/>
        <main className='bg-black'>
          <Outlet />
        </main>
        <Footer className=""/>
      </div>
    </div>
  ) : null
}

export default App
