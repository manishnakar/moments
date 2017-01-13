import { combineReducers } from 'redux';
import ImagesReducer from './images';
import ActiveImageReducer from './active-image';
import GalleriesReducer from './galleries';
import ActiveGalleryReducer from './active-gallery';

const rootReducer = combineReducers({
  images: ImagesReducer,
  activeImage: ActiveImageReducer,
  galleries: GalleriesReducer,
  activeGallery: ActiveGalleryReducer,
});

export default rootReducer;
