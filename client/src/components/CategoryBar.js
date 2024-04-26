import { useContext } from 'react';
import React from 'react';
import { observer } from 'mobx-react-lite';
import { Context } from '..';
import CListGroup from 'react-bootstrap/ListGroup';
import CListGroupItem from 'react-bootstrap/ListGroup';
//import { SHOP_ROUTE } from '../utils/consts';
import cake1 from 'C:/tort/client/src/Photo/piece-of-cake.png'

const CategoryBar = observer( () => {
    const {product} = useContext(Context)
	
	return (
		<>
		<CListGroup className='shop_menu_catalog'>
			{product.categories.map(category => 
				<CListGroupItem className='menu_y'
					style={{cursor: 'pointer'}}
					//active={category.ID_Category === product.selectedCategory.ID_Category}
					onClick={() => product.setSelectedCategory(category)} 
					key={category.ID_Category}
				>
					{/* <div className='shop_menu1'> */}
					<p className='menu'><img className='menu_img' src={cake1} alt="menu_img"/>{category.Name}</p>
					<div style={{ borderTop: "2px solid #A3E3E5 ", width: 230 }}></div>
					{/* </div> */}
				</CListGroupItem>
				)}
    	</CListGroup>
		</>
	)
});

export default CategoryBar