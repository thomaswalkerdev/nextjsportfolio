import { Heading } from "grommet";
import React from "react";
import { ArticlesService } from "../../services/articles.service";
import ArticleCard from "../articles/article-card";
import TrailingCard from "../cards/trailing-card";
function ArticlesSnippet(props: IArticlesSnippetProps) {
  let articles = ArticlesService.getArticles();
  return (
    <div className="snippet__wrapper">
      <h2>Articles</h2>
      <div className="articles__wrapper">
        {articles.map((article) => {
          return (
            <ArticleCard
              key={article.header}
              header={article.header}
              body={article.body}
            />
          );
        })}

        <TrailingCard sectionName="Articles" />
      </div>
      <></>
    </div>
  );
}

export default ArticlesSnippet;

interface IArticlesSnippetProps {}
