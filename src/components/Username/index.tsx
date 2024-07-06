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
                type='text'
                placeholder='Type a country'
                // value={username}
                onChange={onTyped}
            />
            <button>Search</button>
        </form>
    )


}