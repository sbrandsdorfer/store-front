import { useState } from "react";

const Checkout = () => {
    //
    //userInfo = {firstName: "", lastName : ""}
    const [userInfo, setUserInfo] = useState({});
    return <form>
        <h1>Checkout Page</h1>
        <p>Hello, {userInfo.firstName} {userInfo.lastName}</p>
        <div>
            <input 
            name="firstName" 
            onChange={({target}) => setUserInfo({...userInfo, firstName : target.value})} 
            value={userInfo.firstName} 
            type="text" />
        </div>
        <div>
            <input 
            name="lastName" 
            onChange={({target}) => setUserInfo({...userInfo, lastName : target.value})} 
            type="text" />
        </div>
    </form>
}


export default Checkout;