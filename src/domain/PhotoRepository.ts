import { Photo } from './Photo';

export interface PhotoRepository {
  getPhotos: () => Promise<Photo[]>;
}
