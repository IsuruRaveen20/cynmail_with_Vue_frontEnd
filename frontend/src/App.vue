<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
    <header class="p-4 mb-10 bg-indigo-600">
      <div class="max-w-5xl m-auto">
        <div class="text-x1 font-bold text-white">
          <RouterLink class="px-4 py-2 mr-4" to="/">Home</RouterLink>
          <RouterLink class="px-4 py-2 mr-4" to="/contacts">Contacts</RouterLink>
          <RouterLink class="px-4 py-2 mr-4" to="/">Contact Groups</RouterLink>
        </div>
      </div>
    </header>
  <main class="max-w-7xl mx-auto min-h-screen">
    <RouterView />
  </main>
</template>
