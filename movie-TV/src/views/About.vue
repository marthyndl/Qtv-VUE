<template>
  <div class="about">
    <h1>{{$t("message.Description")}}</h1>
    <router-link
    class="fas fa-arrow-circle-right"
    :to="{ path: '/' }" 
    >
    </router-link>
    <label for="">{{$store.getters.getReadAPI.Content.full_summary}}</label>
  </div>
</template>
