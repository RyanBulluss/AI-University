import { Link } from "react-router-dom"
import { useEffect } from "react"
import { premium } from "../../utilities/users-service";

export default function SuccessPage( {setUser, user} ) {

    useEffect(() => {
        async function setPremium() {
            const user = await premium({ userId: 'a' });
            setUser(user);
        }
        setPremium();
    }, [])

    return (
        <div className="max-w-4xl p-4 mx-auto flex text-center flex-col items-center bg-fourth rounded-2xl">
            <img className="w-44 m-8 rounded-full" src="https://logodix.com/logo/1602600.jpg" alt="Logo" />
            <h1 className="m-2 text-center font-bold text-2xl md:text-4xl mb-8">Welcome to AIU Premium</h1>
            <h2 className="text-lg md:text-xl font-semibold">New features:</h2>
            <ul className="m-2 md:m-4 text-left text-gray-200 md:text-xl">
                <li>+ AI Teacher Creation ✔️</li>
                <li>+ Premium student plaque ✔️</li>
                <li>+ Access to AIU Library ✔️</li>
                <li>+ AI images (coming soon) 📆</li>
            </ul>
            <Link to="/teacher/create" className="m-8 py-3 md:text-xl px-6 font-bold rounded-full bg-gradient-to-r from-first/80 to-second/80 hover:to-second/60 hover:from-first/60">Create Teachers</Link>
            
        </div>
    )
}