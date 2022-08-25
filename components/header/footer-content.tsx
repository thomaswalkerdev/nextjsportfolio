import { Button, Heading } from "grommet";
import { Favorite } from "grommet-icons";
import React from "react";

export const FooterContent = () => (
  <div className="header__content">
    <Heading level="3" margin="none">
      Thomas Walker
    </Heading>
    <div>
      Some Copyright
      <Button icon={<Favorite color="red" />} hoverIndicator />
      <Button icon={<Favorite color="red" />} hoverIndicator />
    </div>
  </div>
);
