import { Dropbox, files } from 'dropbox';

import { PhotoEntity } from '../PhotoEntity';
import { photoMapper } from '../mappers/photoMapper';
import { Source } from './Source';
import { PhotoSource, PhotoThumbnail } from './models';

export const createAPISource = (): Source => {
  // TODO create node proxy
  const dropbox = new Dropbox({
    accessToken: 'LfgP51IgItcAAAAAAAISD4gEG-eOAqKGDzPjLvGl5kEjHsB8wmoBSkoelMP9dpyU',
    fetch,
  });

  return {
    getFiles: async (): Promise<PhotoEntity[]> => {
      const folder = await dropbox.filesListFolder({
        path: '',
      });
      const photoSources = folder.entries as PhotoSource[];

      return photoSources.map(photoMapper.fromSourceToEntity);
    },

    getThumbnails: async (photos: PhotoEntity[]): Promise<PhotoThumbnail[]> => {
      const thumbnailArgBatches: files.ThumbnailArg[][] = photos.reduce<files.ThumbnailArg[][]>(
        (thumbnailArgsBatchesAccumulator, file: PhotoEntity) => {
          const thumbnailArg: files.ThumbnailArg = {
            path: file.url,
            format: {
              '.tag': 'jpeg',
            },
            mode: {
              '.tag': 'fitone_bestfit',
            },
            size: {
              '.tag': 'w640h480',
            },
          };
          const argsBatch = thumbnailArgsBatchesAccumulator[thumbnailArgsBatchesAccumulator.length - 1];

          if (!argsBatch || argsBatch.length === 25) {
            thumbnailArgsBatchesAccumulator.push([thumbnailArg]);
          } else {
            argsBatch.push(thumbnailArg);
          }

          return thumbnailArgsBatchesAccumulator;
        },
        [],
      );

      const results = await Promise.all(thumbnailArgBatches.map(async (thumbnailArgBatch) => {
        const thumbnails = await dropbox.filesGetThumbnailBatch({ entries: thumbnailArgBatch });

        return thumbnails.entries;
      })) as PhotoThumbnail[][];

      return results.flat();
    },
  };
};
