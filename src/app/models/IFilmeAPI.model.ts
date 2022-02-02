/* eslint-disable @typescript-eslint/naming-convention */
export interface IFilmeAPI {
  poste_path?: string;
  adult?: boolean;
  overview?: string;
  release_date?: string;
  genre_ids?: number[];
  id?: number;
  original_title?: string;
  original_languagee?: string;
  title?: string;
  backdrop_path?: string;
  popularity?: number;
  vote_count?: number;
  video: boolean;
  vote_average: number;
}

export interface IListaFilmes {
  page: number;
  results: IFilmeAPI[];
  total_results: number;
  total_pages: number;
}
