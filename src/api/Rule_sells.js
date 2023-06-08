import API from "./Rule_api";

export const uploadSell = async (file) => {
  let url = "/api/upload";
  return await API.post(url, file)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.log(error);
      throw error.response.data.error || "Error procesando la solicitud";
    });
};
