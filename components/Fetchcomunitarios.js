const url =
  "https://www.luizinholopes.xyz/COMUNITARIOS.json";

export async function getNews() {
  let result = await fetch(url).then(response => response.json());
  
  return result;
}