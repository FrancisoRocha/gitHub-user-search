import { useState } from "react"
import type { GitHubUser } from "../types/github"
import { getUserByUserName } from "../services/gitHubApi"

export const useGitHubUser = () => {

    const [data, setData] = useState<GitHubUser|null>(null)
    const [loading, setLoading] = useState<boolean>(false)
    const [error, setError] = useState<string | null>(null)

    const searchGitUser = async(username : string) => {

        setLoading(true);
        setError(null)

        try{
            const userData = await getUserByUserName(username)
            setData(userData); // Guarda el usuario en el state
        }catch (error){
            console.log('Error :', error)
            setError('Usuario no encontrado'); // Guarda el error en el state
        }finally{
            setLoading(false) // ← Apagar el loading
        }

    }
    return {
        data,
        loading,
        error,
        searchGitUser
    }
}
