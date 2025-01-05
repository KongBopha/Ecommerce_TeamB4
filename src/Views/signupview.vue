<template>
    <div class="container">
        <div class="center-page">
            <Welcomecomponent />
            <p>By signing up, you agree to SparkFoot's Term & Condition</p>
            <div class="form-container">
                <signup_info />
            </div>
        </div>
    </div>
</template>

<script>
import signup_info from '@/components/signup_info.vue';
import Welcomecomponent from '@/components/welcome.vue';

export default {
    components: {
        Welcomecomponent,
        signup_info
    }
};
</script>

<style scoped>

.container {
    width: 100%;
    min-height: 100vh;  
    display: flex;
    justify-content: center;
    padding-top: 120px;
    margin-left: auto;
    margin-right: auto;
}

.center-page {
    width: 60%;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    background-color: #fff;
    min-height: 100%; 
}
.form-container {
    width: 100%;
    max-width: 600px;
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
}


p {
    color: rgb(133, 133, 133);
    margin: 20px 0;
    text-align: center;
}
</style>
