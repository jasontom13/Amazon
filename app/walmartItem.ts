export class WalmartItem {
  constructor(
      public itemId: number,
      public parentItemId: number,
      public name: string,
      public salePrice: number,
      public categoryPath: string,
      public longDescription: string,
      public thumbnailImage: string,
      public productTrackingUrl: string,
      public standardShipRate: number,
      public marketplace: boolean,
      public productUrl: string,
      public categoryNode: string,
      public bundle: boolean,
      public availableOnline: boolean
  ){}

}
