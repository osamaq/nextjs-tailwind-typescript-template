import Head from "next/head"

export default function Home() {
  return (
    <div>
      <Head>
        <title>Template</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-primary px-18 pb-117">Main Content</main>
      <footer className="">Template</footer>
    </div>
  )
}
