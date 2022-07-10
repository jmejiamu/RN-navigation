import { landscapeTypes, loadAddressTypes } from "../types/index";
import * as FileSystem from "expo-file-system";

import { URL_GEOCODING } from "../../constants/utils/maps";
import { insertAddress, fetchAddress } from "../../db";

const { ADD_LANDSCAPE } = landscapeTypes;
const { LOAD_ADDRESS } = loadAddressTypes;

export const saveImage = (id, title, image, address, coords) => {
  return {
    type: ADD_LANDSCAPE,
    save: { id: id, title: title, image: image, address, coords },
  };
};

export const loadAddress = (result) => {
  return {
    type: LOAD_ADDRESS,
    address: result,
  };
};

export const savePlace = (title, image, coords) => {
  return async (dispatch) => {
    const response = await fetch(URL_GEOCODING(coords.lat, coords.lng));
    if (!response.ok)
      throw new Error("Something went wrong with server's connection");
    const data = await response.json();

    if (!data.results) throw new Error("Something went wrong with address");

    const address = data.results[0].formatted_address;

    const fileName = image.split("/").pop();
    const Path = FileSystem.documentDirectory + fileName;

    let result;

    try {
      await FileSystem.moveAsync({
        from: image,
        to: Path,
      });
      result = await insertAddress(title, Path, address, coords);
    } catch (error) {
      console.log(error.message);
      throw error;
    }

    dispatch(
      saveImage({ id: result.insertId, title, image: Path, address, coords })
    );
  };
};

export const loadPlaces = () => {
  return async (dispatch) => {
    const result = await fetchAddress();
    dispatch(loadAddress(result.rows._array));
    try {
    } catch (error) {
      throw error;
    }
  };
};
