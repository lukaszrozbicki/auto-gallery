import { Source } from './Source';
import { PhotoThumbnail } from './models';

export const createAPISource = (): Source => {
  return {
    getThumbnails: async (): Promise<PhotoThumbnail[]> => {
      const response = await fetch(
        `${process.env.REACT_APP_API_URL}/getThumbnailsFromDropbox`,
      );

      return await response.json();
    },
  };
};
