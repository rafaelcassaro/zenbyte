import { useEffect, useState } from "react";
import { GET } from "../../app/api/route"

interface RepoListProps {
    page: number;
    username: string;
}

interface ApiData {
    id: number;
    name: string;
    stargazers_count: number;
    forks_count: number;
}


const Table = ({ page, username }: RepoListProps) => {
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

    const onTyped = (evento:any) => {
        setSearchInput(evento.target.value)
    }

    
    return (
        <>
            <br/>
            <br/>
            <input
             type='text'
             placeholder='Search a repository'
             // value={username}
             onChange={onTyped}
            />
            <br/>
            <button onClick={sortStars}>sortStars</button>
            <br/>
            <button onClick={sortForks}>sortForks</button>
            <br/>
            <button onClick={sortName}>sortName</button>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Stars</th>
                        <th>Forks</th>
                    </tr>
                </thead>
                <tbody>

                    {dados.map((repository) => (
                        <tr key={repository.id}>
                            <td>{repository.name}</td>
                            <td>{repository.stargazers_count}</td>
                            <td>{repository.forks_count}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    )
}


export default Table