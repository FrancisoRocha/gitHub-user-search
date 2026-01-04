import { useState } from "react"
import type { GitHubUser } from "../types/github"

export const useGitHubUser = () => {

    const [data, setData] = useState<GitHubUser|null>(null)
    const [loading, setLoading] = useState<boolean>(false)
    const [error, setEror] = useState<string | null>(null)

}
