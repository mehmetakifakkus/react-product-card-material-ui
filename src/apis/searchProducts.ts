import axios from "axios";

export const searchProducts = async (searchKey: string) => {
  const { data } = await axios.get(
    `https://linkedin-cv-crawler.beta-limited.workers.dev/interview/search?name=${searchKey}`
  );
  return data;
}