import React from 'react';
import CListGroup from 'react-bootstrap/ListGroup';
import CListGroupItem from 'react-bootstrap/ListGroup';
import { SHOP_ROUTE } from '../utils/consts';
//import cake1 from 'C:/tort/client/src/Photo/piece-of-cake.png'
import pease from 'C:/tort/client/src/Photo/pease.png'
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
        <CListGroupItem as="a" action href={SHOP_ROUTE} className='menu_y'>
			{/* <img className='menu_img' src={cake1} alt="menu_img"/> */}
        	<p className='menu'>Главная</p>
			<div style={{ borderTop: "2px solid #A3E3E5 ", width: 200 }}></div>
        </CListGroupItem>
        <CListGroupItem as="a" action href={SHOP_ROUTE} className='menu_y'>
			<p className='menu'>Торты</p>
			<div style={{ borderTop: "2px solid #A3E3E5 ", width: 200 }}></div>
        </CListGroupItem>
        <CListGroupItem as="a" action href={SHOP_ROUTE} className='menu_y'>
			<p className='menu'>Пирожные</p>
			<div style={{ borderTop: "2px solid #A3E3E5 ", width: 200 }}></div>
        </CListGroupItem>
		<CListGroupItem as="a" action href={SHOP_ROUTE} className='menu_y'>
			<p className='menu'>Десерты</p>
			<div style={{ borderTop: "2px solid #A3E3E5 ", width: 200 }}></div>
        </CListGroupItem>
		<CListGroupItem as="a" action href={SHOP_ROUTE} className='menu_y'>
			<p className='menu'>Меренговые рулеты</p>
			<div style={{ borderTop: "2px solid #A3E3E5 ", width: 200 }}></div>
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
		<div className='tortik'>
		<div className='block'>1</div>
		<div className='block'>1</div>
		<div className='block'>1</div>
		</div>
		<div className='tortik1'>
		<div className='block1'>1</div>
		<div className='block1'>1</div>
		<div className='block1'>1</div>
		</div>
		</>
	)
}

export default Shop