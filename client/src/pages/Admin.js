import React from 'react';
import { Container } from 'react-bootstrap';
import DobCat from '../components/DobCat';

function Admin() {
	return (
		<>
			<Container className='d-flex flex-column'>
                {/* <Button variant='outline-dark' className='mt-5 p-3'>
					Добавить категорию
				</Button>
				<Button variant='outline-dark' className='mt-5 p-3'>Добавить товар</Button> */}

				<DobCat/>
			</Container>
		</>
	)
}

export default Admin