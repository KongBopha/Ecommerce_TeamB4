<template>
    <div class="main-btn">
        <p> Don't have any accounts? <span @click="singupButton"> Sign up</span></p>
        <div class="btn-at">
            <h3>Log in</h3>
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
}

h3 {
    color: white;
    text-align: center;
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
