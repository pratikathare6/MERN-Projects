import {Navigate} from 'react-router-dom';

export default function Protectedroute({children}){

        const isLoggedIn = localStorage.getItem("isLoggedIn");

        if(!isLoggedIn){

            return <Navigate to='/' replace/>
        }

    return children;

}