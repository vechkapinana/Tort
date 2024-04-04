import logo from 'C:/tort/client/src/Photo/logo.png'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
//import { SHOP_ROUTE } from "../utils/consts";


function Footer(){
    return(
        <>
        <div className='footer'>
        <Container>
            <Row className='footer_three'>
                <Col lg={4}>
                    <img className='logo_footer' src={logo} alt="logo"/>
                    <p className='sweet_footer'>Sweet</p>
                    <p className='thank_footer'>Спасибо, что выбираете нас!</p>
                </Col>
                <Col lg={4} className='footer_two'>
                    {/* <div style={{ borderLeft: "2px solid #000000 ", marginLeft: 430, height: 300 }}></div> */}
                    <p className='footer_onas'>О НАС</p>
                    <p className='footer_glav'>Главная</p> 
                    <p className='footer_glav'>Доставка</p>
                    <p className='footer_glav'>Контакты</p>
                    {/* <div style={{ borderLeft: "2px solid #000000 ", marginLeft: 430, height: 100 }}></div> */}
                </Col>
                <Col lg={4} className='footer_two'>
                    <p className='footer_onas'>КОНТАКТЫ</p>
                    <p className='footer_glav'>Адрес: Город Самара, 6 просека 140</p>
                    <p className='footer_tel'>тел.: +7 929 704 33 41 WhatsApp / Telegram</p>
                    <p className='footer_tel'>E-mail natusja_ve@mail.ru</p>
                </Col>
            </Row>
        </Container>
        </div>
        </>
    )
}

export default Footer