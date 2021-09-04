const url =
  "https://newsapi.org/v2/everything?q=%22pets%22&sortBy=publishedAt&language=pt&apiKey=dcd7a1f45c744edd9987cd39f30ff2b7";

export async function getNews() {
  let result = await fetch(url).then(response => response.json());
  
  return result.articles;
}