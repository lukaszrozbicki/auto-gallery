import { PhotoSource, PhotoThumbnail } from '../sources/models';
import { PhotoEntity } from '../PhotoEntity';
import { Photo } from '../../domain/Photo';

export const photoMapper = {
  fromSourceToEntity: (source: PhotoSource): PhotoEntity => {
    const { id, path_display } = source;

    return {
      id,
      url: path_display,
    }
  },

  fromEntityToDomain: (source: PhotoThumbnail): Photo => {
    const { metadata: { id }, thumbnail } = source;

    return {
      id,
      url: thumbnail,
    }
  },
};
