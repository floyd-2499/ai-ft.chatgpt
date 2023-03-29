import React, { PropsWithChildren } from "react";

import cn from "classnames";
import styles from "./Index.module.scss";

const LayoutMain: React.FC<PropsWithChildren<{}>> = ({ children }) => {
  return (
    <div className={styles["layout-main"]}>
      <div className={styles["left-menu"]}>Left menu bar</div>
      <div className={styles["right-content"]}>
        <div className={styles["top-head"]}> Top bar - Right</div>
        <div className={styles["page-container"]}>{children}</div>
        <div className={styles["footer-container"]}>Footer Content</div>
      </div>
    </div>
  );
};

export default LayoutMain;
