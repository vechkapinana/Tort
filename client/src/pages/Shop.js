import React from 'react';
import CListGroup from 'react-bootstrap/ListGroup';
import CListGroupItem from 'react-bootstrap/ListGroup';
import { SHOP_ROUTE } from '../utils/consts';
import cake1 from 'C:/tort/client/src/Photo/piece-of-cake.png'
import pease from 'C:/tort/client/src/Photo/pease.png'
import t1 from 'C:/tort/client/src/Photo/birthday_cake.jpeg'
// import tortik1 from 'C:/tort/client/src/Photo/космос.jpg'

// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';

function Shop() {
	// const alertClicked = () => {
	// 	alert('You clicked the third ListGroupItem');
	// };
	return (
		<>
		<div>
		<CListGroup className='shop_menu'>
			<div className='shop_menu1'></div>
        <CListGroupItem as="a" action = "true" href={SHOP_ROUTE} className='menu_y'>
        	<p className='menu'><img className='menu_img' src={cake1} alt="menu_img"/> Главная</p>
			<div style={{ borderTop: "2px solid #A3E3E5 ", width: 230 }}></div>
        </CListGroupItem>
        <CListGroupItem as="a" href={SHOP_ROUTE} className='menu_y'>
			<p className='menu'><img className='menu_img' src={cake1} alt="menu_img"/>Торты</p>
			<div style={{ borderTop: "2px solid #A3E3E5 ", width: 230 }}></div>
        </CListGroupItem>
        <CListGroupItem as="a" href={SHOP_ROUTE} className='menu_y'>
			<p className='menu'><img className='menu_img' src={cake1} alt="menu_img"/>Пирожные</p>
			<div style={{ borderTop: "2px solid #A3E3E5 ", width: 230 }}></div>
        </CListGroupItem>
		<CListGroupItem as="a" href={SHOP_ROUTE} className='menu_y'>
			<p className='menu'><img className='menu_img' src={cake1} alt="menu_img"/>Десерты</p>
			<div style={{ borderTop: "2px solid #A3E3E5 ", width: 230 }}></div>
        </CListGroupItem>
		<CListGroupItem as="a" href={SHOP_ROUTE} className='menu_y'>
			<p className='menu'><img className='menu_img' src={cake1} alt="menu_img"/>Меренговые рулеты</p>
			<div style={{ borderTop: "2px solid #A3E3E5 ", width: 230 }}></div>
        </CListGroupItem>
    	</CListGroup>
		</div>
		<img className='pease' src={pease} alt="menu_img"/>
		<div className='text1'>
			<div className='textin'>
				<p>У нас вы найдете великолепные десерты, торты, пирожные и другие изысканные сладости,</p> 
				<p>которые отражают наше мастерство и любовь к деталям. Каждый наш продукт - это </p> 
				<p>неповторимое сочетание качественных ингредиентов, творческого подхода и прекрасного</p>
				<p>вкуса.</p>
				</div>
		</div>
		<div className='tortik_back'>
		<div className='tortik'>
		<div className='block'>
		<img className='block' src={t1} alt="t1"/>
		<p className= 'top_img'>Торт "Нежность"</p>
		<p className= 'top_img1'>2000 руб.</p>
		</div>
		<div className='block'>
		<img className='block' src={t1} alt="t1"/>
		<p className= 'top_img'>Торт "Нежность"</p>
		<p className= 'top_img1'>2000 руб.</p>
		</div>
		<div className='block'>
		<img className='block' src={t1} alt="t1"/>
		<p className= 'top_img'>Торт "Нежность"</p>
		<p className= 'top_img1'>2000 руб.</p>
		</div>
		</div>

		<div className='tortik1'>
		<div className='block1'>
		<img className='block' src={t1} alt="t1"/>
		<p className= 'top_img'>Торт "Нежность"</p>
		<p className= 'top_img1'>2000 руб.</p>
		</div>
		<div className='block1'>
		<img className='block' src={t1} alt="t1"/>
		<p className= 'top_img'>Торт "Нежность"</p>
		<p className= 'top_img1'>2000 руб.</p>
		</div>
		<div className='block1'>
		<img className='block' src={t1} alt="t1"/>
		<p className= 'top_img'>Торт "Нежность"</p>
		<p className= 'top_img1'>2000 руб.</p>
		</div>
		</div>
		</div>
		</>
	)
}

export default Shop