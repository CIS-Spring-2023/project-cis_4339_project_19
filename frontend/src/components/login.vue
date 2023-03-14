<script>
import useVuelidate from '@vuelidate/core'
import { required } from '@vuelidate/validators'
import axios from 'axios'
const apiURL = import.meta.env.VITE_ROOT_API

export default {
  setup() {
    return { v$: useVuelidate({ $autoDirty: true }) }
  },
  data() {
    return {
      // removed unnecessary extra array to track services
      event: {
        email: '',
        password: '',
        role: 'editor'
      }
    }
  },
  methods: {
    async handleSubmitForm() {
      // Checks to see if there are any errors in validation
      const isFormCorrect = await this.v$.$validate()
      // If no errors found. isFormCorrect = True then the form is submitted
      if (isFormCorrect) {
        localStorage.setItem('user', JSON.stringify(this.$data.event))
        window.location.reload()
        // axios
        //   .post(`${apiURL}/login`, this.event)
        //   .then(() => {
        //     alert('Event has been added.')
        //     this.$router.push({ name: 'findevents' })
        //   })
        //   .catch((error) => {
        //     console.log(error)
        //   })
      }
    }
  },
  // sets validations for the various data properties
  validations() {
    return {
      event: {
        email: { required },
        password: { required }
      }
    }
  }
}
</script>
<template>
  <main>
    <div>
      <h1
        class="font-bold text-4xl text-red-700 tracking-widest text-center mt-10"
      >
        Login User
      </h1>
    </div>

    <div class="">
      <div class="px-10 py-20 max-w-2xl mx-auto">
        <form class="" @submit.prevent="handleSubmitForm">
          <div class="mb-4">
            <label class="block" for="username"> Email </label>
            <input
              class="w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              id="username"
              type="email"
              placeholder="Email"
              v-model="event.email"
            />
            <span class="text-black" v-if="v$.event.email.$error">
              <p
                class="text-red-700"
                v-for="error of v$.event.email.$errors"
                :key="error.$uid"
              >
                {{ error.$message }}!
              </p>
            </span>
          </div>
          <div class="mb-6">
            <label class="block" for="password"> Password </label>
            <input
              class="w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              id="password"
              type="password"
              placeholder="password"
              v-model="event.password"
            />
            <span class="text-black" v-if="v$.event.password.$error">
              <p
                class="text-red-700"
                v-for="error of v$.event.password.$errors"
                :key="error.$uid"
              >
                {{ error.$message }}!
              </p>
            </span>
          </div>
          <div class="flex items-center justify-between">
            <div class="flex justify-between mt-10 mr-20">
              <button class="bg-red-700 text-white rounded" type="submit">
                Sign In
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </main>
</template>
