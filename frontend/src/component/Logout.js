import axios from "axios";

export function Logout() {
  // const deleteCookie = () => {

  // };
  axios
    .post("/test/kakao/logout")
    .then((res) => {
      if (res.data.success) {
        // deleteCookie();
        document.cookie = "check=; expires=Thu, 01 Jan 1999 00:00:10 GMT;";
        window.location.reload();
      }
    })
    .catch((err) => {
      console.log(err);
    });
}
