import { Photo } from "pexels";

interface PhotosResponse {
  page: number;
  per_page: number;
  photos: Photo[];
  total_results: number;
  next_page: string | null | undefined;
}

export default PhotosResponse;
