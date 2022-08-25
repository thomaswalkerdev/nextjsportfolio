import { Button, Heading } from "grommet";
import { Github } from "grommet-icons";
import React from "react";

export const FooterContent = () => (
  <div className="header__content">
    <Heading level="3" margin="none">
      Thomas Walker
    </Heading>
    <div className="footer__madeby">
      Made by Tom Walker
      <a
        href="https://www.github.com/thomaswalkerdev"
        target="_blank"
        rel="noreferrer"
      >
        <Button icon={<Github color="white" />} hoverIndicator />
      </a>
    </div>
  </div>
);
