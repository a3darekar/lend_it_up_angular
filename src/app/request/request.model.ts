export class request{
    constructor(
        public pk:number,
        public buyer:number,
        public name:string,
        public timestamp:string,
        public status:string,
        public description:string
    ){}
}