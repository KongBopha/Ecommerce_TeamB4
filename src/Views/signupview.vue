<template>
    <div class="container">
        <div class="center-page">
            <Welcome />
            <p>By signing up, you agree to SparkFoot's Term & Condition</p>
            <div class="user-input">
                <UserInfo />
                <UserInfo />
            </div>
        </div>
    </div>
</template>

<script>
import Authen_button from '@/components/Authen_button.vue';
import UserInfo from '@/components/userInfo.vue';
import Welcome from '@/components/welcome.vue';

export default {
    components: {
        Welcome,
        UserInfo,
        Authen_button
    }
};
</script>

<style scoped>
.container {
    width: 100%;
    height: 100vh;   
    display: flex;
    justify-content: center; 
    padding-top: 70px;
     
}

.center-page {
    width: 1000px;
    max-width: 100%;  
    height: 60vh;  
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;   
    padding: 10px;   
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

p {
    color: rgb(133, 133, 133);
    margin: 20px 0;   
}
.user-input {
    height: 23vh;
    width: 700px;
    display: flex;
    justify-content: space-around;
    align-items: center;  
}

.user-input .userInfo {
    width: 45%;  
}
</style>
