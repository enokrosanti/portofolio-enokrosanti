import { Poppins, Preahvihear } from "next/font/google";
import "./globals.css";

const poppins = Poppins({ subsets: ["latin"], weight: ['400', '700'] });
const preahvihear = Preahvihear({ subsets: ["latin"], weight: ['400'] });

export const metadata = {
  title: "Enok Rosanti",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="user/user.png" />
      </head>
      <body className={`${poppins.className}`}>
        {children}
      </body>
    </html>
  );
}
