import { ReactNode } from "react";
import { raleway } from "@/fonts";
import "@/styles/variables.scss";
import "@/styles/reset.scss";
import "@/styles/global.scss";
import { Header } from "@/components/Header/Header";
import { Footer } from "@/components/Footer/Footer";

interface IRootLayout {
  children: ReactNode;
}

export default function RootLayout({ children }: IRootLayout) {
  return (
    <html lang="en">
      <body className={raleway.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
