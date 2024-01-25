export default function page() {
  return (
    <div>
      <main className="px-4 py-3  min-h-full">
        <h2 className="text-lg font-medium">Here are my links!</h2>
        <p className="text-sm max-w-lg">
          Socials are cringe.<br></br>So am I.
        </p>
        <div className="text-sm max-w-lg">
          <article className="flex flex-col gap-1 py-4 child:underline child:text-blue-600 child:w-fit child-hover:no-underline ">
            <a href="https://github.com/arq091">Github</a>
            <a href="https://soundcloud.com/thxne0">Soundcloud</a>
            <a href="https://discord.com/app">Discord (.thxne)</a>
            <a href="https://www.instagram.com/thxne0/">Instagram</a>
            <a href="https://www.op.gg/summoners/na/ARQ091-8885">Op.gg</a>
            <a href="https://osu.ppy.sh/users/30650827">Osu!</a>
          </article>
        </div>
      </main>
    </div>
  )
}
