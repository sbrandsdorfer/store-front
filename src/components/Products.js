import Product from './Product';
import './Products.css';
import { useEffect, useState } from 'react';

const Products = () => {
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
                    key={product.ProductId}
                    ProductName={product.ProductName}
                    Price={product.Price}
                    Description={product.Description}
                    Image={product.Image}
                />;
            })}
        </ul>
    </article>;
}


export default Products;