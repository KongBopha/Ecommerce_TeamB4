import { defineStore } from "pinia";

export const useStoreFunction= defineStore('user',{

    state:() =>({
        isloggIn:false,
    }),
    actions:{
        logIn(){
            this.isloggIn=true;
        },
        logOut(){
            this.isloggIn= false;
        },
    },

});