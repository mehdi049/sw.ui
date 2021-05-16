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
