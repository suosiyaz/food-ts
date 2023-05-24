import { Restaurant } from "./restaurant";

export interface MyResult {
    searchApi: () => void;
    results: Restaurant[];
    errorMessage: string;
}