<template>
    <!-- <h1>{{id}}</h1> -->
    <br>
    <ToDo/>
    
    
</template>

<script setup>

import {computed, ref} from 'vue'

import ToDo from '../components/ToDo.vue'

const todoRef = ref(false)

const props = defineProps({
  id:{
    type:String,
    default: "id99",
    required: true,
  }
});


</script>

<style scoped>
h1{
    font-size: 2rem;
    color: white;
}
</style>