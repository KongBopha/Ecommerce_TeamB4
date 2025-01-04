<template>
    <div class="body-page">
        <div class="left-page">
            <div class="column-page">
                <div class="col1">
                    <span>New Arrivals!!!</span>
                    <p> Get up to 10% for newly imported goods</p>
                    <div class="row-flex">
                        <button> Get code here</button>
                        <img src="/images/newArrival.png" class="img-logo" />
                    </div>
                </div>
                <div class="col1">
                    <span>Referral Code</span>
                    <p>Refer people and you both get</p>
                    <p>10% off first purchase!!!</p>
                    <div class="row-flex">
                        <button> Get code here</button>
                        <img src="/images/user.png" class="img-logo" />
                    </div>
                </div>
            </div>
        </div>
        <div class="right-page">
            <img src="/images/homeshoes.png" class="body-shoes"/>
        </div>
    </div>
</template>
<script>
  export default {
    name: "bodyPage",
  };
</script>
<style scoped>
.body-page{
    width: 1100px;
    height: 60vh;
    display: flex;
    /* background-color: bisque; */
    justify-content: space-around;
}
.left-page{
    width: 500px;
    height: 60vh;
    border-radius: 20px;
    /* background-color: aquamarine; */
}
.right-page{
    width: 500px;
    height: 60vh;
    border-radius: 20px;
}
.column-page{
    width: 400px;
    height: 35vh;
    display: flex;
    flex-direction:column ;
    /* background-color: chartreuse; */
    justify-content: space-around;
    padding-top: 20px;
}
.col1{
    width: 300px;
    height: 15vh;
    display: flex;
    flex-direction: column;
    background-color:#505050;
    border-radius: 10px;
}
.col2{
    width: 300px;
    height: 15vh;
}
span{
    width: 300px;
    height: 4vh;
    color: white;
    background-color:#505050;
    border-bottom: 1px solid black;
    border-top-left-radius:10px ;
    border-top-right-radius:10px ;
    font-family:'Times New Roman', Times, serif;
    font-weight: bold;
    font-size: larger;
    text-indent: 15px;
}
p{
    color: white;
    text-indent: 15px;
    font-family: Arial, Helvetica, sans-serif;
    font-size:  smaller;
}
button{
    margin-top: 10px;
    width: 160px;
    height: 33px;
    border-radius: 10px;
    border: none;
    margin-left: 15px;
}
button:hover{
    background-color: black;
    color: white;
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);
}
.row-flex{
    display: flex;
    justify-content: space-evenly;
}
.img-logo{
    height: 60px;
    width: 100%;
    object-fit: contain; 
}
.body-shoes{
    object-fit: contain;
    width: 100%;
    height: 60vh;
}
</style>