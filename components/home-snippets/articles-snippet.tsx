import { Heading } from "grommet";
import React from "react";
import ArticleCard from "../articles/article-card";
import TrailingCard from "../cards/trailing-card";
function ArticlesSnippet(props: IArticlesSnippetProps) {
  return (
    <div className="snippet__wrapper">
      <h2>Articles</h2>
      <div className="articles__wrapper">
        <ArticleCard />
        <ArticleCard />
        <ArticleCard />
        <ArticleCard />
        <ArticleCard />
        <ArticleCard />
        <ArticleCard />
        <TrailingCard sectionName="Articles" />
      </div>
    </div>
  );
}

export default ArticlesSnippet;

interface IArticlesSnippetProps {}
