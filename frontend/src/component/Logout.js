import axios from "axios";

export function Logout() {
  // const deleteCookie = () => {

  // };
  axios
    .post(
      "http://api.pillgood.ml/test/kakao/logout",
      {},
      { withCredentials: true }
    )
    .then((res) => {
      if (res.data.success) {
        window.location.reload();
      }
    })
    .catch((err) => {
      console.log(err);
    });
}
