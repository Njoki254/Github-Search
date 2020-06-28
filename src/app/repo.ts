
//constructor for repository mandatory properties available across all components with imports
export class Repo {
    constructor(
        public name: string,
        public html_url: string,
        public description: string,
        public language: string,
        public forks: number,
        public created_at: Date,
        
    ){}
 }