import { defineStore } from "pinia";
import router from '@/router/index.js' ;
import {auth} from  '@/main'
import { useRouter } from "vue-router";

import { createUserWithEmailAndPassword,signInWithEmailAndPassword
, signOut, onAuthStateChanged
} from "firebase/auth";
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
