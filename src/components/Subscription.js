import { useState, useEffect } from 'react';

const Subscription = ({name}) => {

    const [inputValue, setInputValue] = useState("")

    const handleSubmit = () => {


        const subData = {
            email: inputValue,
            hotel: name
        }

        fetch('api/hotels/subscribe', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(subData)
        })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(err => console.log(err));


    }

    return (
        <div>
            <h4>request more about</h4>
            <input type="email" onChange={(e) => setInputValue(e.target.value) }/>
            <button onClick={handleSubmit} disabled={!(inputValue.includes('@') && inputValue.includes('.'))}>Subscription</button>
        </div>
    )
}

export default Subscription
