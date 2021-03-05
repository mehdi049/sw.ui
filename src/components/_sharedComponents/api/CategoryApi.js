const baseUrl = "https://localhost:44386/api";

export function getCategories() {
  return fetch(baseUrl + "/category/getCategories/", {
    method: "GET",
    cache: "no-cache",
  }).then((res) => res.json());
}
