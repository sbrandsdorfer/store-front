import './Product.css';

const Product = (props) => {
    const addProduct = () => {
        let cartData = props.cartData;
        if(cartData[props.ProductId]) cartData[props.ProductId].qty++;
        else cartData[props.ProductId] = {qty : 1};
        props.setCartData({...cartData});
    };
    return <li>
    <div>
        <img
            alt={props.Description}
            src={'http://localhost:8000/static/assets/' + props.Image}
        />
    </div>
    <div style={ {display: 'flex', flexDirection: 'column'} }>
        <div><h3>{props.ProductName}</h3></div>
        <div><p>{props.Description}</p></div>
        <div style={ {flexGrow: 1} }><b>${props.Price}</b></div>
        <div
            style={{
                display: 'flex',
                flexDirection: 'row-reverse',
                flexShrink: 1
            }}
        >
            <svg
                onClick={addProduct}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                style={{'width': 'calc(8 * var(--unit))'}}>
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
            </svg>
            <div style={{margin: '0.4rem 0.5rem 0'}}>
                <b>{props.cartData[props.ProductId] ? props.cartData[props.ProductId].qty : 0}</b>
            </div>
            <svg
            onClick={() => {
                let cartData = props.cartData;
                if(cartData[props.ProductId]) {
                    if(cartData[props.ProductId].qty > 0) cartData[props.ProductId].qty--;
                }
                props.setCartData({...cartData});
            }}
            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" style={{'width': 'calc(8 * var(--unit))'}}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        </div>
    </div>
</li>
}


export default Product;