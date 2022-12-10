import type { NextPage } from "next";
import Head from "next/head";
import Article from "../components/Article";
import NavBar from "../components/NavBar";

const Home: NextPage = () => {
  const articles = [...Array(4)].map((_, index) => {
    return {
      id: index + 1,
      url: '/articles/how-to-learn-redux',
      title: "Hpw to Learn Redux",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas etiam morbi varius sapien. Eu arcu morbi tortor rhoncus. Donec pellentesque diam orci enim, nibh diam. Nulla id ut risus quisque felis tristique metus...",
      thumbnail: "/images/dummy-article-thumbnail.png",
      category: "Technology",
      date: "2022-09-20 16:00:00",
      author: {
        name: "John Doe",
        photo: "/images/dummy-avatar.png",
      },
    };
  });
  return (
    <div>
      <Head>
        <title>Noobium</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NavBar />
      <div className="w-[720px] wx-auto py-24">
        {articles.map((article) => (
          <Article
            key={article.id}
            url={article.url}
            title={article.title}
            content={article.content}
            thumbnail={article.thumbnail}
            category={article.category}
            date={article.date}
            author={article.author}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
