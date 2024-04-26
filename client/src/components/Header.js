//import { Link } from "react-router-dom";
import logo from 'C:/tort/client/src/Photo/logo.png'
import user from 'C:/tort/client/src/Photo/user.png'
import basket from 'C:/tort/client/src/Photo/shopping-basket.png'
import { SHOP_ROUTE } from "../utils/consts";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Button} from 'react-bootstrap';
import { useContext } from 'react';
import { Context } from '..';
import {observer} from 'mobx-react-lite'
import {useNavigate} from 'react-router-dom';
import { ADMIN_ROUTE } from '../utils/consts';
import { AUTH_ROUTE } from '../utils/consts';
// типа авторизация, я не уверена, что именно этот путь. мб другой но пока так

const Header = observer(()=>{//чтобы мобикс в режиме реального времени мог отслеживать изменение значений
    const {client} = useContext(Context)
    const navigate = useNavigate()
    return(
        <>
        <div className='header1'>
            <img className='logo' src={logo} alt="logo"/>
            <p className='sweet'>Sweet</p>
            <a href = {SHOP_ROUTE}>
            <img className='basket' src={basket} alt="logo"/>
            </a>
            <a href = {SHOP_ROUTE}>
            <img className='user' src={user} alt="logo"/>
            </a>
        </div>
        <div className='header'>
                <div className='category'>    
                <span className='all_category'>ВСЕ КАТЕГОРИИ</span>
                </div>
                <Navbar expand="sm">
                <Container className='container'>
                <Nav className="ms-auto">
                    <Nav.Link className="nav-link" href={SHOP_ROUTE}>Главная</Nav.Link>
                    <Nav.Link className="nav-link" href={SHOP_ROUTE}>Доставка</Nav.Link>
                    <Nav.Link className="nav-link" href={SHOP_ROUTE}>Контакты</Nav.Link>
                </Nav>
                
                {client.isAuth ?
                <Nav className="ms-auto">
                    <Button variant="outline-dark" onClick={()=> navigate(ADMIN_ROUTE)}>Админ панель</Button>
                    <Button variant="outline-dark" className='ms-3'onClick={()=> navigate(AUTH_ROUTE)}>Выйти</Button>
                </Nav>
                :
                <Nav className="ms-auto">
                    {/* при клике на кнопу повесили слушатель события  */}
                    <Button variant="outline-dark" onClick = {() => client.setIsAuth(true)}>Авторизация</Button> 
                </Nav>
                }
                </Container>
                </Navbar>
		</div>
        </>
    )
});

export default Header


