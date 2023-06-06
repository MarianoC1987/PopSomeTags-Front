import API from "./Rule_api";

export const getCurrentSessionUser = async () => {
  const url = `/api/usuarios/currentsession`;
  return await API.get(url)
    .then((response) => {
      return response.data.user;
    })
    .catch((error) => {
      throw error.response.data.error;
    });
};

export const getAllUsers = async () => {
  const url = `/api/usuarios`;
  return await API.get(url)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      throw error.response.data.error;
    });
};

export const searchUserById = async (id) => {
  const url = `/api/usuario/${id}`;
  return await API.get(url)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      throw error.response.data.error;
    });
};
