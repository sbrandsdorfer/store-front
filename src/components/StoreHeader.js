import './StoreHeader.css';
import { useState } from 'react';

function StoreHeader () {
    let [userName] = useState("Shimon");
    return <header>
        <div style={{position : 'absolute', right: '0' }}
        >Welcome, {userName}</div>
        <h1 style={{margin : '10px'}}>Shushan Headquarters</h1>
        </header>;
}


export default StoreHeader;