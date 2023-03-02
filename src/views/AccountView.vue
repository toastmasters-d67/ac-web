<script>
import { ref } from "vue";
import axios from "axios";

export async function getUser(token, target) {
  const url = `${process.env.VUE_APP_API}/user`;
  try {
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    axios
      .get(url, token)
      .then(function (response) {
        // console.log(response);
        if (response && response.data && "Email" in response.data) {
          const { firstName, Email } = response.data;
          target.name = firstName;
          target.email = Email;
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  } catch (error) {
    console.log(error);
  }
}

export default {
  name: "AccountView",
  data() {
    const name = ref("Me");
    const email = ref("kabigon@ac.org");
    return {
      name,
      email,
    };
  },
  created() {
    const token = localStorage.getItem("token");
    if (!token || !token.length) {
      this.$router.push("login");
    }
    console.log("token =", token);
    getUser(token, this);
  },
};
</script>

<template>
  <article id="account">
    <h1>Hello {{ name }}</h1>
    <h3>{{ email }}</h3>
  </article>
</template>
