import { Link } from 'react-router-dom';
import './StoreHeader.css';

function StoreHeader({cartData}) {
    let productIds = Object.keys(cartData);
    let totalUnitsInCart = productIds.reduce((prevVal, productId) => {
        return prevVal + cartData[productId].qty;
    }, 0);
    return <header>
        <h1 style={{ flexGrow: 1, alignText: 'center', width: '100%' }}>Pre-Pesach Store</h1>
        <Link to="/checkout">
            <div className='cart' style={{ position: 'absolute', right: 40, top: 40, cursor : 'pointer' }}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" style={{ width: 'calc(6 * var(--unit))', height: 'calc(6 * var(--unit))' }}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                </svg>
                {
                    totalUnitsInCart > 0
                        ? <div style={{position: 'absolute', top: 0, right: 0, width: 'calc(4 * var(--unit))', height: 'calc(4 * var(--unit))', borderRadius: '50%',
                        backgroundColor: 'black', color: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                            <b style={{fontSize: 'calc(1.5 * var(--unit))', fontWeight: 'var(--semi-bold)'}}>{totalUnitsInCart}</b>
                        </div>
                        : ''
                }
            </div>
        </Link>
    </header>;
}


export default StoreHeader;