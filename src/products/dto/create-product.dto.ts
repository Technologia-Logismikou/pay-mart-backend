// Only list the properties that need to be sent by the seller
export class CreateProductDto {
  name: string;
  description: string;
  price: number;
  photos: string[];
  public: boolean;
  url: string;
}
