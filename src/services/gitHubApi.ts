import axios from "axios"
import type { GitHubUser } from "../types/github"


//Configurar Axios
const gihubApi = axios.create({
    baseURL: import.meta.env.VITE_GITHUB_API_URL,
});

export const getUserByUserName = async (username : string) : Promise<GitHubUser> => {
    const response = await gihubApi.get(`/users/${username}`)
    return response.data
}
