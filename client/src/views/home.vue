<template>
  <v-layout>
    <v-flex xs8 offset-xs2>
      <Posts />
    </v-flex>
    <!-- <v-flex xs4> -->
      <!-- <Profile /> -->
    <!-- </v-flex> -->
  </v-layout>
</template>

<script>
import Posts from '@/components/posts'
import Profile from '@/components/profile'

export default {
  components: {
    Profile,
    Posts
  }
}
</script>

<style>

</style>
