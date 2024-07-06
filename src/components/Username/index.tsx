import { useState } from "react";

interface UsernameProps {
    getUsername: (user: string) => void;
}



export default function Username({getUsername}: UsernameProps) {
    const [username, setUsername] = useState('');
    
    
    const FormData = () => {
        getUsername(username);
    }

    const onTyped = (evento:any) => {
        setUsername(evento.target.value)
    }


    return (
        <form action={FormData}>
            <input
                className="mx-5 mb-2 text-lg p-1 border-black border-solid border text-gray-900"
                type='text'
                placeholder='Type a github username'
                // value={username}
                onChange={onTyped}
            />
            <button className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Search</button>
        </form>
    )


}