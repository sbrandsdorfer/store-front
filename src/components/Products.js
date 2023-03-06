import Product from './Product';
import './Products.css';
import { useEffect, useState } from 'react';

const Products = ({cartData, setCartData}) => {
    const [productsList, setProductList] = useState([]);

    async function fetchProducts() {
        let res = await fetch('https://api.npoint.io/0d839dd6ac2b4e891bf4');

        let data = await res.json();
        setProductList(data);
    }

    useEffect(() => {
        fetchProducts();
    }, []);

    return <article>
        <h1>Products</h1>
        <ul>
            {productsList.map((product) => {
                return <Product
                    cartData={cartData}
                    setCartData={setCartData}
                    key={product.ProductId}
                    {...product}
                />;
            })}
        </ul>
    </article>;
}


export default Products;