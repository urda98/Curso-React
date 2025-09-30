import React,{ useEffect, useState } from "react";

function RandomUser() {
    const {user, setUser} = useState(null);

    useEffect(() => {
        fetch('https://randomuser.me/api/')
        .then((res) => res.json())
        .then((data) => {
            setUser(data.results[0]);
        })
    },[]);

    return (
        <div>
            <img src={user.picture.large} alt={user.name.first} />
            <h2>{user.name.first} {user.name.last}</h2>
            <p>Email: {user.email}</p>
            <p>Ubicacion: {user.city}, {user.country}</p>
        </div>
    );
    
}

export default RandomUser;