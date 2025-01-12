<template>
    <div class="main-btn">
        <p> Don't have any accounts? <span @click="singupButton"> Sign up</span></p>
        <div class="btn-at" >
            <h3 @click="logInbtn">Log in</h3>
        </div>
    </div>
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();  
 
const singupButton = () => {
    router.push('/signupview');  
}
</script>

<style scoped>
.main-btn {
    width: auto;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: center; 
    align-items: center;
}

.btn-at {
    width: 17rem;
    height: 3rem;
    background-color: rgb(27, 106, 255);
    border-radius: 20px;
    margin-top: 15px;
    position: relative;
}
.btn-at:hover{
    background-color: rgb(34, 69, 136);
    
}

h3 {
    position: absolute;
    color: white;
    left: 115px;
    top: 10px;

}

p {
    color: black;
    margin-top: 20px;
}

span {
    color: blue;
    font-weight: bold;
    text-decoration: underline;
    cursor: pointer; /* Adds a pointer cursor for better UX */
}
</style>
