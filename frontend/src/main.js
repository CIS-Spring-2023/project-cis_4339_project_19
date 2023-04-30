import { createApp } from 'vue';
import { createStore } from 'vuex';

import router from './router';
import App from './App.vue';
import './index.css';


//Managing Services
const store = createStore({
  state() {
    return {
      service: [
        {
          _id: 'service1',
          name: 'Family Support',
          isActive: true,
          description:
            'A family support service provides resources and assistance to families to improve their well-being and strengthen relationships.'
        },
        {
          _id: 'service2',
          name: 'Adult Education',
          isActive: true,
          description:
            'An adult education service offers educational opportunities and training programs to individuals over the age of 18 to enhance their knowledge and skills.'
        },
        {
          _id: 'service3',
          name: 'Youth Services Program',
          isActive: true,
          description:
            'A youth services program offers a variety of activities and support services to young people to help them develop essential life skills and reach their full potential.'
        },
        {
          _id: 'service4',
          name: 'Early Childhood Education',
          isActive: true,
          description:
            'Early childhood education is a critical stage of learning that focuses on the development of young childrens cognitive, social, emotional, and physical skills.'
        }
      ]
    };
  },
  actions: {
    updateService({ commit }, newValue) {
      const filteredServices = this.state.service.filter((service) => service._id !== newValue._id);
      this.state.service = [];
      this.state.service = filteredServices;
      this.state.service.push(newValue);
    },
    addService({ commit }, newValue) {
      this.state.service.push(newValue);
    }
  }
});



const app = createApp(App)
app.use(store);
app.use(router)
app.mount('#app')
