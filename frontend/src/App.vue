<script>
import axios from 'axios'
// import { Role } from './_helpers/role'
const apiURL = import.meta.env.VITE_ROOT_API

export default {
  name: 'App',
  data() {
    return {
      orgName: 'Dataplatform'
    }
  },
  created() {
    axios.get(`${apiURL}/org`).then((res) => {
      this.orgName = res.data.name
    })
  },
  computed: {
    loggedIn() {
      return localStorage.getItem('user') != null
    },
    isEditorRole() {
      if (localStorage.getItem('user') != null) {
        return JSON.parse(localStorage.getItem('user')).role == Role.Editor
      }
      return false
    }
  },

  methods: {
    logout() {
      localStorage.removeItem('user')
      window.location.href = '/'
    }
  }
}
</script>
<template>
  <main class="flex flex-row">
    <div id="_container" class="h-screen">
      <header class="w-full">
        <section class="text-center">
          <img class="m-auto" src="@\assets\DanPersona.svg" />
        </section>
        <nav class="mt-10">
          <ul class="flex flex-col gap-4">
            <li v-if="this.loggedIn">
              <a href="#" class="nav-link" @click="logout">
                <span
                  style="position: relative; top: 6px"
                  class="material-icons"
                  >account_box</span
                >
                Logout
              </a>
            </li>
            <li v-if="!this.loggedIn">
              <router-link to="/login">
                <span
                  style="position: relative; top: 6px"
                  class="material-icons"
                  >account_box</span
                >
                Log In
              </router-link>
            </li>
            <li>
              <router-link to="/">
                <span
                  style="position: relative; top: 6px"
                  class="material-icons"
                  >dashboard</span
                >
                Dashboard
              </router-link>
            </li>
            <li>
              <router-link to="/intakeform">
                <span
                  style="position: relative; top: 6px"
                  class="material-icons"
                  >people</span
                >
                Client Intake Form
              </router-link>
            </li>
            <li>
              <router-link to="/eventform">
                <span
                  style="position: relative; top: 6px"
                  class="material-icons"
                  >event</span
                >
                Create Event
              </router-link>
            </li>
            <li>
              <router-link to="/findclient">
                <span
                  style="position: relative; top: 6px"
                  class="material-icons"
                  >search</span
                >
                Find Client
              </router-link>
            </li>
            <li>
              <router-link to="/findevents">
                <span
                  style="position: relative; top: 6px"
                  class="material-icons"
                  >search</span
                >
                Find Events
              </router-link>
            </li>
            <li>
              <router-link to="/createServices">
                <span
                  style="position: relative; top: 6px"
                  class="material-icons"
                  >star</span
                >
                <span
                  style="position: relative; top: 6px"
                  class="material-icons"
                  >search</span
                >Create Services
              </router-link>
            </li>
            <li>
              <router-link to="/findServices">
                <span
                  style="position: relative; top: 6px"
                  class="material-icons"
                  >search</span
                >
                Find Services
              </router-link>
            </li>
          </ul>
        </nav>
      </header>
    </div>
    <div class="grow w-4/5">
      <section
        class="justify-end items-center h-24 flex"
        style="background: linear-gradient(250deg, #c8102e 70%, #efecec 50.6%)"
      >
        <h1 class="mr-20 text-3xl text-white">{{ this.orgName }}</h1>
      </section>
      <div>
        <router-view></router-view>
      </div>
    </div>
  </main>
</template>
<style>
#_container {
  background-color: #c8102e;
  color: white;
  padding: 18px;
}
</style>
