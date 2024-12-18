<template>
<h1>Testing Vue</h1><br>
<h2>App Name - Personal Information Sheet </h2>
<br><br>
<v-row>
    <v-col cols="12" md="4">
        <v-text-field v-model="user.firstusername" label="First Name" variant="outlined"></v-text-field>
    </v-col>

    <v-col cols="12" md="4">
        <v-text-field v-model="user.lastusername" label="Last Name" variant="outlined"></v-text-field>
    </v-col>

    <v-col cols="12" md="4">
        <v-text-field v-model="user.age" label="Age" variant="outlined" type="number" hint="Number only"></v-text-field>
    </v-col>

  </v-row>
  <v-row>
    <v-col cols="12" md="6">
        <v-text-field v-model="user.language" label="Language" variant="outlined"></v-text-field>
    </v-col>

    <v-col cols="12" md="6">
        <v-text-field v-model="user.hobby" label="Hobby" variant="outlined"></v-text-field>
    </v-col>

  </v-row>

<v-row>
    <v-col cols="12" md="12">
        <v-btn @click="adduserinfo()">{{ button }}</v-btn>
    </v-col>
</v-row>

      <v-col cols="12" md="12">
        <v-table height="300px" fixed-header>
        <thead>
          <tr>
            <th class="text-center">
             First Name
            </th>
            <th class="text-center">
             Last Name
            </th>
            <th class="text-center">
              Age
            </th>
            <th class="text-center">
              Language
            </th>
            <th class="text-center">
              Hobby
            </th>
            <th class="text-center">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(item,index) in userList"
            :key="index"
          >
            <td>{{ item.firstusername }}</td>
            <td>{{ item.lastusername }}</td>
            <td>{{ item.age }}</td>
            <td>{{ item.language }}</td>
            <td>{{ item.hobby }}</td>
            <td>
              <v-icon @click="userdelete(item,index)">mdi-trash-can</v-icon>
              <v-icon @click="updatemethod(item,index)">mdi-pencil-outline</v-icon>
            </td>
          </tr>
        </tbody>
      </v-table>
      </v-col>

</template>
<script>
export default {
  data: () => ({
    userList: [], 
    user: {}, 
    position: 0, 
    button: "ADD",
  }),
  methods: {
    adduserinfo() {
      if (this.button === "ADD") 
      {
        this.userList.push(this.user);
      } 
      else 
      {
        this.userList.splice(this.position, 1, this.user);
        this.button = "ADD";
      }
      this.user = {};
    },

    userdelete(item, position) 
    {
      this.userList.splice(position, 1);
    },

    updatemethod(item, position)
     {
      this.position = position; 
      this.user = Object.assign({}, item); 
      this.button = "UPDATE"; 
    },
  },
};
</script>

<style scoped>
</style>