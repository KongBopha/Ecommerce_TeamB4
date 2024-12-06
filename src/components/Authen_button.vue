<template>
    <div class="main-btn">
        <p> Don't have any accounts? <span> Sign up</span></p>
        <div class="btn-at">
            <h3>Log in</h3>
    </div>
    </div>
</template>

<script>
    export default {
    }
</script>

<style scoped>
.main-btn{
    width: auto;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.btn-at{
    width: 17rem;
    height: 3rem;
    background-color: rgb(27, 106, 255);
    border-radius: 20px;
    margin-top: 60px;
}
h3{
    color:white;
    text-align: center;
    padding-top: 8px;
}
p{
    color: black;
    margin-top: 20px;
}
span{
    color: blue;
    font-weight: bold;
    text-decoration: underline;
}
</style>