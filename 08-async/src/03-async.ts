import fs from "node:fs/promises";

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

async function getData(): Promise<void> {
  const user: User = await fs
    .readFile("user.json", "utf-8")
    .then((data) => JSON.parse(data));

  const regionsPromise: Promise<Region> = fs
    .readFile("regions.json", "utf-8")
    .then((data) => JSON.parse(data));

  const newsPromise: Promise<News[]> = fs
    .readFile("news.json", "utf-8")
    .then((data) => JSON.parse(data));

  const [regions, allNews] = await Promise.all([regionsPromise, newsPromise]);

  const userHeadlines = regions[user.region] as string[];
  const userNews = allNews.filter((article) =>
    userHeadlines.includes(article.id)
  );

  userNews.forEach((news) => {
    console.log(news.headline);
    console.log(news.content);
    console.log("-----");
  });
}

// syntatic sugar!
