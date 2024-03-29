import { useInfiniteQuery } from "@tanstack/react-query";
import axios from "../../helpers/axios";
import * as yup from 'yup';

type Response = {
  data: {
    id: number;
    user_id: number;
    category_id: number;
    title: string;
    slug: string;
    content_preview: string;
    feature_image: string;
    created_at: string;
    update_at: string;

    category: {
      id: number;
      name: string;
      slug: string;
    };

    user: {
      id: number;
      name: string;
      email: string;
      picture: string;
    };
  }[];
  current_page: number;
  last_page: number;
  per_page: number;
};

const action = async (page: number): Promise<Response> => {
  const res = await axios.get("/articles", {
    params: {
      page,
    },
  });

  return res.data.data;
};

const useArticlesQuery = () => {
  return useInfiniteQuery(
    ["articles"],
    ({ pageParam = 1 }) => action(pageParam),
    {
      getNextPageParam: (lastPage) => {
        if (lastPage.current_page === lastPage.last_page) {
          return undefined;
        }
        return lastPage.current_page + 1;
      },
    }
  );
};

export default useArticlesQuery;
