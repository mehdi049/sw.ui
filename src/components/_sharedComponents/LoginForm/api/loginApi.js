const baseUrl = "https://localhost:44363/api";

export function register(register) {
  return fetch(baseUrl + "/user/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    cache: "no-cache",
    body: JSON.stringify(register),
  }).then((res) => {
    if (res.ok) return res;
    return res.json();
  });
}
