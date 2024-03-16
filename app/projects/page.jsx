import Link from "next/link"
export default function page() {
  return (
    <div>
      <main className="px-4 py-3  min-h-full">
        <h2 className="text-lg font-medium">Mediocre (Web Dev) Projects</h2>
        <div className="text-sm max-w-xl">
          <p className="text-xs leading-[1.14rem]">
            Some of these might not work due to needing activity to stop
            database from pausing
          </p>
          <article className="flex flex-col gap-1 py-4 child:underline child:text-blue-600 child:w-fit child-hover:no-underline ">
            <Link href="https://notesapp-five.vercel.app/">Notesapp</Link>
            <Link href="https://clickingcounter.netlify.app/">Counter</Link>
            <Link href="https://rock-paper-shears.netlify.app/">Roshambo</Link>
            <Link href="https://cayso.space/">Cayso</Link>
            <Link href="https://arq091.github.io/wiggly-worm/">Worm V1</Link>
            <Link href="https://theworm.vercel.app/">Worm V2</Link>
            <Link href="https://dinnn.vercel.app/">
              Din (meme site I made for a friend)
            </Link>
            <Link href="https://meme-generator-arq091.vercel.app/">
              Meme Generator (absolute trash)
            </Link>
          </article>
        </div>
      </main>
    </div>
  )
}
