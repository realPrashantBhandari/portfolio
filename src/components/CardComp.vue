<template>
    <div class="body-container">
      <div class="card-container">
          <div class="card-item" :style="{ '--image-url': 'url(' + img + ')' }" >
              <div class="card-content">
                  <h1 class="card-name">{{title}}</h1>
                  <div class="card-hover-content">
                      <p class="card-text">
                        {{des}}
                      </p>
                      <a class="card-button" :href=learnMore target="_blank">Learn More</a>                          
                      <RouterLink 
                      :to="{name: 'projectDemo', params: {id}}" 
                      v-if="haveDemo" 
                      class="card-button"
                      > Demo</RouterLink>
                  </div>
                  
              </div>
          </div>
      </div>
    </div>
    
  </template>
  
<script setup>


const props = defineProps({
  title:{
    default: "Temp Title"
  },
  des:{
    type:String,
    default: "Temp Des"
  },
  img:{
    type:String,
    default: `url('../assets/img/indexImage.png')`,
    required: true,
  },
  id:{
    type:String,
    default: "id99",
    required: true,
  },
  haveDemo:{
    type:Boolean,
    default: false
  },
  learnMore:{
    type:String,
    required: true,
  }
});

</script>

<style scoped>

h1{
  color: white;
}

.card-container{
    display: flex;
    margin:  0.8rem 0.8rem;
    flex-direction: row;
    flex-wrap: wrap;
  
    justify-content: center;
    align-content: center;
    padding: 1rem;
    /* border: solid rgb(127, 140, 255) 5px; */
    border-radius: 30px;
}

.card-item{
    color: white;
    background-image: var(--image-url);
    background-size: cover;
    display: flex;
    gap: 0.5rem;
    flex-direction: column;
    text-align: center;
    min-width: 35ch;
    height: 30ch;
    overflow: hidden;

    border: solid 1px lightblue;
    filter: drop-shadow(0 0 25px rgba(3, 191, 254, 0.711));

    transition: transform 500ms ease-out;
}

.card-hover-content{
    opacity: 1;
    transition: 500ms;
    /* background-color: rgba(0, 0, 0, 0.8); */
}

.card-content{
    padding: 1rem;
    align-content: flex-end;
    margin: 0;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.3);
    
}


@media (hover) {

    .card-hover-content{
        opacity: 0;
    }

    .card-content{
    
        transform: translateY(70%);
        transition: transform 500ms ease-out;
    }

    /* .card-item:focus-within,        */
    .card-item:hover{
        transform: scale(1.2);
    } 

    /* .card-item:focus-within .card-name::after,   */
    .card-item:hover .card-name::after{
        transform: scaleX(1);
    }

    /* .card-item:focus-within .card-content, */
    .card-item:hover .card-content{
        transform: translateY(0%);
        background-color: rgba(0, 0, 0, 0.8);
        transition-delay: 250ms;
    }

    /* .card-item:focus-within .card-hover-content, */
    .card-item:hover .card-hover-content{
        opacity: 1;
    }

    /* .card-item:focus-within .card-content{
        transition-duration: 0ms;
    } */

    .card-name::after{
        transform: scaleX(0);
    }
}

.card-name{
    position: relative;
    width: max-content;
    margin-bottom: 0.5rem;
    text-shadow: 0 0 0.2em currentColor;
    font-size: 2rem;
}

.card-name::after{
    content: "";
    position: absolute;
    height: 4px;
    width: calc(100% + 1rem);
    left: -1rem;
    bottom: -5px;
    background-color: var(--clr-1);

    
    transform-origin: left;
    transition: transform 500ms ease-out;
}

.card-text{
    color: white;
    word-wrap: break-word;
    width: 35ch;
    
}

.card-button{
    cursor: pointer;
    display: inline-block;
    text-decoration: none;
    color: black;
    background-color: var(--clr-1);
    padding: 0.5rem 1rem;
    margin: 0.5rem;
    border-radius: 25px;
    transition: 0.5s;
}

.card-button:hover,
.card-button:focus{
    background-color: azure;
}

</style>