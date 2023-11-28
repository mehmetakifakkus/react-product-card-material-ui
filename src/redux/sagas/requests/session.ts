import axios from "axios";

export function requestSession() {
  return axios.get<string>("https://linkedin-cv-crawler.beta-limited.workers.dev/interview/createsession");
}


