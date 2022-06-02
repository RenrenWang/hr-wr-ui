import React, { FC } from "react";
import styles from "./index.less"
export interface TabProps {
  title: string;
}
const Tab: FC<TabProps> = (porps) => {
  const { title = "" } = porps;
  return <div className={styles.tab}>{title}</div>;
};
export default Tab;
