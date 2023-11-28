import axios from "axios";
import { CartItem } from "../../../components/types";

export function requestCart() {
  return axios.get<CartItem[] | null>("https://linkedin-cv-crawler.beta-limited.workers.dev/interview/view-cart", {
    headers: {
      'Session-ID': '4ejhjgn9u'
    }
  });
}

