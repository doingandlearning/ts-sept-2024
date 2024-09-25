import fs from "node:fs";

interface User {
  name: string;
  age: number;
  region: string;
}

type Regions = "NI" | "Scotland" | "SE" | "South" | "North";

// Dict!
interface Region {
  [region: string]: string[];
}

interface News {
  id: string;
  headline: string;
  content: string;
}

// Callback hell!
fs.readFile("user.json", "utf-8", (error, userData) => {
  if (error) {
    console.log(error);
    return;
  }
  const user: User = JSON.parse(userData);
  fs.readFile("regions.json", "utf-8", (error, regionData) => {
    if (error) {
      console.log(error);
      return;
    }
    const regions: Region = JSON.parse(regionData);
    fs.readFile("news.json", "utf-8", (error, newsData) => {
      if (error) {
        console.log(error);
        return;
      }
      const allNews: News[] = JSON.parse(newsData);
      const userHeadlines = regions[user.region] as string[];
      const userNews = allNews.filter((article) =>
        userHeadlines.includes(article.id)
      );

      userNews.forEach((news) => {
        console.log(news.headline);
        console.log(news.content);
        console.log("-----");
      });
    });
  });
});
