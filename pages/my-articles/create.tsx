import type { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import NavBar from "../../components/NavBar";

const CreateArticlePage: NextPage = () => {
  const router = useRouter();
  
  return (
    <div>
      <Head>
        <title>Create Article | Noobium</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NavBar hasSearchInput={false} />
      <div className="w-[720px] mx-auto py-24"></div>
    </div>
  );
};

export default CreateArticlePage;
