<template>
    <main>

        <div
        v-for="project in projects">
        <Card 
            :title=project.title
            :des =  project.des
            :img =  project.img
            :id = project.id
            :haveDemo = project.demo
            :learnMore = project.learnMore
            />
        </div>

        
      
    </main>
  </template>
  
<script setup>

import { ref, onMounted } from 'vue';
import Card from '../components/CardComp.vue'
import { collection, getDocs } from "firebase/firestore";
import { db } from '../firebase/index.js'

// Get all project

onMounted(async () => {
    const querySnapshot = await getDocs(collection(db, "projects"))

    let storedProject = []

    querySnapshot.forEach((doc) => {
    // console.log(doc.id, " => ", doc.data())
    const project = {
        id:doc.id,
        title: doc.data().title,
        des: doc.data().des,
        img: doc.data().img,
        demo : doc.data().demo,
        learnMore: doc.data().learnMore
    }
    storedProject.push(project)
    })

    projects.value = storedProject

})

const projects = ref([])

</script>

<style scoped>
main{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    height: fit-content;
}
</style>