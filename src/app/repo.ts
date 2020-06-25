export class Repo {
    constructor(
        public name: string,
        public html_url: string,
        public description: string,
        public language: string,
        public forks: number,
        public created_at: Date
    ){}
 }