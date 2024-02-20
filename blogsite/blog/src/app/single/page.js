"use client";
import Image from "next/image";
import { useState, useEffect, Suspense } from "react";
import { notFound, useSearchParams } from "next/navigation";
export default function single() {
  const searchParams = useSearchParams();
  const search = searchParams.get("id");
  const [article, SetArticle] = useState([]);

  async function getBata() {
    const geschutz = await fetch("https://dev.to/api/articles/" + search)
      .then((response) => response.json())
      .then((data) => SetArticle(data));
  }
  useEffect(() => {
    getBata();
  }, [SetArticle]);
  if (!search) {
    notFound();
  } else {
    return (
      <div>
        <div className="flex flex-col justify-center items-center relative w-5/6 mr-auto ml-auto text-center">
          <h1 className="text-3xl">{article.title}</h1>
          <div className="flex flex-row mt-3">
            <Image src="/favicon.ico" width={25} height={20} />
            <h1 className="mr-10">John Doe</h1>
            <h3>{article.created_at}</h3>
          </div>
          <Image
            src={article.social_image}
            width={1200}
            height={300}
            className="mt-10 mb-10"
          />
          <h4
            className="mb-10"
            dangerouslySetInnerHTML={{ __html: article.body_html }}
          ></h4>
        </div>
      </div>
    );
  }
}
