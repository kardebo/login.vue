import Vuex from "vuex";
import VuexPersistence from "vuex-persist";

const vuexLocal = new VuexPersistence({
  storage: window.localStorage,
});

export default new Vuex.Store({
  state: 
  {
    dataList: [],
  },
  plugins: [vuexLocal.plugin],
  mutations: {
    uploadtext(state, note) 
    {
      state.dataList.push(note);  
    },
    updatetext(state, { index, text }) 
    {
      state.dataList.splice(index, 1, text); 
    },
    deletetext(state, index) 
    {
      state.dataList.splice(index, 1);
    },
  },
});
