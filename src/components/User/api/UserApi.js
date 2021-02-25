const baseUrl = "https://localhost:44363/api";

export function updateUser(userInfo) {
  return fetch(baseUrl + "/user/updateUser/", {
    method: "PUT",
    headers: {
      Authorization: "Bearer " + localStorage.getItem("token"),
      "Content-Type": "application/json",
    },
    cache: "no-cache",
    body: JSON.stringify(userInfo),
  }).then((res) => res.json());
}