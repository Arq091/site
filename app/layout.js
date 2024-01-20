import { Inter } from "next/font/google"
import Link from "next/link"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
})

export const metadata = {
  title: "Ten",
  description: "ten's portfolio (?)",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav className="flex items-center justify-between gap-4 rounded-lg  px-4 py-3 child:cursor-pointer mb-[2rem]">
          <h1 className="font-bold text-3xl">TEN</h1>
          <div className="flex gap-4 child:px-4 child:py-2 child-active:bg-black/5 child:transition-all child:duration-[200ms] child:rounded-lg child:underline">
            <Link href="/">Home</Link>
            <Link href="/projects">Projects</Link>
            <Link href="/contact">Contacts</Link>
          </div>
        </nav>
        {children}
      </body>
    </html>
  )
}
