// Promises! Future. A receipt of potential future delivery ...
import fs from "node:fs/promises";
// Pending
// const req = fetch("https://api.github.com");
// console.log(req);

// // Settled: Rejected or Resolved
// req.then((res) => console.log(res)).catch((err) => console.log(err));
interface User {
  name: string;
  age: number;
  region: string;
}

type Regions = "NI" | "Scotland" | "SE" | "South" | "North";
// Dictionary type
interface Region {
  [region: string]: Array<string>;
}

interface News {
  id: string;
  headline: string;
  content: string;
}

async function doSomething() {}

const user: Promise<User> = fs
  .readFile("users.json", "utf-8")
  .then((data) => JSON.parse(data));

const regions: Promise<Region> = fs
  .readFile("regions.json", "utf-8")
  .then((data) => JSON.parse(data));

const news: Promise<News[]> = fs
  .readFile("news.json", "utf-8")
  .then((data) => JSON.parse(data));

console.log(user, regions, news);

// Promise.all([user, regions, news]).then(([user, regions, allNews]) => {
//   const userHeadlines = regions[user.region] as string[];
//   const userNews = allNews.filter((article) =>
//     userHeadlines.includes(article.id)
//   );

//   userNews.forEach((news) => {
//     console.log(news.headline);
//     console.log(news.content);
//     console.log("-----");
//   });
// });

Promise.allSettled([user, regions, news]).then((result) => console.log(result));
