import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
//Importacion de las diferentes vistas
import Home from './views/Home.jsx'
import Contact from './views/Contact.jsx'
import NotFound from './views/NotFound.jsx'
import injectContext from './js/store/appContext.js'
import LoginRegister from './views/LoginRegister.jsx'

const Layout = () => {
    const basename=process.env.BASENAME || "";
  return (
    <div>
        <BrowserRouter basename={basename}>
            <Routes>
                {/* Se crean los path de las diferentes vistas */}
                {/* <Route exact path='/home' element={<Home/>}/>  */}
                <Route exact path='/' element={<LoginRegister/>}/> 
                <Route exact path='/contact' element={<Contact/>}/>
                <Route exact path='/*' element={<NotFound/>}/>
            </Routes>
        </BrowserRouter>
    </div>
  )
}

export default injectContext(Layout)