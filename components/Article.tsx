import { StringLiteral } from "typescript";

type Props = {
  title: string;
  content: string;
  url: string;
  thumbnail: string;
  category: string;
  date: string;
  author: {
    name: string;
    photo: string;
  };
};

const Article: React.FC<Props> = ({
  title,
  content,
  url,
  thumbnail,
  category,
  date,
  author,
}) => {
  return <div></div>;
};

export default Article;
