const API_KEY = "563492ad6f917000010000014640aabb4e9d420cbe1c0df7daf4c2bf";

export const fetchPhotos = async (page: number) => {
  try {
    const photos = await fetch(
      `https://api.pexels.com/v1/curated?page=${page}&per_page=10`,
      {
        method: "GET",
        headers: {
          Accept: "application/json",
          Authorization: API_KEY,
        },
      }
    );
    const response = await photos.json();
    return response;
  } catch (e) {
    console.log(e);
  }
};

export const searchPhotos = async (
  page: number,
  searchQuery: string | undefined | null
) => {
  try {
    const photos = await fetch(
      `https://api.pexels.com/v1/search?query=${searchQuery}&per_page=10&page=${page}`,
      {
        method: "GET",
        headers: {
          Accept: "application/json",
          Authorization: API_KEY,
        },
      }
    );
    const response = await photos.json();
    return response;
  } catch (e) {
    console.log(e);
  }
};
