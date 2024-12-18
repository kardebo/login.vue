<template>
  <div>
    <h1>This Is Testing the TDLS.</h1>
    <br>
    <v-row>
      <v-col cols="12" md="2"></v-col>
      <v-col cols="12" md="8">
        <v-text-field v-model="text" label="Text Here To Create a Note." variant="outlined">
        </v-text-field>
      </v-col>
      <v-col cols="12" md="2">
        <v-btn size="large" @click="uploadtext()">{{ button }}</v-btn>
      </v-col>
    </v-row>
    <br><br>
    <h3>This Is The List Of Your Notes :</h3>
    <br>
    <v-row>
      <v-col cols="3" md="3" offset-md="4" v-for="(note, index) in notes" :key="index">
        <v-row>
          <v-col cols="12" md="6">
            <h3>{{ note }}</h3>
          </v-col>
          <v-col cols="12" md="3">
            <v-btn class="mx-4" @click="deletetext(index)">Delete</v-btn>
          </v-col>
          <v-col cols="12" md="3">
            <v-btn class="mx-4" @click="updatetext(note, index)">Update</v-btn>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default 
{
  data: () => ({
    text: "",
    notes: [],
    position: 0,
    button: "Upload",
  }),
  mounted() 
  {
    this.notes = [...this.$store.state.dataList];
 // const storeNotes = localStorage.getItem("notes");
 // if (storeNotes) 
 // {
 //   this.notes = JSON.parse(storeNotes);
 // }

  },
  methods: 
  {
    uploadtext() 
    {
      if (this.button === "Upload") 
      {
        this.notes.push(this.text);
        this.$store.commit("uploadtext", this.text);
      } 
      else 
      {
        this.$store.commit("updatetext", { index: this.position, text: this.text }); 
        this.button = "Upload";
      }
      this.text = ""; 
   // this.saveToLocalStorage();
    },
    deletetext(index) 
    {
      this.notes.splice(index, 1);
      this.$store.commit("deletetext", index); 
   // this.saveToLocalStorage();
    },
    updatetext(note, index)
    {
      this.text = note; 
      this.position = index;
      this.button = "UPDATE"; 
      this.user = Object.assign({},note);
    },
  // saveToLocalStorage() 
  //  {
  //    localStorage.setItem("notes", JSON.stringify(this.notes));
  //  },
  },
};

</script>

<style scoped>
</style>
