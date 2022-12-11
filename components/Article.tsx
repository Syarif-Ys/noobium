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
  return (
    <div className="border-b border-slate-200 py-8">
      <div className="flex items-center mb-8">
        <div className="mr-10">
          <h1 className="font-sans text-slate-900 font-semibold text-2xl mb-4">
            {title}
          </h1>
          <p className="font-serif text-slate-900 text-sm">{content}</p>
        </div>
        <img className="w-32 h-32 object-cover" src={thumbnail} alt={title} />
      </div>
      <div className="h-6 bg-slate-200 px-3 flex items-center w-fit rounded-full">
        <p className="text-slate-900 font-sans text-xs">{category}</p>
      </div>
    </div>
  );
};

export default Article;
