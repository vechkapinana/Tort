import { useContext } from 'react';
import React from 'react';
import { observer } from 'mobx-react-lite';
import { Context } from '..';
import Row from 'react-bootstrap/Row';
import ProductItem from './ProductItem';


const ProductList = observer( () => {
    const {product} = useContext(Context)
    return(
        <>
        <Row className = 'd-flex'>
            {product.products.map(product =>
                <ProductItem key={product.ID_Product} product={product}/>
            )}

        </Row>
        </>
    )
});

export default ProductList