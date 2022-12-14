<template>
  <div class="main">
    <div class="container">
      <div class="box">
        <div class="side" id="side1">
          Software Engineer
        </div>
        <div class="side" id="side2">
          Frontend Developer
        </div>
        <div class="side" id="side3">
          Backend Developer
        </div>
        <div class="side" id="side4">
          Programmer
        </div>
        <div class="side" id="side5">
          ML Engineer
        </div>
        <div class="side" id="side6">
          Data Scientist
        </div>
    
      </div>
  </div>
  </div>
  

</template>

<script setup>

</script>

<style scoped>

.main{
  display: flex;
  justify-content: center;
  align-content: center;
}
.container{

  margin-top: 5rem;
  position: absolute;
  top: 30%;
  left: 40%;
  /* transform: translate(-50%, -50%); */
  perspective: 20%;
}

.box{
  height: 20vh;
  /* width: 35vw; */
  position: absolute;
  transform-style: preserve-3d;
  /* transform: rotateX(-5deg) rotateY(-40deg); */
  animation: animate 20s infinite;
}

@keyframes animate{

  0%{
    transform: rotateX(0deg) rotateY(0deg);
  }

  25%{
    transform: rotateX(-45deg) rotateY(-40deg);
  }

  50%{
    transform: rotateX(45deg) rotateY(45deg);
  }

  75%{
    transform: rotateX(-45deg) rotateY(-160deg);
  }

  100%{
    transform: rotateX(0deg) rotateY(0deg);
  }

}


.side{
  text-align: center;
  height: 300px;
  width: 300px;
  padding: 70px 0;
  font-size: 3rem;
  color: white;
  background-color: black;
  border: solid 4px white;
  box-sizing: border-box;
  filter: drop-shadow(0 0 8px var(--clr-neon));

  position: absolute;

  text-shadow: 0 0 0.1em currentColor, 0  0 1em var(--clr-neon);
}

#side1{
  transform: translateZ(200px);
}

#side6{
  transform: translateZ(-200px) rotateY(180deg);
}

#side2{
  right: -80px;
  transform: rotateY(270deg);
}

#side3{
  left: 200px;
  transform: rotateY(90deg);
}

#side4{
  bottom: 100px;
  transform: rotateX(90deg);
}

#side5{
  top: 200px;
  transform: rotateX(270deg);
}



</style>