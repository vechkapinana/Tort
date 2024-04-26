import React from 'react';
import { Button, Container } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Tab from '../components/Tabs';

function ProductPage() {
    const product = {ID_Product: 1, ID_Category: 1, Name: "Медовый", Photo: "https://media.ovkuse.ru/images/recipes/b870bea9-35e9-4060-92ba-2305e6670a62/b870bea9-35e9-4060-92ba-2305e6670a62.jpg", Grade: 4.9, Compound: "Сливки, сахар...", Exp: "Заказ за 2-3 дня", Weight: 2500, Price:2790}
	return (
		<>
        <Container className='mt-5'>
			<Row d-flex flex-column align-items-center justify-content-around>
				<Col md={6}>
					<Image width={500} height={500} src={product.Photo}/>
				</Col>
				<Col md={6} style={{fontFamily: 'Montserrat'}}>
                    
                        <h2 style={{fontWeight: 600}}>Торт "{product.Name}"</h2>
                        <h2>{product.Price} руб.</h2>
                        <h2>{product.Exp}</h2>
                        <h2>Вес: {product.Weight}</h2>
                    
					<Button variant='outline-dark'>Добавить в корзину</Button>
				</Col>
			</Row>
			<Row>
				<Tab/>
			</Row>
		</Container>
		</>
	)
}

export default ProductPage;