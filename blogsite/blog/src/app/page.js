"use client";
import { useState, useEffect } from "react";
export default function Raskas() {
  const [articles, setArticles] = useState([]);
  const [filteredArticles, setFilteredArticles] = useState(articles);

  const fetchData = async () => {
    const article = await fetch("https://dev.to/api/articles?per_page=10").then(
      (res) => res.json().then(setArticles(res)).then(setFilteredArticles(data))
    );
  };
  useEffect(() => {
    fetchData();
  });

  const handleSearch = (event) => {
    const filteredArticles = articles.filter((article) =>
      article.title.includes(event.target.value)
    );
    setFilteredArticles(filteredArticles);
  };
  return (
    <div>
      <div className="flex w-screen justify-center">
        <input onChange={handleSearch} type="text" className="border-2"></input>
      </div>
    </div>
  );
}
