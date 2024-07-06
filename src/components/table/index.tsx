import { useEffect, useState } from "react";
import { GET } from "../../app/api/route"

interface TableProps {
    page: number;
    username: string;
}

interface ApiData {
    id: number;
    name: string;
    stargazers_count: number;
    forks_count: number;
}


const Table = ({ page, username }: TableProps) => {
    const [dados, setDados] = useState<ApiData[]>([]);
    const [filteredData, setFilteredData] = useState<ApiData[]>([]);
    const [searchInput, setSearchInput] = useState<string>('');

    useEffect(() => {
        GET(page, username).then((response) => {
            setDados(response.data);
            setFilteredData(response.data);
        })
    }, [page]);

    useEffect(() => {
        const results = filteredData.filter(person =>
            person.name.toLowerCase().includes(searchInput.toLowerCase())
        );
        setDados(results);
    }, [searchInput]);


    function sortStars() {
        const reposArray = Object.values(dados);
        reposArray.sort((a, b) => a.stargazers_count - b.stargazers_count);

        setDados(reposArray)
    }

    function sortForks() {
        const reposArray = Object.values(dados);
        reposArray.sort((a, b) => a.forks_count - b.forks_count);
        setDados(reposArray)
    }

    function sortName() {
        const reposArray = Object.values(dados);
        reposArray.sort((a, b) => a.name.localeCompare(b.name));
        setDados(reposArray)
    }

    const onTyped = (evento: any) => {
        setSearchInput(evento.target.value)
    }


    return (
        <>

            <section className="flex gap-5 justify-center items-center">
                <label className="">FILTER</label>
                <input
                    className="mb-2 text-lg p-1 border-black border-solid border text-gray-900 "
                    type='text'
                    placeholder='Filter by name'
                    // value={username}
                    onChange={onTyped}
                />

                <button
                    className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                    onClick={sortStars}>sortStars</button>

                <button onClick={sortForks}>sortForks</button>

                <button onClick={sortName}>sortName</button>
            </section>


            <section className="">
                <table className="w-full border-black border-solid border-2">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Stars</th>
                            <th>Forks</th>
                        </tr>
                    </thead>
                    <tbody>

                        {dados.map((repository) => (
                            <tr key={repository.id}  >
                                <td className="border-black border-solid border p-5">{repository.name}</td>
                                <td className="border-black border-solid border p-5">{repository.stargazers_count}</td>
                                <td className="border-black border-solid border p-5">{repository.forks_count}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </section>
        </>
    )
}


export default Table