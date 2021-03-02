const baseUrl = "https://localhost:44363/api";

export function updateUser(userInfo) {
  return fetch(baseUrl + "/user/updateUser/", {
    method: "PUT",
    headers: {
      Authorization:
        "Bearer " + JSON.parse(localStorage.getItem("token")).token,
      "Content-Type": "application/json",
    },
    cache: "no-cache",
    body: JSON.stringify(userInfo),
  }).then((res) => res.json());
}

export function updateUserImage(image, userId) {
  return fetch(baseUrl + "/user/updateUserImage/" + userId, {
    method: "PUT",
    headers: {
      Authorization:
        "Bearer " + JSON.parse(localStorage.getItem("token")).token,
    },
    cache: "no-cache",
    body: image,
  }).then((res) => res.json());
}
