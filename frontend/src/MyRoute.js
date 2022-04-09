import React from "react";
import { Route, Routes } from "react-router-dom";
import Main from "./component/Main";
import Auth from "./component/Auth";
import Form from "./component/Form";
import { Fragment, useState } from "react";
import All from './component/All';
import Ask from './component/Ask';
import Cards from "./component/Cards";
import Footer from "./component/Footer";
import Detail1 from './component/Detail1';
import Detail_Blood from './component/Detail/Detail_Blood'
import Detail_Intestine from "./component/Detail/Detail_Intestine";
import Detail_Tired from "./component/Detail/Detail_Tired";
import Detail_Food from "./component/Common/Detail_Food";
import Detail_Other from "./component/Common/Detail_Other";
import Detail_Family from "./component/Common/Detail_Family";
import Detail_Result from "./component/Common/Detail_Result";
function MyRoute() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <Fragment>
      <Routes>
        <Route path="/" element={<Main isLoggedIn={isLoggedIn} />} />
        <Route path="/auth" element={<Auth setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/form" element={<Form />} />
        <Route path="/all" element={<All />}/>
        <Route path="/ask" element={<Ask/>}/>
        <Route path="/form/detail/1" element={<Detail1/>}/>
        <Route path="/cards" element={<Cards/>}/>
        <Route path="/footer" element={<Footer/>}/>
        <Route path="/form/detail/blood" element={<Detail_Blood/>}/>
        <Route path="/form/detail/intestine" element={<Detail_Intestine/>}/>
        <Route path="/form/detail/tired" element={<Detail_Tired/>}/>
        <Route path="/form/detail/common/food" element={<Detail_Food/>}/>
        <Route path="/form/detail/common/other" element={<Detail_Other/>}/>
        <Route path="/form/detail/common/family" element={<Detail_Family/>}/>
        <Route path="/form/detail/common/result" element={<Detail_Result/>}/>
        
       </Routes>
    </Fragment>
  );
}
export default MyRoute;

