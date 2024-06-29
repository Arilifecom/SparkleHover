import App from "@/compornents/App";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Moving Box</title>
        <meta name="description" content="Moving Box" />
      </Head>

      <main className="pt-12 sm:pt-6">
        <h1 className="w-[80vw] pb-12 text-center mx-auto text-6xl font-extrabold sm:text-4xl sm:pb-3">
          sparkle
        </h1>
        <div className="flex justify-center items-center">
          <App />
        </div>
      </main>
    </>
  );
}
