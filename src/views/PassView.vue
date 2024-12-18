<template>
  <v-sheet class="bg-brown-lighten-4">
  <br><br><br><br><br>
  <h1>Login Form for Users</h1>
  <br><br><br>
  
  <v-card class="mx-auto px-6 py-8" max-width="666">
      <v-text-field class="mb-10 mt-20" :rules="[required]" v-model="user.email" label="Email" variant="outlined"/>
  
        <v-text-field
          class="mb-10 mt-20"
          :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
          :type="visible ? 'text' : 'password'"
          prepend-inner-icon="mdi-lock-outline"
          label="Password"
          :rules="[required]"
          v-model="user.password"
          variant="outlined"
          @click:append-inner="visible = !visible">
       </v-text-field>
    
      <v-btn color="brown-lighten-4"  size="large"  @click="submitform()">Log In</v-btn>

      <br><br><br>
      <h4>Don't Have An Account ? <router-link to="/register">Register Herer.</router-link></h4>
  </v-card>
  <br><br><br><br><br><br><br><br><br>
  </v-sheet>
  </template>
  
  <script>
  export default 
  {
    data: () => ({
      user: 
      {
        email: "",
        password: "",
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
        
        const storedUsers = JSON.parse(localStorage.getItem("Users")) || [];
  
        
        const foundUser = storedUsers.find(
          (storedUser) =>
            storedUser.email === this.user.email &&
            storedUser.password === this.user.password
        );
  
        if (foundUser) 
        {
          alert("Login successful!");
          this.$router.push("/table");
        } 
        else 
        {
          alert("Invalid email or password. Please register first.");
          this.$router.push("/register");
        }
      },
    },
  };
  </script>
  
  <style scoped>
  </style>
  