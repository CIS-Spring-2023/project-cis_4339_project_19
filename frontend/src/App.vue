<script>
import axios from 'axios';
const apiURL = 'http://localhost:3002';
import { role } from './role.js';

export default {
  name: 'App',
  data() {
    return {
      orgName: 'Dataplatform',
      role
    };
  },
  created() {
    axios.get(`${apiURL}/org`).then((res) => {
      this.orgName = res.data.name;
    });
  }
};
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
            <li v-if="this.role.userRole === null">
              <router-link to="/userLogin">
                <span style="position: relative; top: 6px" class="material-icons">key</span>
                User Login
              </router-link>
            </li>
            <li v-else>
              <router-link to="/userLogin">
                <span style="position: relative; top: 6px" class="material-icons">key</span>
                Log Out
              </router-link>
            </li>
            <li>
              <router-link to="/dashboard">
                <span style="position: relative; top: 6px" class="material-icons">dashboard</span>
                Dashboard
              </router-link>
            </li>
            <li v-if="this.role.userRole === 'editor'">
              <router-link to="/intakeform">
                <span style="position: relative; top: 6px" class="material-icons">people</span>
                Client Intake Form
              </router-link>
            </li>
            <li v-if="this.role.userRole === 'editor'">
              <router-link to="/eventform">
                <span style="position: relative; top: 6px" class="material-icons">event</span>
                Create Event
              </router-link>
            </li>
            <li v-if="this.role.userRole === 'editor' || this.role.userRole === 'viewer'">
              <!-- Helmut Brenner - This is the link to the manage services page -->
              <router-link to="/services">
                <span style="position: relative; top: 6px" class="material-icons">app_registration</span>
                Services
              </router-link>
            </li>
            <li v-if="this.role.userRole === 'viewer' || this.role.userRole === 'editor'">
              <router-link to="/findclient">
                <span style="position: relative; top: 6px" class="material-icons">search</span>
                Find Client
              </router-link>
            </li>
            <li v-if="this.role.userRole === 'viewer' || this.role.userRole === 'editor'">
              <router-link to="/findevents">
                <span style="position: relative; top: 6px" class="material-icons">search</span>
                Find Event
              </router-link>
            </li>
          </ul>
        </nav>
      </header>
    </div>
    <div class="grow w-4/5">
      <section class="justify-end items-center h-24 flex"
        style="background: linear-gradient(250deg, #c8102e 70%, #efecec 50.6%)">
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
