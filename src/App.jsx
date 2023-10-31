


// import React, {lazy,Suspense} from 'react'
import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route, } from 'react-router-dom';
import { ThemeProvider,LinearProgress } from '@mui/material';
import theme from './customTheme/Theme';

const Login = lazy(() => import('./components/Login'));
const SignUp = lazy(() => import('./components/SignUp'));
const Home = lazy(()=>import('./components/Home'));






function App() {


  return (
    <>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Suspense fallback={<LinearProgress  />}>
          <Routes>
            <Route path='/' element={<Login/>} />
            <Route path='/home' element={<Home/>}/>
            {/* <Route path='/login' element={<Login/>} /> */}
            <Route path='/signup' element={<SignUp/>} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </ThemeProvider>
    </>
  )
}
 
export default App
