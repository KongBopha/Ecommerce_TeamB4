<template>
    <div class="container">
        <div class="wrapper">
            <div class="flex-left">
                <img src="/images/Shoes.jpg" class="img-shoes" />
            </div>
            <div class="flex-right">
                <Welcome class="welcome-size" />
                <UserInfo/>
                <Authen_button/>
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
    },
};
</script>

<style scoped>
.container {
    width: 100%;
    height: 100vh;   
    display: flex;
    justify-content: center; 
    padding-top: 140px;
    margin-left: auto;
    margin-right: auto;
}

.wrapper {
    width: 1000px;
    height: 60vh;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    display: flex;   
    justify-content: space-between;  
}

.flex-left, .flex-right {
    width: 490px;
    height: 100%;   
    border-radius: 20px;
}

.img-shoes {
    object-fit: cover;
    width: 100%;
    height: 100%;
}

.welcome-size {
    width: 100%;
    height: auto;   
}
</style>
