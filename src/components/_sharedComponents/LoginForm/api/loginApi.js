const baseUrl = "https://localhost:44363/api";

export function register(register) {
  return fetch(baseUrl + "/user/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    cache: "no-cache",
    body: JSON.stringify(register),
  }).then((res) => res.json());
}

export function login(login) {
  return fetch(baseUrl + "/authentication/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    cache: "no-cache",
    body: JSON.stringify(login),
  }).then((res) => res.json());
}

export function getUser(email) {
  return fetch(baseUrl + "/user/getUserByEmail/" + email, {
    method: "GET",
    headers: {
      Authorization:
        "Bearer " + JSON.parse(localStorage.getItem("token")).token,
      "Content-Type": "application/json",
    },
    cache: "no-cache",
  }).then((res) => res.json());
}
