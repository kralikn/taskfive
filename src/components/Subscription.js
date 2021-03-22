import { useState, useEffect } from 'react';

const Subscription = () => {

    const [inputValue, setInputValue] = useState("")

    return (
        <div>
            <h4>request more about</h4>
            <input type="email" onChange={(e) => setInputValue(e.target.value) }/>
            <button disabled={!(inputValue.includes('@') && inputValue.includes('.'))}>Subscription</button>
        </div>
    )
}

export default Subscription
