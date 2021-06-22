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

export function getItemsByUser(id) {
  return fetch(baseUrl + "/item/getItemsByUser/" + id, {
    method: "GET",
    cache: "no-cache",
  }).then((res) => res.json());
}

export function getItemById(id) {
  return fetch(baseUrl + "/item/getItem/" + id, {
    method: "GET",
    cache: "no-cache",
  }).then((res) => res.json());
}

export function addFeedback(feedback) {
  return fetch(baseUrl + "/feedback/add/", {
    headers: {
      Authorization:
        "Bearer " + JSON.parse(localStorage.getItem("token")).token,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(feedback),
    method: "POST",
    cache: "no-cache",
  }).then((res) => res.json());
}

export function deleteFeedback(feedbackId) {
  return fetch(baseUrl + "/feedback/delete/" + feedbackId, {
    headers: {
      Authorization:
        "Bearer " + JSON.parse(localStorage.getItem("token")).token,
      "Content-Type": "application/json",
    },
    method: "DELETE",
    cache: "no-cache",
  }).then((res) => res.json());
}

export function addRemoveLike(like) {
  return fetch(baseUrl + "/item/addRemoveLike/", {
    headers: {
      Authorization:
        "Bearer " + JSON.parse(localStorage.getItem("token")).token,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(like),
    method: "POST",
    cache: "no-cache",
  }).then((res) => res.json());
}

export function addItemExchangeRequest(itemId, items) {
  return fetch(baseUrl + "/item/addExchangeRequest/" + itemId, {
    headers: {
      Authorization:
        "Bearer " + JSON.parse(localStorage.getItem("token")).token,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(items),
    method: "POST",
    cache: "no-cache",
  }).then((res) => res.json());
}
