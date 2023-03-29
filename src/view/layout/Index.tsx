import React, { Fragment, PropsWithChildren, useCallback } from "react";

import LayoutMain from "./main/Index";

const layouts: Record<string, React.FC<PropsWithChildren<{}>>> = {
  main: LayoutMain,
};

const LayoutIndex: React.FC<PropsWithChildren<{}>> = ({ children }) => {
  const getLayout = useCallback(() => {
    return "main";
  }, []);

  const Container = layouts[getLayout()];

  return (
    <Fragment>
      <Container>{children}</Container>
    </Fragment>
  );
};

export default LayoutIndex;
