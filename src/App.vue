<template>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

  <div class="main-container">
    <header>
      <nav>
        <div v-if="type === 1">
            <ul class="nav-list">
              <li style="--navClr: #f5007a">
                  <!-- <a href="#HOME" data-text="&nbsp;HOME">&nbsp;HOME</a> -->
                  <RouterLink class="navli" data-text="H" to="/">H</RouterLink>
              </li>
              <li style="--navClr: #4dfe5c">
                  <!-- <a href="#ABOUT" data-text="&nbsp;ABOUT">&nbsp;ABOUT</a> -->
                  <RouterLink class="navli" data-text="A" to="/about">A</RouterLink>
              </li>
              <li style="--navClr: #fcff47">
                  <!-- <a href="#PROJECTS" data-text="&nbsp;PROJECTS">&nbsp;PROJECTS</a> -->
                  <RouterLink class="navli" data-text="P" to="/projects">P</RouterLink>
              </li>
              <li style="--navClr: #00e1fa">
                  <!-- <a href="#CONTACT" data-text="&nbsp;CONTACT">&nbsp;CONTACT</a> -->
                  <RouterLink class="navli" data-text="C" to="/contact">C</RouterLink>
              </li>
          </ul>
        </div>

        <div v-if="type === 2">
            <ul class="nav-list">
              <li style="--navClr: #f5007a">
                  <!-- <a href="#HOME" data-text="&nbsp;HOME">&nbsp;HOME</a> -->
                  <RouterLink class="navli" data-text="Home" to="/">Home</RouterLink>
              </li>
              <li style="--navClr: #4dfe5c">
                  <!-- <a href="#ABOUT" data-text="&nbsp;ABOUT">&nbsp;ABOUT</a> -->
                  <RouterLink class="navli" data-text="About" to="/about">About</RouterLink>
              </li>
              <li style="--navClr: #fcff47">
                  <!-- <a href="#PROJECTS" data-text="&nbsp;PROJECTS">&nbsp;PROJECTS</a> -->
                  <RouterLink class="navli" data-text="Projects" to="/projects">Projects</RouterLink>
              </li>
              <li style="--navClr: #00e1fa">
                  <!-- <a href="#CONTACT" data-text="&nbsp;CONTACT">&nbsp;CONTACT</a> -->
                  <RouterLink class="navli" data-text="Contacts" to="/contact">Contact</RouterLink>
              </li>
          </ul>
        </div>

        <div v-if="type=== 3">
            <ul class="nav-list">
              <li style="--navClr: #f5007a">
                  <!-- <a href="#HOME" data-text="&nbsp;HOME">&nbsp;HOME</a> -->
                  <RouterLink class="navli" data-text="HOME" to="/">HOME</RouterLink>
              </li>
              <li style="--navClr: #4dfe5c">
                  <!-- <a href="#ABOUT" data-text="&nbsp;ABOUT">&nbsp;ABOUT</a> -->
                  <RouterLink class="navli" data-text="ABOUT" to="/about">ABOUT</RouterLink>
              </li>
              <li style="--navClr: #fcff47">
                  <!-- <a href="#PROJECTS" data-text="&nbsp;PROJECTS">&nbsp;PROJECTS</a> -->
                  <RouterLink class="navli" data-text="PROJECTS" to="/projects">PROJECTS</RouterLink>
              </li>
              <li style="--navClr: #00e1fa">
                  <!-- <a href="#CONTACT" data-text="&nbsp;CONTACT">&nbsp;CONTACT</a> -->
                  <RouterLink class="navli" data-text="CONTACT" to="/contact">CONTACT</RouterLink>
              </li>
          </ul>
        </div>
          
      </nav>
    </header>

    <div class="content" >
      <RouterView />
    </div>

  </div>
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { ref, onMounted, onUnmounted, computed } from 'vue'

function checkMobile() {
  let windowWidth = ref(window.innerWidth)

  const onWidthChange = () => windowWidth.value = window.innerWidth
  onMounted(() => window.addEventListener('resize', onWidthChange))
  onUnmounted(() => window.removeEventListener('resize', onWidthChange))

  const type = computed(() => {
    if (windowWidth.value < 790) return 1
    else if (windowWidth.value < 1100) return 2
    return 3; 
  })

  const width = computed(() => windowWidth.value)

  return { width, type }
}

const { width, type } = checkMobile()

</script>


<style scoped>

.main-container{

    background: var(--clr-sg);
    max-height: fit-content;
   
    /* css smooth scroll */
    overflow-y: scroll;
    scroll-behavior: smooth;

}

header{
    width: 100%;
    background-color: var(--clr-bg);
    color: white;
    position: sticky;
    left: 0;
    top: 0;
    transition: 1s;
    padding: 0 10px;
    z-index: 1;
    height: 9vh;
}

.nav-list{
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    text-align: center;
    align-content: center;
    justify-content: space-around;
    list-style: none;
    transition: 1s;
}

.nav-list-2{
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    text-align: center;
    align-content: center;
    justify-content: space-around;
    list-style: none;
}

.nav-list li .navli-2 i{
   width: 5rem;
}

.nav-list li .navli{
    color: transparent;
    -webkit-text-stroke: 2px var(--navClr); ;
    font-family: 'Poppins', serif;
    font-size: 4rem;
    text-decoration: none;
    letter-spacing: 2px;
    position: relative;
}
.nav-list li .navli::before{
    content: attr(data-text);
    color: var(--navClr);
    position: absolute;
    width: 0%;
    overflow: hidden;
    transition: 0.5s;
    -webkit-text-stroke: 1px var(--navClr) ;

}

.nav-list li .navli:hover::before{
    width: 100%;
    filter: drop-shadow(0 0 25px var(--navClr));
}

.content{
  width: 100%;
  height: 91vh;
  /* border: solid 8px red;  */
}


</style>
