export interface PokeResponse {
  count: number;
  nexts: string;
  previuous: null;
  results: Result[];
}
export interface Result {
  name: string;
  url: string;
}
