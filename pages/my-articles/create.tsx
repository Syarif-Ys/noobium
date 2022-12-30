import type { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import NavBar from "../../components/NavBar";
import ThumbnailPicker from "../../components/ThumbnailPicker";

const CreateArticlePage: NextPage = () => {
  const router = useRouter();

  return (
    <div>
      <Head>
        <title>Create Article | Noobium</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NavBar
        hasSearchInput={false}
        hasSubmitButton={true}
        isSubmitDisabled={false}
        submitLabel="Publish"
        onClickSubmit={() => {}}
      />
      <div className="w-[720px] mx-auto py-24">
        <input
          className="font-sans font-bold text-5xl placeholder-slate-200 text-slate-900 w-full outline-none mb-12"
          placeholder="Title"
          value=""
        />
        <ThumbnailPicker />
        <textarea placeholder="Write an article here..." />
      </div>
    </div>
  );
};

export default CreateArticlePage;
