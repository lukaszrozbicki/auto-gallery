import { PhotoRepository } from 'domain/PhotoRepository';
import { Photo } from 'domain/Photo';
import { Source } from './sources/Source';
import { PhotoThumbnail } from './sources/models';
import { PhotoEntity } from './PhotoEntity';
import { photoMapper } from './mappers/photoMapper';
import { injectDependencies } from 'ioc/utils';
import { ApplicationTypes } from 'ioc/types';

export const photoRepositoryFactory = (apiSource: Source): PhotoRepository => (
  {
    getPhotos: async (): Promise<Photo[]> => {
      const rawFiles: PhotoEntity[] = await apiSource.getFiles();
      const rawThumbnails: PhotoThumbnail[] = await apiSource.getThumbnails(rawFiles);

      return rawThumbnails.map(photoMapper.fromEntityToDomain).reverse();
    },
  }
);

export const createPhotoRepository = injectDependencies(
  ApplicationTypes.APISource,
)(photoRepositoryFactory);
