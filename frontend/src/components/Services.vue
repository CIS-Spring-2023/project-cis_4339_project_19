<script>
import useVuelidate from "@vuelidate/core";
import { required, email, alpha, numeric } from "@vuelidate/validators";
import { role } from "../role.js";
const apiURL = "http://localhost:3002";
import axios from "axios";

export default {
  setup() {
    return { v$: useVuelidate({ $autoDirty: true }) };
  },
  data() {
    return {
      services: [],
      role,
    };
  },
  mounted() {
    window.scrollTo(0, 0);
    this.getServices();
  },
  methods: {
    getServices() {
      axios.get(`${apiURL}/services/services`).then((res) => {
        this.services = [];
        this.services = res.data;
      });
    },
    editService(id) {
      this.$router.push({ name: "editService", params: { id: id } });
    },

    addService() {
      this.$router.push({ name: "addService" });
    },
    // Delete feature
    deleteService(id) {
      axios.delete(`${apiURL}/services/services/${id}`).then((res) => {
        this.getServices();
      });
    },
  },
};
</script>
<template>
  <main>
    <h1 class="font-bold text-4xl text-red-700 tracking-widest text-center my-10">Services</h1>
    <!-- Verify which user is logged in and if the button is displayed-->
    <div v-if="this.role.userRole === 'editor'">
      <button class="py-1 mx-10 bg-red-500 text-white rounded" @click="addService">Add new service</button>
    </div>
    <div class="px-10 py-3" v-for="service in services" :key="service._id">
      <div class="mt-1 bg-neutral-100" v-if="service.active == true">
        <div class="px-4 py-1 bg-neutral-200 flex justify-between ...">
          <h3 class="text-2xl">
            {{ service.name }}
          </h3>
          <!-- Verify which user is logged in and if the button is displayed-->
          <div v-if="this.role.userRole === 'editor'">
            <button class="py-1 mr-2 border border-red-500 bg-white text-red-500 rounded" @click="deleteService(service._id)">Delete Service</button>
            <button class="py-1 bg-red-500 text-white rounded" @click="editService(service._id)">Edit Service</button>
          </div>
        </div>
        <p class="p-4 text-neutral-600">
          {{ service.description }}
        </p>
      </div>
    </div>
  </main>
</template>
