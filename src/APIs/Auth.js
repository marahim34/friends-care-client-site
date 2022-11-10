import { useLocation, useNavigate } from "react-router-dom";

export const setAuthToken = (user) => {
    const currentUser = {
        email: user.email
    }
    console.log(currentUser);


    fetch(' https://delta-car-server.vercel.app/jwt', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(currentUser)
    })
        .then(res => res.json())
        .then(data => {
            // console.log(data);
            // local storage is easiest, but not the best place to store JWT
            localStorage.setItem('delta-token', data.token);
        })
}
