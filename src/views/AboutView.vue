<template>
  <div class="body-container">
    <div class="about-container">
        <div class="box b1">
            <img src="https://github.com/realPrashantBhandari/imageData/blob/main/prashant.png?raw=true" alt="profilePic">
        </div>

        <div class="box b2">
            <h1> Prashant Bhandari</h1>
            <h2> - Bs Electrical Engineering, Florida Tech</h2>
            <h2> - Ms Software Development, Boston University</h2>
            <p>
                Hi I'm Prashant Bhandari and I am a software engineer with over 4 years of industry experiences. I am currently working in collins aerospace as a Level II Software Engineer. I have experience in full stack web developemnt and is proficient in front and backend frameworks. I have created mutiple project using a variety of technologies such as django, vue, HTML, CSS, bootstrap flutter etc and have experience working with both SQL and NoSQL databases.
            </p>

            <div class="box b3">
                <ul class="contact-list">
                    <li>
                        <a class="link-neon" href="https://github.com/realPrashantBhandari" target="_blank">
                            Github
                        </a>
                    </li>
                    <li>
                        <a class="link-neon" href="https://www.linkedin.com/in/prashantbhandari24/" target="_blank">
                            Linkedin
                        </a>
                    </li>
                    <li>
                        <a class="link-neon" href="#" target="_blank">
                            Portfolio
                        </a>
                    </li>
                </ul>
            </div>
        </div>

        <div class="box b4">
            <ul class="skill-list">
                <li tooltip-data="HTML">
                    <img src="https://img.icons8.com/color/50/null/html-5--v1.png"/>
                </li>
                <li tooltip-data="CSS" >
                    <img src="https://img.icons8.com/fluency/50/null/css3.png"/>
                </li>
                <li tooltip-data="Django">
                    <img src="https://img.icons8.com/windows/50/null/django.png"/>
                </li>
                <li tooltip-data="Vue3">
                    <img src="https://img.icons8.com/color/50/null/vue-js.png"/>
                </li>
                <li tooltip-data="Flutter">
                    <img src="https://img.icons8.com/color/50/null/flutter.png"/>
                </li>
                <li tooltip-data="Bootstrap" >
                    <img src="https://img.icons8.com/color/50/null/bootstrap.png"/>
                </li>
                <li tooltip-data="NodeJS">
                    <img src="https://img.icons8.com/fluency/50/null/node-js.png"/>
                </li>
                <li tooltip-data="Flask" >
                    <img src="https://img.icons8.com/ios/50/null/flask.png"/>
                </li>
                <li tooltip-data="jQuery">
                    <img src="https://img.icons8.com/ios-filled/50/null/jquery.png"/>
                </li>
                <li tooltip-data="Git" >
                    <img src="https://img.icons8.com/color/50/null/git.png"/>
                </li>
                <li tooltip-data="MySQL">
                    <img src="https://img.icons8.com/color/50/null/mysql-logo.png"/>
                </li>
                <li tooltip-data="MongoDB">
                    <img src="https://img.icons8.com/color/50/null/mongodb.png"/>
                </li>
                <li tooltip-data="Firebase">
                    <img src="https://img.icons8.com/color/50/null/firebase.png"/>
                </li>
                <li tooltip-data="PostgreesSQL">
                    <img src="https://img.icons8.com/color/50/null/postgreesql.png"/>
                </li>
            </ul>                    
        </div>
    </div>
  </div>
</template>

<style scoped>
.about-container{
    height: 100%;
    width: 100%;

    display: grid;
    grid-template-areas:
    "a b"
    "d d";
    gap: 0.3rem;
    align-content: center; 
    text-align: center;
    justify-content: center;
    /* border: solid 5px blue; */
    padding: 1rem 1rem;
    
}

.box{
    display: grid;
    border-radius: 2em;
    color: white;
}

.about-container .b1{
    place-items: center;
    grid-area: a;
    border: solid rgb(127, 227, 255) 5px;
    padding: 0.5rem;
    
}

.about-container .b1 img{
    height: 500px;
    width: 500px;
    border-radius: 50%;
    
    
}

