<template>
    <div class="welcome-text">
        <div class="logo">
            <img src="/images/brand.png" class="img-logo" />
            <h3>Welcome to SparkFoot</h3>
        </div>
    </div>
</template>

<script>
</script>

<style scoped>
.welcome-text {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;  
    max-width: 400px;
    margin: 0 auto;
    font-family: Arial, sans-serif;
}

.logo {
    display: flex;
    flex-direction: column;
    
}

.img-logo {
    margin-top: 20px;
    height: 40px;
    object-fit: contain; 
    
}
h3{
    color:black;
    font-family:  'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    font-weight: bold;
    font-size: 30px;
}
</style>
