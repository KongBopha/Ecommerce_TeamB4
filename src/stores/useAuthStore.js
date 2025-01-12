import { defineStore } from "pinia";
import { auth } from "@/firebase";
import { useRouter } from "vue-router";
import { collection, doc,getDoc,setDoc } from "firebase/firestore";
import { db } from "@/firebase";
import { ref as storageRef, uploadBytes, getDownloadURL } from 'firebase/storage'
import { useFirebaseStorage } from 'vuefire'
import {
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  updateProfile,
  reload,
  getAuth,
} from "firebase/auth";

export const useStoreFunction = defineStore("user", {
  state: () => ({
    isLoggedIn: false,
    user: null,
  }),
  actions: {
    async createUser(email, password, fullName, phoneNumber) {
      try {

        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;

        await updateProfile(user, { displayName: fullName });
        await reload(user);

        //define collection object
        const myDocRef = doc(db, 'Userdata', user.uid);  
        //define document data in collection
        const myDocumentData = {
          name: fullName,
          email: email,
          phoneNumber: phoneNumber,
          createdAt: new Date(),
        };
    
        await setDoc(myDocRef, myDocumentData);
    
        
        console.log('Fullname:', fullName);
        console.log('Document added or updated successfully!');
    
        this.user = user;
        this.isLoggedIn = true;
    
        console.log('User registered:', user);
    
      } catch (error) {
        console.error('Error registering user:', error.message);
      }
    },    
    async loginUser(email, password) {
      try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        this.user = userCredential.user;
        this.isLoggedIn = true;


        console.log("User logged in:", this.user);
        return null;  
      } catch (error) {
        console.error("Error logging in:", error.message);
        return error.message;  
      }
    },
    async signInGoogle() {
      const provider = new GoogleAuthProvider();
      try {
        const result = await signInWithPopup(auth, provider);
        this.user = result.user;
        this.isLoggedIn = true;
        console.log("User logged in with Google:", this.user);
        router.push("/");
      } catch (error) {
        console.error("Google sign-in error:", error.message);
      }
    },
      
    checkAuthState() {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          console.log("User logged in:", user); 
          this.user = user;
          this.isLoggedIn = true;
        } else {
          console.log("No user is logged in");
          this.user = null;
          this.isLoggedIn = false;
        }
      });
    },    
    async logout() {
      try {
        await signOut(auth);
        this.user = null;
        this.isLoggedIn = false;
        console.log("User logged out");
        useRouter().push("/");
      } catch (error) {
        console.error("Error logging out:", error.message);
      }
    },
    async DisplayUserData(name, email, phoneNumber) {
      if (this.isLoggedIn && this.user) {
        const docSnap = await getDoc(doc(db, "Userdata", this.user.uid));
    
        if (docSnap.exists()) {
          name.value = docSnap.data().name;
          email.value = docSnap.data().email;
          phoneNumber.value = docSnap.data().phoneNumber;
        } else {
          console.log("Document does not exist");
        }
      } else {
        alert("You haven't logged in yet.");
      }
    },
    async userHistoryOrder(productname,quantity,totalPrice,productImage,paymentStatus,user){
      try {
        //define collection object
        const myDocRef = doc(db, 'OrderHistory', user.uid);  
        //define document data in collection
        const myDocumentData = {
            product: productname,
            totalPrice: totalPrice,
            quantity: quantity,
            paymentStatus:paymentStatus,
            createdAt: new Date(),
        };
        //upload product image 
        const storage = useFirebaseStorage();
        const storageRefImage  = storageRef(storage, `images/${user.uid}/${productImage.name}`) 
        const fileSnapshot = await uploadBytes(storageRefImage,productImage);
        const DownloadURL  = await getDownloadURL(fileSnapshot.ref);
  
        myDocumentData.image = DownloadURL;
  
        await setDoc(myDocRef, myDocumentData);
  
        console.log("Order history saved successfully ")
        
      } catch (error) {
        console.error("Error uploading file and saving order history: ", error);
      }
    },
  },
});
