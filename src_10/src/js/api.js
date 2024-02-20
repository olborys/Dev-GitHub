import axios from "axios";

axios.defaults.headers.common["x-api-key"] =
  "live_7Q2AMZ6HDstEaY1G5FB7VFO74vE6ZgrdCQ13vI3CqKJ7fkennGGcUDAQV08Omeyv";

export async function fetchBreeds() {
  return await axios
    .get("https://api.thecatapi.com/v1/breeds")
    .then((response) => response.data);
}

export async function fetchCatByBreed(breedId) {
  return await axios
    .get(`https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}`)
    .then((response) => response.data);
}
