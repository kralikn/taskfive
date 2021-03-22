import { useState, useEffect } from 'react';
import Subscription from './Subscription';

const Hotel = ({hotel}) => {

    const [more, setMore] = useState(false)
    const [subscription, setSubscription] = useState(false)

    const {name, stars, city, id} = hotel;

    const showMore = (e) => {
        setMore(!more)
    }
    const handleSubscription = (e) => {
        setSubscription(!subscription)
    }

    return (
        <div className="hotel">
            <h3>{name}</h3>
            {more ? <p>{city}, stars: {stars}</p> : null}
            <button onClick={showMore}>{!more ? "show more" : "show less"}</button>
            {more ? <button onClick={handleSubscription}>request more info</button> : null}
            {subscription ? <Subscription /> : null}
        </div>
    )
}

export default Hotel
