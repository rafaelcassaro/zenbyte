'use client'

import { useState } from "react";

import Botao from "@/components/Botao";
import Link from "next/link";
import Table from "@/components/Table";
import Username from "@/components/Username";


export default function Home() {
  const [numberPage, setNumberPage] = useState(1);
  const [teste, setTeste] = useState([]);

  function add() {
    setNumberPage(1 + numberPage)
  }
  function remove() {
    if(numberPage > 1){
      setNumberPage(numberPage - 1)
    }   
  }




  return (
    <>
      <main>
        <h1 className="text-example">Pesquise um usuario do github</h1>
        <Username />

        {/* <Botao /> */}
        {numberPage}
        <Table page={numberPage}/>
        <Link onClick={() => add()} href={`/?page=${numberPage}`}  >Proxima pagina</Link>
        <Link onClick={() => remove()} href={`/?page=${numberPage}`}  >Pagina anterior</Link>

      </main>
    </>
  );
}
