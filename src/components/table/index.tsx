import { useEffect, useState } from "react";
import { GET } from "../../app/api/route"

interface RepoListProps {
    page: number;
}

interface ApiData {
    id: number;
    name: string;
    stargazers_count: number;
    forks_count: number;
}


const Table = ({ page }: RepoListProps) => {
    const [dados, setDados] = useState<ApiData[]>([]);

    useEffect(() => {
        GET(page).then((response) => {
            setDados(response.data);
        } )
    }, [page])

    return (
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
                        <td>{repository.forks_count}</td>
                        <td>{repository.stargazers_count}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}


export default Table