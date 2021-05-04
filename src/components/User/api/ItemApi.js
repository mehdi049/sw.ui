const baseUrl = "https://localhost:44386/api";

export function uploadItemImages(images) {
  return fetch(baseUrl + "/item/uploadItemImages/", {
    method: "POST",
    headers: {
      Authorization:
        "Bearer " + JSON.parse(localStorage.getItem("token")).token,
    },
    cache: "no-cache",
    body: images,
  }).then((res) => res.json());
}

export function addItem(item) {
  return fetch(baseUrl + "/item/add/", {
    method: "POST",
    headers: {
      Authorization:
        "Bearer " + JSON.parse(localStorage.getItem("token")).token,
      "Content-Type": "application/json",
    },
    cache: "no-cache",
    body: JSON.stringify(item),
  }).then((res) => res.json());
}
