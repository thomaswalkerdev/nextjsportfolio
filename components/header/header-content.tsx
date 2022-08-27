import { Heading } from "grommet";
import Link from "next/link";
import React from "react";

export const HeaderContent = () => (
  <div className="header__content">
    <Heading level="3" margin="none">
      Thomas Walker
    </Heading>
    <div>
      <Link href="/">
        <a className="header__link">Home</a>
      </Link>
      <Link href="/projects">
        <a className="header__link">Projects</a>
      </Link>
      <Link href="/articles">
        <a className="header__link">Articles</a>
      </Link>
      <Link href="/experience">
        <a className="header__link">Experience</a>
      </Link>
    </div>
  </div>
);
