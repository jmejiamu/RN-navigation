import { landscapeTypes } from "../types/index";
import * as FileSystem from "expo-file-system";

const { ADD_LANDSCAPE } = landscapeTypes;

export const saveImage = (id, title, image) => {
  return {
    type: ADD_LANDSCAPE,
    save: { id: id, title: title, image: image },
  };
};

export const savePlace = (id, title, image, coords) => {
  return async (dispatch) => {
    const response = await fetch(URL_GEOCODING(coords.lat, coords.lng));
    const fileName = image.split("/").pop();
    const Path = FileSystem.documentDirectory + fileName;

    try {
      await FileSystem.moveAsync({
        from: image,
        to: Path,
      });
    } catch (error) {
      console.log(error.message);
      throw error;
    }

    dispatch(saveImage({ id, title, image: Path }));
  };
};
