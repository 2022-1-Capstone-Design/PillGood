import React from 'react';
import {Route, Routes} from 'react-router-dom';
import Main from './component/Main';
import Auth from './component/Auth';
import Form from './component/Form';
import { Fragment, useState } from 'react';
function MyRoute(){
    const [isLoggedIn, setIsLoggedIn]=useState(false);
    return(
    <Fragment> 
    <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path='/auth' element={<Auth/>}/>
        <Route path='/form' element={<Form/>}/>
    </Routes>
    </Fragment>
    );
}
export default MyRoute;