.about-container .b2{
    place-items: left;
    grid-area: b;
    padding: 0.5em;
    margin: 0.2em;
    border: solid aquamarine 5px;
}
.about-container .b2 h1{
    font-size: 4rem;
    color: rgb(249, 4, 4);
    filter: drop-shadow(0 0 25px red);
}

.about-container .b2 h2{
    font-size: 2em;
    color: #00e1fa;
    filter: drop-shadow(0 0 25px #00e1fa);

}

.about-container .b2 p{
  margin-top: 0.5rem;
  font-size: 1.5em;
  font-style: 'Poppins';
  color: rgb(255, 255, 255);
  border-radius: 20%;
  filter: drop-shadow(0 0 25px white);

}


.contact-list {
    list-style-type: none;
    overflow: hidden;
    display:flex;
    
    width: 100%;
    padding: 0 4rem;
    justify-content: space-evenly;
  }


.about-container .b3 .link-neon{
    text-decoration: none;
    padding: 0.2em;
    margin: 0.2em;
    margin-bottom: 1em;
	  color: var(--clr-neon);
    background-color: var(--clr-bg);
    font-weight: bold;
    font-size: 3rem;
    display: inline-block;
    border: var(--clr-neon) 4px solid;
    list-style: none;
    border-radius: 10%;
    position: relative;

    text-shadow: 0  0 0.1em rgba(255, 255, 255, 0.411);
}

.about-container .b3 .link-neon:hover{
    filter: drop-shadow(0 0 3px var(--clr-neon));
    text-shadow: 0 0 0.1em currentColor, 0  0 0.1em white;
}

.about-container .b3 .link-neon::before{
    content: "";
    position: absolute;
    background: var(--clr-neon);
    size: 2rem;
    top: 100%;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;

    transform: perspective(2em) rotateX(40deg) scale(1, 0.41);
    filter: blur(3em);
    
}

.about-container .b3 .link-neon:hover::before{
    opacity: 1;
    
}

.about-container .b4{
    place-items: center;
    grid-area: d;
}

.about-container .skill-list{
    display: flex;
    list-style-type: none;
    flex-wrap: wrap;
    align-content: center;
    justify-content: space-around;
    gap: 1.5rem;
    padding: 2rem 3rem;
}

.about-container .skill-list,
.about-container .skill-list li,
.about-container .skill-list .tooltipText{
    transition: all 500ms ease-out;
}

.about-container .skill-list li{
    padding: 0.5rem;
    border-radius: 20px;
    background: radial-gradient(rgb(255, 255, 255), rgb(141, 137, 137) );
    cursor: pointer;
    position: relative;
    
}

.about-container .skill-list li::after,
.about-container .skill-list li::before{
    content: attr(tooltip-data);
    position: absolute;
    background-color: black;
    padding: 0.2rem;
    left: 50%;
    transform: translateX(-50%) ;
    font-size: 1.5rem;
    transition: all 500ms ease;
    transform-origin: bottom center;
    border: solid 1px black;
    border-radius: 30px;
    opacity: 0;
}




.about-container .skill-list li:hover::after,
.about-container .skill-list li:hover::before{
    opacity: 1;
    transform: translate(-50%, -120%) scale(1);
    
}

.about-container .skill-list li:hover{
    background: radial-gradient(rgb(255, 255, 255), rgb(0, 0, 0) );
}


@media (max-width: 1100px){
    .nav-list{
        gap: 1rem;
    }

    .about-container{
        height: 100vh;
        width: 95vw;
        margin: 15px auto;
    
        display: grid;
        gap: 0.3rem;
    
        grid-template-areas:
        "a a"
        "b b"
        "d d";
        align-content: start; 
        justify-content: center;
        
    }

    .about-container .b1 img{
        height: 500px;
        width: 500px;
        border-radius: 50%;
        padding: 0.1em;
        margin: 0.1em;
    }

    .about-container .b2{
        grid-area: b;
        place-items: center;
    }
    .about-container .b2 h1{
        text-align: center;
        
    }
    .about-container .b2 h2{
        text-align: center;
        
    }

    .about-container .b3{
        justify-content: center;
    }

}

</style>
