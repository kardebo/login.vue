<template>
  <v-sheet class="bg-pink-lighten-4">
  <br>
  <h1>Register Form For User</h1>
  <br><br>
  
  <v-card class="mx-auto px-6 py-8" max-width="666">
      <v-text-field clearable class="mb-10 mt-20" :rules="[required]" v-model="user.email" label="Email" variant="outlined"/>
  
      <v-text-field clearable class="mb-10 mt-20" :rules="[required]" v-model="user.name" label="Username" variant="outlined"/>
  
        <v-text-field
          class="mb-10 mt-20"
          :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
          :type="visible ? 'text' : 'password'"
          prepend-inner-icon="mdi-lock-outline"
          label="Password"
          clearable
          :rules="[required]"
          v-model="user.password"
          variant="outlined"
          @click:append-inner="visible = !visible">
       </v-text-field>

       <v-text-field
          class="mb-10 mt-20"
          :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
          :type="visible ? 'text' : 'password'"
          prepend-inner-icon="mdi-lock-outline"
          label="Password"
          clearable
          :rules="[required]"
          v-model="user.comfirmpassword"
          variant="outlined"
          @click:append-inner="visible = !visible">
       </v-text-field>
  
       <v-btn color="pink-lighten-5" size="large" @click="submitform()">Register</v-btn>
  
       <br><br> <br><br>
       <h4>Already Have An Account ? <router-link to="/pass">Login Herer.</router-link></h4>

  </v-card>
  <br><br><br>
  </v-sheet>
  </template>
  
  <script>
  export default {
    data: () => ({
      user: 
      {
        email: "",
        name: "",
        password: "",
        comfirmpassword: "",
      },
      visible: false,
    }),
    methods: 
    {
      required(v) 
      {
        return !!v || "This Field is required";
      },
      submitform() 
      {
        if (this.user.password !== this.user.comfirmpassword) 
        {
          alert("Passwords do not match!");
          return;
        }
  
      
        const existingUsers = JSON.parse(localStorage.getItem("Users")) || [];
  
       
        const isDuplicate = existingUsers.some(
          (existingUser) => existingUser.email === this.user.email
        );
  
        if (isDuplicate) 
        {
          alert("Email already exists!");
          return;
        }
  
        
        existingUsers.push({
          email: this.user.email,
          name: this.user.name,
          password: this.user.password,
        });
  
        
        localStorage.setItem("Users", JSON.stringify(existingUsers));
  
       
        this.user = {
          email: "",
          name: "",
          password: "",
          comfirmpassword: "",
        };
  
        this.visible = false;
  
        // Navigate to another route
        this.$router.push("/pass");
      },
    },
  };
  </script>
  
  <style scoped>
  </style>
  