export class product{
    constructor(
        public pk:number,
        public name:string,
        public description:string,
        public quantity:number,
        public pricePerQuantity:number,
        public timeStamp:string,
        public categoryFk:number,
        public availability: boolean,
        public sell: boolean,
        public validity: number,
        public lendingPrice: number,
        public rating: number,
        public tags: string,
        public reportedCount: number,
        public spam:boolean
    ){}
}