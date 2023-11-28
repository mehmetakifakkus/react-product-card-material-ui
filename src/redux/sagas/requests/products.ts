import axios from "axios";
import { Product } from "../../../components/types";

export function requestGetProducts() {
  return axios.get<Product[] | null>("https://linkedin-cv-crawler.beta-limited.workers.dev/interview/products");
}

export function requestSearchProducts(searchKey: string) {
  return axios.get<Product[] | null>(`https://linkedin-cv-crawler.beta-limited.workers.dev/interview/search?name=${searchKey}`);
}
