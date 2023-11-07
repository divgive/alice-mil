import { ReactNode } from "react";
import styles from "./Tag.module.scss";
import cn from "classnames";

interface ITag {
  children: ReactNode;
  className?: string;
}

export default function Tag({ children, className }: ITag) {
  return <span className={cn(styles.tag, className)}>{children}</span>;
}
