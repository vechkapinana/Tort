import Admin from './pages/Admin';
import Basket from './pages/Basket';
import Order from './pages/Order';
import LK from './pages/LK';
import Shop from './pages/Shop';
import Auth from './pages/Auth';
import ProductPage from './pages/ProductPage'
import { ADMIN_ROUTE, BASKET_ROUTE, LK_ROUTE, LOGIN_ROUTE, ORDER_ROUTE, PRODUCT_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE } from './utils/consts';

export const authRoutes = [
    {
        path: ADMIN_ROUTE,
        Component: Admin
    },
    {
        path: BASKET_ROUTE,
        Component: Basket
    },
    {
        path: ORDER_ROUTE,
        Component: Order
    },
    {
        path: LK_ROUTE,
        Component: LK
    }
]

export const publicRoutes = [
    {
        path: SHOP_ROUTE,
        Component: Shop
    },
    {
        path: LOGIN_ROUTE,
        Component: Auth
    },
    {
        path: REGISTRATION_ROUTE,
        Component: Auth
    },
    {
        path: PRODUCT_ROUTE + '/:id',
        Component: ProductPage
    }
]