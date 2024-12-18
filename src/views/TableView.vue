<template>
  <h1>Welcom From The Table Zone.</h1>
<br><br>
<v-row>
<v-col cols="12" md="4">
<v-row>
    <v-col cols="12" md="12">
        <v-text-field v-model="user.name" label="Name" variant="outlined"/>
    </v-col>

    <v-col cols="12" md="12">
        <v-text-field v-model="user.phone" label="Phone" variant="outlined"/>
    </v-col>

    <v-col cols="12" md="12">
        <v-btn @click="saveOrupdateuser">{{ button }}</v-btn>
    </v-col>

</v-row>
</v-col>
<v-col cols="12" md="8" class="pl-1 pt-1 pb-1">
      <v-table
        fixed-header 
        height="92vh"
        density="compact"
      >
        <template v-slot:default>
          <thead>
            <tr>
              <th class="text-center white--text bg-primary">No.</th>
                <th class="text-center white--text bg-primary">Name</th>
                <th class="text-center white--text bg-primary">Phone</th>
                <th class="text-center white--text bg-primary">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, index) in userList" :key="index" @click="selectedOne = item" :style="{
              backgroundColor:
              item.name === selectedOne?.name ? '#def3ff': 'transparent',}">
              <td class="text-center">{{ index + 1 }}</td>
              <td class="text-center">{{ item.name}}</td>
              <td class="text-center">{{ item.phone }}</td>
              <td class="text-center">
                <v-btn density="compact" icon color="red" @click="clickDelete(index)">
                  <v-icon size="small">mdi-delete</v-icon></v-btn>
                <v-btn density="compact" icon color="blue" @click="clickUpdate(item,index)">
                  <v-icon size="small">mdi-wrench</v-icon></v-btn>
              </td>
            </tr>
            <v-divider />
          </tbody>
        </template>
      </v-table>
    </v-col>

</v-row>

</template>
<script>
export default {
  data: () => ({
    selectedOne:{},
    user:{},
    userList:[],
    button:"Save",
    position:null,
  }),
   props: {},
  mounted: function() {},
  methods: 
  {
    saveOrupdateuser:function()
    {
      if(this.button === "Save")
    {
        this.userList.push(this.user);
    }
    else
    {
      this.userList.splice(this.position, 1, this.user);
      this.button = "Save";
    }
    this.user={};
    },
    clickDelete:function(index)
    {
        this.userList.splice(index,1)
    },
    clickUpdate:function(item,position)
    {
      this.position=position
      this.user = {...item}; 
      this.button = "Edit"; 
    }
  },
  watch: {},
  components: {}
};
</script>
<style scoped>
.login-full 
{
  height: 98vh;
}
table,
th,
td {
  border: 1px solid rgb(215, 215, 215);
  border-collapse: collapse;
  padding: 0 1px !important;
}

</style>