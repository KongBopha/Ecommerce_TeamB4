<template>
    <div class="mb-5">
      <div class="grid grid-cols-3 gap-[60px]">
        <router-link to='/AirForce1'><CardComponent
          discount="20%"
          image="./src/assets/images/NAF1.png"
          title="Nike Air Force 1"
          price="115$"
          button="Checkout"
        /></router-link>
        <router-link to="/AirJordan4"><CardComponent
          discount="15%"
          image="./src/assets/images/NAJ4/NAJ4_1.png"
          title="Nike Air Jordan 4"
          price="150$"
          button="Checkout"
        /></router-link>
        <CardComponent
          discount="30%"
          image="./src/assets/images/NAF3.png"
          title="Nike Air Force 3"
          price="230$"
          button="Card"
        />
        <CardComponent
          discount="15%"
          image="./src/assets/images/NAF4.png"
          title="Nike Air Force 4"
          price="140$"
          button="Card"
        />
        <CardComponent
          discount="10%"
          image="./src/assets/images/jordan.png"
          title="Jordan 1"
          price="300$"
          button="Checkout"
        />
        <CardComponent
          discount="30%"
          image="./src/assets/images/NAF5.png"
          title="Nike Air Force 5"
          price="400$"
          button="Checkout"
        />
      </div>
      <div class="absolute mt-[30px] right-[400px]">
        <ButtonComponent />
      </div>
    </div>
  </template>
  
  <script>
  import ButtonComponent from '@/components/ButtonComponent.vue';
  import CardComponent from '@/components/CardComponent.vue';
  export default {
    components: {
        ButtonComponent,
        CardComponent
    },
    name: 'Shoes'
  }
  </script>

<style scoped>
main {
  width: 650px;
  height: auto;
  color: black;
  font-family: Arial, Helvetica, sans-serif;
  font-size:  x-small;
  padding: 20px;   
  text-align: start;  

}
 
.container {
  height: auto;  
  width: auto;
  padding-right: 800px;
  padding-bottom: 620px;
}
.searchBar {
  width: 100%;
  padding: 12px;
  font-size: 14px;
  border: 2px solid #222222;
  border-radius: 20px;
  text-indent: 50px;

}
.icon-white{
    position: absolute;
    color:rgb(0, 0, 0);
    margin-left: 20px;
    margin-top: -30px;  
  }
input::placeholder { 
  font-style: italic;  
  opacity: 0.8;  
  text-indent: 50px;
}
  input {
  position: relative;
  display: block;
  width: 330px;
  padding: 10px  ;
  background-color: rgb(255, 255, 255);
  font-size: 12px;
  border: none;
  border-radius: 20px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  
}
</style>