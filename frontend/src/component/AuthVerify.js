import React from "react";

export function AuthVerify() {
  if (
    Date.now() >
    Date.now() + window.localStorage.getItem("expiresIn") * 1000
  ) {
    window.localStorage.removeItem("token");
    window.localStorage.removeItem("expiresIn");
  }
}
