//import { Link } from "react-router-dom";
import logo from 'C:/tort/client/src/Photo/logo.png'
import user from 'C:/tort/client/src/Photo/user.png'
import basket from 'C:/tort/client/src/Photo/shopping-basket.png'
import { SHOP_ROUTE } from "../utils/consts";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Header(){
    return(
        <>
        <div className='header1'>
            <img className='logo' src={logo} alt="logo"/>
            <p className='sweet'>Sweet</p>
            <img className='basket' src={basket} alt="logo"/>
            <img className='user' src={user} alt="logo"/>
        </div>
        <div className='header'>
                <div className='category'>    
                <span className='all_category'>ВСЕ КАТЕГОРИИ</span>
                </div>
                <Navbar expand="sm">
                <Container>
                <Nav className="nav">
                    <Nav.Link className="nav-link" href={SHOP_ROUTE}>Главная</Nav.Link>
                    <Nav.Link className="nav-link" href={SHOP_ROUTE}>Доставка</Nav.Link>
                    <Nav.Link className="nav-link" href={SHOP_ROUTE}>Контакты</Nav.Link>
                </Nav>
                </Container>
                </Navbar>
		</div>
        </>
    )
}

export default Header


