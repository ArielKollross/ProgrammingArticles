<template>
  <v-container>
    <v-card>
      <v-card-title>User register</v-card-title>

      <v-form 
      @submit.prevent="handleRegisterNewUser" 
      id="user-register"
      >
        <v-row class="justify-center">
          <v-col cols="12" md="4">
            <v-text-field
              required 
              solo 
              flat 
              background-color="#efefef"
              type="input" 
              v-model="user.email"
              label="email"
            ></v-text-field>

            <v-text-field
              required
              solo
              flat
              background-color="#efefef"
              type="password" 
              v-model="user.password"
              label="password"
            ></v-text-field>

              <v-btn color="success"
                type="submit"
                class="mb-12"
                block
              >register</v-btn>
          </v-col>
        </v-row>
      </v-form>
    </v-card>
  </v-container>
</template>

<script>
import api from '@/services/api.service.js';

export default {
  data() {
    return {
      user: {
        email: null,
        password: null,
      }
    }
  },
  methods: {
    async handleRegisterNewUser() {
      //console.log(`email: ${this.email}, password: ${this.password}`)
      try {
        await api.post('/users', {
          email: this.user.email,
          password: this.user.password,
      });

      window.alert('logado');
      } catch (error) {
        console.log(error.response);
      }
    }
  }
};
</script>
