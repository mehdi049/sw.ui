const baseUrl = "https://localhost:44386/api";

export function getHomeItems() {
  return fetch(baseUrl + "/item/getItems/", {
    method: "GET",
    cache: "no-cache",
  }).then((res) => res.json());
}
