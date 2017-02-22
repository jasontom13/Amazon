import { WalmartItem } from './walmartItem';

export class WalmartResponse {
  constructor(
    public query : string,
    public sort : string,
    public format: string,
    public responseGroup: string,
    public totalResults: number,
    public start: number,
    public numItems: number,
    public items: [WalmartItem]

  ){}

}
