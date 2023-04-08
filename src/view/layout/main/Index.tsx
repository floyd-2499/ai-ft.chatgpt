import React, { PropsWithChildren, useState } from "react";

import cn from "classnames";
import styles from "./Index.module.scss";
import MenuLeft from "./menu-left/index";
import { menuData } from "../../../config/menu/data";

const LayoutMain: React.FC<PropsWithChildren<{}>> = ({ children }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  return (
    <div className={styles["layout-main"]}>
      <div className={styles["left-menu"]}>
        <MenuLeft closeMenu={setMobileMenuOpen} routes={menuData} />
      </div>
      <div className={styles["main-content"]}>
        <div className={styles["top-head"]}> Top bar - Right</div>
        <div className={styles["page-container"]}>{children}</div>
      </div>
      <div className={styles["right-tools"]}>Right Tools bar</div>
    </div>
  );
};

export default LayoutMain;
