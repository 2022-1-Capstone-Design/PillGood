import axios from "axios";
import React from "react";

export function Logout() {
  const token = window.localStorage.getItem("token");
  axios
    .post("/test/kakao/logout", { token: JSON.parse(token) })
    .then((res) => {
      if (res.data.success) {
        window.localStorage.removeItem("token");
      }
      window.location.reload();
    })
    .catch((err) => {
      window.location.reload();
    });
}
