
// Typado de la API
export interface GitHubUser {
    login : string,
    avatar_url : string,
    name? : string,
    created_at : string,
    bio? : string,
    public_repos : number,
    followers : number,
    following : number,
    location? : string,
    blog? : string,
    twitter_username? : string,
    company? : string,
}
