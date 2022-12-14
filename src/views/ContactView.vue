<template>
    <div class="contact-container">
        <h1>Contact Me</h1>
        <ul class="contact-link">
            <li tooltip-contact="Hire on Fiverr">
                <a href="https://www.fiverr.com/prashantbh24" target="_blank">
                    <img src="https://img.icons8.com/color/100/null/fiverr.png"/>
                </a>
                
            </li>
            <li tooltip-contact="Download Resume">
                <a href="https://drive.google.com/file/d/1xnNLWQjhq5FKggoTmAE3SGunPET6ag8R/view?usp=sharing" target="_blank">
                    <img src="https://img.icons8.com/stickers/100/null/parse-from-clipboard.png"/>
                </a>
                
            </li>
        </ul>
        <h2>Fill out the form below to get in touch with me</h2>
    <div class="contact-form">
        <form action="#">
            <div class="form-group">
                <label for="firstname" >First Name*</label>
                <input 
                type="text" 
                name="firstname" 
                id="firstname" 
                required 
                class="form-element"
                v-model="firstName">
            </div>
            <div class="form-group">
                <label for="lastname">Last Name</label>
                <input type="text" name="lastname" id="lastname"  class="form-element" v-model="lastName">
            </div>
            <div class="form-group">
                <label for="email">Email Address*</label>
                <input type="email" name="email" id="email" required class="form-element" v-model="email">
            </div>
            <div class="form-group">
                <label for="phone">Contact Number</label>
                <input type="tel" name="phone" id="phone"  class="form-element" v-model="phone">
            </div>
            <div class="form-group-full">
                <label for="message">Message</label>
                <textarea name="message" id="message" class="form-element" v-model="message"></textarea>
            </div>
            <div class="submit-group">
                <button type="submit"> Send Message </button>
            </div>
        </form>
    </div>
</div>
</template>
  
<script setup>

import {ref} from 'vue'

const firstName = ref('')
const lastName = ref('')
const email = ref('')
const phone = ref('')
const message = ref('')


</script>


<style scoped>

.contact-container{
    display: flex;
    color: white;
    justify-content: center;
    align-content: center;
    text-align: center;
    padding: 0.5rem 0; 
    /* border: solid 5px red; */
    flex-direction: column;

}

.contact-container h1 {
    font-size: 4rem;
    color: var(--clr-neon);
    filter: drop-shadow(0 0 25px var(--clr-neon));
}

.contact-container h2{
    color: rgb(0, 247, 255);
    filter: drop-shadow(0 0 25px rgb(0, 247, 255));
    font-size: 2rem;
    line-height: 1.5; 
    margin: 0.2rem; 
}

.contact-container .contact-link{
    list-style: none;
    display: flex;
    justify-content: center;
    
}
.contact-container .contact-link li{
    /* border: solid 2px var(--clr-1); */
    border-radius: 50%;
    padding: 0.2rem;
    position: relative;
}

.contact-container .contact-link li:first-child{
    margin-left: 3rem;
}

.contact-container .contact-link li:last-child{
    margin-right: 4rem;
}

.contact-container .contact-link li::after,
.contact-container .contact-link li::before{
    content: attr(tooltip-contact);
    position: absolute;
    background-color: rgb(0, 0, 0);
    padding: 0.5rem;
    left: 50%;
    transform: translateX(-50%) ;
    font-size: 1.4rem;
    transition: all 500ms ease;
    transform-origin: bottom center;
    border: solid 1px black;
    border-radius: 20px;
    opacity: 0;
}

.contact-container .contact-link li:first-child:hover::after,
.contact-container .contact-link li:first-child:hover::before{
    opacity: 1;
    transform: translateX(-200%) scale(1);
    
}

.contact-container .contact-link li:last-child:hover::after,
.contact-container .contact-link li:last-child:hover::before{
    opacity: 1;
    transform: translateX(60%) scale(1);
    
}

.contact-container .contact-link li:hover{
    background: radial-gradient(rgb(255, 255, 255), rgb(0, 0, 0) );
}

.contact-form {
    display: flex;
    justify-content: center;
    align-content: center;
    min-width: 800px;
}

.contact-form form{
    display: grid;
    grid-template-columns: repeat(2,1fr);
    grid-gap: 1.5rem;
    background-color: white;
    border-radius: 25px;
    color: black;
    width: fit-content;
    padding: 2rem;
    margin: 1rem;
    box-shadow: 0 6px 12px var(--clr-neon);

}

.form-group label,
.form-group-full label{
    display: block;
    margin-bottom: 5px;
    color: grey;
    font-size: 1.5rem;
}

.form-element{
    appearance: none;
    border: none;
    outline: none;

    display: inline-block;
    width: 100%;

    font-size: 1.5rem;

    border-radius: 10px;
    padding: 0.5rem;
    background-color: #f3f3f3;
    transition: 250ms;
}

.form-element:focus{
    box-shadow: 0px 0px 6px black;
}

.form-group-full{
    grid-column: 1 / -1;
}

.form-group-full textarea{
    resize: none;
    min-height: 100px;
    
}

.submit-group{
    grid-column: 1 / -1;
}

.submit-group button{
    appearance: none;
    border: none;
    outline: none;

    background-color: var(--clr-neon);
    padding: 1rem;
    border-radius: 10px;
    font-size: 1.5rem;
    color: white;
    cursor: pointer;
    transition: all 250ms ease;
}

.submit-group button:hover,
.submit-group button:active{
    background-color: white;
    color: var(--clr-neon);
    border: solid 2px var(--clr-neon)
}

</style>