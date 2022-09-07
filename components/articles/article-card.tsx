import { Button, Card, CardBody, CardFooter, CardHeader } from "grommet";
import { FormNextLink } from "grommet-icons";
import Link from "next/link";
import React from "react";

function ArticleCard(props: IArticleCardProps) {
  return (
    <Card background="light-6" className="articles__card">
      <CardHeader pad="small">{props.header}</CardHeader>
      <CardBody pad="small" className="articles__card-body">
        {props.body}
      </CardBody>
      <CardFooter pad={{ horizontal: "small" }} background="light-6">
        <div className="articles__card-footer">
          <Link href={"/articles/" + props.header.substring(-1)}>
            <div className="readmore__wrapper">
              <p>Read More</p>
              <Button icon={<FormNextLink color="black" />} hoverIndicator />
            </div>
          </Link>
        </div>
      </CardFooter>
    </Card>
  );
}

export default ArticleCard;

interface IArticleCardProps {
  header: string;
  body: string;
}
