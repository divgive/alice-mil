import { ReactNode } from "react";
import styles from "./Text.module.scss";
import cn from "classnames";

interface IText {
  children: ReactNode;
  className?: string;
}

export default function Text({ children, className }: IText) {
  return <p className={cn(styles.text, className)}>{children}</p>;
}
