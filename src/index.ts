import { ApplicationTypes } from 'ioc/types';
import { appContainer } from 'application';

const bootstrapAutoGalleryApplication = appContainer.get<Function>(ApplicationTypes.AutoGalleryApplication);

bootstrapAutoGalleryApplication();
