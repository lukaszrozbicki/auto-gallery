import { PhotoThumbnail } from './models';

export interface Source {
  getThumbnails: () => Promise<PhotoThumbnail[]>;
}
