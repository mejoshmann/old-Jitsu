import { useState, useEffect } from "react";
import axios from "axios";
import './User.scss';

function User() {
    const [name, setName] = useState("");


    useEffect(() => {
        axios
            .get("http://localhost:1080/")
            .then((response) => {
                const data = response.data;
                const profileData = data.find((item) => item.hasOwnProperty('name'));
                if (profileData) {
                const { name } = profileData;
                setName(name);
                } else {
                    console.error("Name not found.");
                }
            })
            .catch((error) => {
                console.error("Error fetching name:", error);
            });
    },[]);

    return(
        <>
        <div className="user">
            <h3 className="user__greeting">Hello</h3>
            <h2 className="user__heading">{name}</h2>
        </div>
        </>
    )
}

export default User;