import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"

export default function Home() {
  return (
    <div>
      <main className="px-4 py-3  min-h-full">
        <h2 className="text-xl font-medium">Hi, I'm Ten.</h2>
        <p className="text-sm max-w-lg">
          Website because yes {">:D"}. <br></br>Writing pointless and ปยอ. stuff
          here until I actually have a use for this website. Could function as a
          portfolio in the future but idk you tell me.
        </p>
        <p className="pt-8 font-sm font-medium">Read:</p>
        <ul className="px-4 py-1 text-sm child:list-disc">
          <li className="">TIGGER HAS SMELLY ASS FEET</li>
          <li className="">Idea, Jigshow, and Gus are little devils.</li>
          <li>Keith needs better glasses</li>
        </ul>
      </main>
    </div>
  )
}
