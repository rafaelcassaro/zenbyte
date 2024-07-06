'use client'

import { useState } from "react";

interface Props {
    alert: string
}


function testes() {
    alert("asdfasdfasd")
}

const Botao = () => {
    const [search, setSearch] = useState(1);

    function alou() {
        setSearch(1+ search)
    }


    return (
        <>
            {search}
            <button onClick={alou}>aqui</button>
        </>
    )
}

export default Botao