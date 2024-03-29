import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/react"
import Link from "next/link"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
})

export const metadata = {
  title: "Ten",
  description: "ten's personal site/portfolio (?)",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav className="flex items-center justify-between gap-4 px-4 py-3 child:cursor-pointer mb-[2rem] border-b border-gray-300">
          <h1 className="font-black text-2xl">TEN.</h1>
          <div className="flex gap-4 child:text-sm child:px-3 child:py-2 child-hover:bg-black/5 child:transition-all child:duration-[100ms] child:rounded-lg child:border child:border-black">
            <Link href="/">Home</Link>
            <Link href="/projects">Projects</Link>
            <Link href="/contact">Contacts</Link>
          </div>
        </nav>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
