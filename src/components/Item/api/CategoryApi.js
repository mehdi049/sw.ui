const baseUrl = "https://localhost:44386/api";

export function getCategory(id) {
  return fetch(baseUrl + "/category/getCategory/" + id, {
    method: "GET",
    cache: "no-cache",
  }).then((res) => res.json());
}

export function getItemsByCategory(id) {
  return fetch(baseUrl + "/item/getItemsByCategory/" + id, {
    method: "GET",
    cache: "no-cache",
  }).then((res) => res.json());
}