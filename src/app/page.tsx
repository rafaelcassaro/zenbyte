'use client'

import { useEffect, useState } from "react";
import Link from "next/link";
import Table from "@/components/Table";
import Username from "@/components/Username";


export default function Home({ searchParams }: any) {
  const currentPage = searchParams?.page || 1;
  const [numberPage, setNumberPage] = useState<number>(1);
  const [username, setUsername] = useState('');

  useEffect(() => {
    
    setNumberPage(Number(currentPage));
  }, [currentPage]);


  function add() {
    setNumberPage(numberPage+1);

  }
  function remove() {
    if(numberPage > 1){
      setNumberPage(numberPage - 1);
    }
   
  }

  function getUsername(user: string): void {
    setUsername(user);
  }



  return (
    <>
      <main className="w-screen">
        <h1 className="text-weakblack block text-3xl">Pesquise um usuario do github</h1>

        <div className="my-6">
          <Username
            getUsername={getUsername}
          />
        </div>
        <hr className="bg-weakblack p-1px" />
        {numberPage}
        <Table
          page={currentPage}
          username={username}
        />

        <Link href={`/?page=${ numberPage > 1 ?  numberPage - 1 : numberPage}`}>
          <button onClick={remove}>Pagina anterior</button>
        </Link>

        <Link href={`/?page=${numberPage + 1}`}>
          <button onClick={add}>Proxima pagina</button>
        </Link>

      </main>
    </>
  );
}
