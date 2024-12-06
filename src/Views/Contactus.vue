<template>
    <div class="container">
        <div class="flex-left">
            <div class="contact-info">
                <h1>Contact Information</h1>
                <h3>Say something to start a live chat!</h3>
                <span class="phone_num">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M20.25 3.75v4.5m0-4.5h-4.5m4.5 0-6 6m3 12c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 0 1 4.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 0 0-.38 1.21 12.035 12.035 0 0 0 7.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 0 1 1.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 0 1-2.25 2.25h-2.25Z" />
                    </svg>
                    +855 74 851 290
                </span>
                <span class="telegram">
                    <font-awesome-icon :icon="['fas', 'paper-plane']" />
                    Sparkfoot_team
                </span>
                <span class="location">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                    </svg>
                        <a href="https://goo.gl/maps/NdFyL9qvsNB9UDhv8">
                        Office 106F, Building F, PO Box 86,
                        <br>Russian Conf. Blvd. Phnom Penh, Cambodia.
                    </a>
                </span>
                <span class="social_icon">
                    <font-awesome-icon :icon="['fab', 'facebook']" />
                    <font-awesome-icon :icon="['fab', 'instagram']" />
                    <font-awesome-icon :icon="['fab', 'tiktok']" />
                </span>
            </div>
        </div>
        <div class="flex-right">
            <div class="form-container">
    <form class="contact-form">
      <div class="form-row">
        <div class="form-group">
          <label for="first-name">First Name</label>
          <input type="text" id="first-name" placeholder="First Name">
        </div>
        <div class="form-group">
          <label for="last-name">Last Name</label>
          <input type="text" id="last-name" value="Doe">
        </div>
      </div>
      <div class="form-row">
        <div class="form-group">
          <label for="email">Email</label>
          <input type="email" id="email" placeholder="Enter your email">
        </div>
        <div class="form-group">
          <label for="phone">Phone Number</label>
          <input type="text" id="phone" value="+855 13 456 789">
        </div>
      </div>
      <div class="form-group full-width">
        <label for="message">Message</label>
        <textarea id="message" placeholder="Write your message.."></textarea>
      </div>
      <div class="form-action">
        <button type="submit" class="send-btn">
          <p>Send Message</p>
        </button>
      </div>
    </form>
  </div>
        </div>
    </div>
</template>

<script>
export default {
    setup () {
        

        return {}
    }
}
</script>

<style scoped>
h1{
    color: black;
}
.container{
    width: 1200px;
    height: 60vh;
    display: flex;
    border-radius: 20px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    justify-content: space-evenly;
    align-items: center;
    
}
.flex-left{

    width: 460px;
    height: 57vh;
    border-radius: 20px;
    background-color: black; 

}
.flex-right{
    width: 700px;
    height: 60vh;
    border-radius: 20px;
    
}
.contact-info{
    display: flex;
    flex-direction: column;
    align-items: start;   
    width: auto;
    height: auto;
    padding-left: 30px;
    padding-top: 30px;

}
h1{
    color: white;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
}
h3 {
    margin-bottom: 70px;  
}


span{
    margin-top: 50px;
    color: white;
    

}
a{
    color: white;
}
.phone_num {
    display: flex;  
    align-items: center;  
    gap: 15px; 
    color: white;
}

.size-6 {
    width: 25px;  
    height: 20px;  
    
}
.location{
    display: flex;  
    align-items: center;
    gap: 20px; 
    color: white;  
}

.telegram {
    display: flex;
    align-items: center;
    gap: 30px;  

}
.social_icon{
    display: flex;
    justify-content: space-evenly;
    width: 100px;
}
.contact-form {
  background: #fff;
  margin-top :20px;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  height: 56.6vh;
}

.form-row {

  display: flex;
  gap: 20px;
  margin-bottom: 15px;
  margin-left: 20px;
}

.form-group {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.full-width {
  width: 100%;
  
}

label {
  font-size: 14px;
  color: #888;
  margin-bottom: 5px;
}

input, textarea {
  border: none;
  border-bottom: 1px solid #ccc;
  font-size: 14px;
  padding: 10px 5px;
  outline: none;
}

input:focus, textarea:focus {
  border-bottom: 1px solid #000;
}

textarea {
  resize: none;
  height: 80px;
}

.form-action {
  display: flex;
  margin-left: 500px;
  margin-top: 20px;
  height: 45px;
  width: 150px;
}

.send-btn {
  display: flex;
  align-items: center;
  gap: 10px;
  background: #000;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
}

.send-btn:hover {
  background: #333;
}
.send-btn:hover .plane-icon path {
  fill: #ddd;
}

</style>