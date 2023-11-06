import { ButtonHTMLAttributes, ReactNode } from "react";
import cn from "classnames";
import styles from "./Button.module.scss";

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

export function Button({ children, className, ...props }: IButton) {
  return (
    <button className={cn(styles.button, className)} {...props}>
      {children}
    </button>
  );
}
