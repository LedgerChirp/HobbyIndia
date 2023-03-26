// export default async function handler(req: any, res: any) {
//   const response = await fetch(
//     "http://localhost:1337/api/product-displays?populate=*"
//   );
//   const data = await response.json();
//   res.status(200).json(data);
// }

// import axios from "axios";

// const api = axios.create({
//   baseURL: process.env.API_BASE_URL,
//   headers: {
//     Authorization: `Bearer ${process.env.BACKEND_API_KEY}`,
//   },
// });
// console.log(api);

// export const fetchNav = async () => api.get("/api/product-displays?populate=*");
// export const api2 = axios
//   .get("http://localhost:1337/api/product-displays", {
//     headers: {
//       Authorization:
//         "Bearer " +
//         `39f6ca7dc5ec8d9ae93eca1e736f6d1301e84b2a0295ce7a6b2f25d86441e29652517205b7f6eb0fd8ebbb2f42d3e607dd8925ae53d0001de3eed583a33311ef881fae6ba5edd869bedbc633a2835f35d8bde72b166503be3534c322b06a879499e5ac9d439dac16ba1e8a360a520bdfc2e020aa041a3b28a337125ac03859ae39f6ca7dc5ec8d9ae93eca1e736f6d1301e84b2a0295ce7a6b2f25d86441e29652517205b7f6eb0fd8ebbb2f42d3e607dd8925ae53d0001de3eed583a33311ef881fae6ba5edd869bedbc633a2835f35d8bde72b166503be3534c322b06a879499e5ac9d439dac16ba1e8a360a520bdfc2e020aa041a3b28a337125ac03859ae`,
//     },
//   })
//   .then((response) => {
//     console.log(response.data);
//   });
// import axios from "axios";

// axios.get("http://localhost:1337/api/product-displays").then((response) => {
//   console.log(response);
// });

import axios, { AxiosResponse } from 'axios';

export async function fetchData(url: string): Promise<T> {
  const response: AxiosResponse = await axios.get(url);
  return response.data;
}