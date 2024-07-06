export interface GithubJson {
    data: [{
        id: number
        name: string
        stargazers_count: number
        forks_count: number
    }]
}


// export function GET(page: number): Promise<Repo> {
//     return fetch(`http://localhost:3042/posts?_page=${page}&_per_page=4`)
//     .then(res => res.json())
//     .then((dados: Repo) => {
//         // console.log("dentro do GET" +dados.data[0].name);
//         return dados;
//     })
// }

export async function GET(page: number): Promise<GithubJson> {
    try {
      const response = await fetch(`http://localhost:3042/posts?_page=${page}&_per_page=4`)
      if (!response.ok) {
        throw new Error('Erro ao buscar os dados');
      }

      const dados: GithubJson = await response.json();
      return dados;  

    } catch (error) {
      console.error('Erro ao buscar os dados:', error);
      throw error; // Ou lançar o erro para ser tratado onde a função for chamada
    }
  }

