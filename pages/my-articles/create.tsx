import type { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { useRef } from "react";
import NavBar from "../../components/NavBar";
import ThumbnailPicker from "../../components/ThumbnailPicker";
import Category from "../../components/Category";

const CreateArticlePage: NextPage = () => {
  const refContentInput = useRef<HTMLTextAreaElement>(null);
  const router = useRouter();

  const categories = [...Array(10)].map((_, index) => {
  return {
    id: index + 1,
    slug: 'technology',
    name: 'Technology',
  }
})

  const handleContentInputGrow = () => {
    if (!refContentInput.current) return;

    refContentInput.current.style.height = "auto";

    refContentInput.current.style.height =
      refContentInput.current.scrollHeight + "px";
  };

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
        <textarea
          ref={refContentInput}
          className="w-full outline-none mt-12 font-serif text-slate-900"
          placeholder="Write an article here..."
          onInput={handleContentInputGrow}
        />
        <div className="pt-12 border-top border-slate-200">
          <p className="font-sans text-slate-900 text-sm mb-4">Choose a Category</p>
          <div className="flex flex-wrap gap-3">
          {categories.map((category) => (
            <Category key={category.id} label={category.name} />
          ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateArticlePage;
