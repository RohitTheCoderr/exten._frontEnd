// import { apiUrl } from "@src/data/constants";
// import { useLoaderStore } from "@src/libs/zustand";

// async function apiCall(path = "/", body = {}, method = "GET") {
//     const { setLoading } = useLoaderStore.getState();
//     const options = {
//         method,
//         headers: {},
//     };

//     if (method !== "GET") {
//         options.body = body instanceof FormData ? body : JSON.stringify(body);
//         if (!(body instanceof FormData)) {
//             options.headers["Content-Type"] = "application/json";
//         }
//     }

//     try {
//         setLoading(true);
//         const res = await fetch(apiUrl + path, options);
//         const result = await res.json();
//         setLoading(false);
//         if (res.ok) return result;
//         throw result;
//     } catch (error) {
//         setLoading(false);
//         throw error;
//     }
// }

// const getFetch = (path) => apiCall(path);
// const postFetch = (path, body) => apiCall(path, body, "POST");
// const patchFetch = (path, body) => apiCall(path, body, "PATCH");
// const putFetch = (path, body) => apiCall(path, body, "PUT");
// const deleteFetch = (path, body) => apiCall(path, body, "DELETE");

// export { getFetch, postFetch, patchFetch, putFetch, deleteFetch };



import axios from 'axios';
import { useAuthStore } from '../libs/zustand';

const apiUrl = import.meta.env.VITE_API_URL;

function getToken() {
  const state = useAuthStore.getState();
  return state.token || localStorage.getItem("token") || "";
}

async function handleResponse(response) {
  if (response.status >= 200 && response.status < 300) {
    return response.data;
  } else {
    const error = new Error(response.data || "Something went wrong");
    error.data = response.data;
    throw error;
  }
}


async function apiCall(endpoint, method = "GET", data = null) {
  const url = `${apiUrl}${endpoint}`;
  const token = getToken();

  const options = {
    method,
    url,
    headers: {
      Authorization: `Bearer ${token}`,
    },
    data,
  };

  if (data && !(data instanceof FormData)) {
    options.headers["Content-Type"] = "application/json";
  }

  try {
    const response = await axios(options);
    return await handleResponse(response);
  } catch (error) {
    console.error(`Error with ${method} request to ${endpoint}:`, error);
    throw error; 
  }
}

export function getData(endpoint) {
  return apiCall(endpoint, "GET");
}

export function postData(endpoint, data) {
  return apiCall(endpoint, "POST", data);
}

export function patchData(endpoint, data) {
  return apiCall(endpoint, "PATCH", data);
}

export function putData(endpoint, data) {
  return apiCall(endpoint, "PUT", data);
}

export function deleteData(endpoint, data) {
  return apiCall(endpoint, "DELETE", data);
}
