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

export function updateItem(item) {
  return fetch(baseUrl + "/item/edit/", {
    method: "PUT",
    headers: {
      Authorization:
        "Bearer " + JSON.parse(localStorage.getItem("token")).token,
      "Content-Type": "application/json",
    },
    cache: "no-cache",
    body: JSON.stringify(item),
  }).then((res) => res.json());
}

export function getItemsByUser(userId) {
  return fetch(baseUrl + "/item/getItemsByUser/" + userId, {
    method: "GET",
    cache: "no-cache",
  }).then((res) => res.json());
}

export function myExchanges(userId) {
  return fetch(baseUrl + "/item/myExchanges/" + userId, {
    method: "GET",
    cache: "no-cache",
  }).then((res) => res.json());
}

export function deleteItem(itemId, userId) {
  return fetch(baseUrl + "/item/deleteItem/" + itemId + "/" + userId, {
    method: "DELETE",
    headers: {
      Authorization:
        "Bearer " + JSON.parse(localStorage.getItem("token")).token,
      "Content-Type": "application/json",
    },
    cache: "no-cache",
  }).then((res) => res.json());
}

export function deleteItemImg(itemId, img) {
  return fetch(baseUrl + "/item/deleteItemImg/" + itemId + "/" + img, {
    method: "PUT",
    headers: {
      Authorization:
        "Bearer " + JSON.parse(localStorage.getItem("token")).token,
      "Content-Type": "application/json",
    },
    cache: "no-cache",
  }).then((res) => res.json());
}
