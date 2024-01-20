import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"

export default function Home() {
  return (
    <div>
      <main className="px-4 py-3  min-h-full">
        <h2 className="text-lg font-medium">Hi, I'm Ten.</h2>
        <p className="text-sm max-w-lg">
          Why do I even need a website lol. I will refrain from writing anything
          remotely cringey over here. So basically....
        </p>
      </main>
    </div>
  )
}
