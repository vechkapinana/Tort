///очень сомневаюсь насчет этого файлика. 
///мне кажется можно просто перенести в контент и там прописать это всею
///если делать как он то доступ не получится к файлам. 
///Надо думать как сделать по другому для тех кто авторизован и нет
import React from 'react'
import {Routes, Route} from 'react-router-dom';
//import { authRoutes, publicRoutes } from '../routes';
import Admin from '../pages/Admin';
import Shop from '../pages/Shop';
import { ADMIN_ROUTE, SHOP_ROUTE } from '../utils/consts';

function AppRouter() {
    //const isAuth = false
    return (
    <Routes>
        <Route path={ADMIN_ROUTE} element={<Admin />} exac/> 
        <Route path={SHOP_ROUTE} element={<Shop />} exac/> 
        {/* {isAuth && authRoutes.map(({path, Component}) =>
            <Route path={path} element={<Component/>} exac/>
        )}
        {publicRoutes.map(({path, Component}) =>
            <Route path={path} element={<Component/>} exac/>
        )} */}
    </Routes>
    );
};

export default AppRouter;

/** {isAuth && authRoutes.map(({path, Component}) =>
            <Route path={ADMIN_ROUTE} element={<Admin />} exac/>
        )}
        {publicRoutes.map(({path, Component}) =>
            <Route key={path} path={path} component={Component} exac/>
        )} */