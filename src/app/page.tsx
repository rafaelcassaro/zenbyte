
type Repo = {
  id: number
  name: string
  stargazers_count: number
  forks_count: number
}

async function getData(): Promise<Repo[]> {
  const res = await fetch('https://api.github.com/users/vercel/repos?page=1&per_page=5', { cache: 'no-store' })

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return res.json()
}






export default async function Home() {
  const response: Repo[] = await getData();
  return (
    <>

      <main>
        <h1 className="text-example">Pesquise um usuario do github</h1>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Stars</th>
              <th>Forks</th>
            </tr>
          </thead>
          <tbody>
            {response.map((repository) => (
              <tr key={repository.id}>
                <td>{repository.name}</td>
                <td>{repository.forks_count}</td>
                <td>{repository.stargazers_count}</td>
              </tr>
            ))}
          </tbody>
        </table>

      </main>
    </>
  );
}
