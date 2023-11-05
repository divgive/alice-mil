import { ReactNode } from "react";
import { raleway } from "./fonts";
import "./styles/variables.scss";
import "./styles/reset.scss";
import "./styles/global.scss";

interface IRootLayout {
  children: ReactNode;
}

export default function RootLayout({ children }: IRootLayout) {
  return (
    <html lang="en">
      <body className={raleway.className}>{children}</body>
    </html>
  );
}
