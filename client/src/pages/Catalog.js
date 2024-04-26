//этот файл нигде не закинут!!! нет в путях и во всем осталльном. Эта страница больше для примера
import React from 'react';
import { Container } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CategoryBar from '../components/CategoryBar';
import ProductList from '../components/ProductList';

function Catalog() {
	return (
		<>
        <Container>
			<Row>
				<Col md={4}>
					<CategoryBar/>
				</Col>
				<Col md={8}>
					<ProductList/>
				</Col>
			</Row>
		</Container>
		</>
	)
}

export default Catalog