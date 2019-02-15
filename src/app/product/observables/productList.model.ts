export class Product {
  public pk: number;
  public title: string;
  public category: number;
  public description: string;
  productImage: string;
  public quantity: number;
  public sell: boolean;
  public sellingPrice: number;
  public lendingPrice: number;
  public validity: number;
  public rating: number;
  public available: string;
  public tags = [];
  public reportedCount: number;
  public spam: boolean;
}
