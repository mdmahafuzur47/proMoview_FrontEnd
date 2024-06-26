import axios from "axios";

const rootUrl = "https://promoview-server.vercel.app/api";
// const rootUrl = "http://localhost:5001/api";

export const getAllMovie = async () => {
  const res = await axios(`${rootUrl}/movies`);

  return res.data;
};

export const getById = async (id: string) => {
  if (!id) throw new Error("id is required");
  const res = await axios(`${rootUrl}/movies/${id}`);

  return res.data;
};
export const getByCategory = async (category: string | undefined) => {
  if (!category) throw new Error("category is required");
  const res = await axios(`${rootUrl}/movies/category?filter=${category}`);

  return res.data;
};


export const searchMovies = async(name: string | undefined) =>{
    if(!name) throw new Error("name is required");
    const res = await axios(`${rootUrl}/movies/search?name=${name}`);

    return res.data;
}