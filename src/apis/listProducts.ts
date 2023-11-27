import axios from "axios";

export const listProducts = async () => {
  const { data } = await axios.get(
    "https://linkedin-cv-crawler.beta-limited.workers.dev/interview/products"
  );
  return data;
}