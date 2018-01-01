<template>
    <v-container fill-height>
        <v-layout column align-center justify-center fill-height>
        <v-avatar size="15rem" style="margin:1rem auto;display:block;">
          <img :src="profile.picture" class="mb-5">
        </v-avatar>
          <blockquote>
            &#8220;First, solve the problem. Then, write the code.&#8221;
            <footer>
              <small>
                <em>&mdash;{{ profile.nickname }} {{ profile.email }}</em>
              </small>
            </footer>
          </blockquote>

          <div>
            {{ profile }}
          </div>
        </v-layout>
    </v-container>
</template>

<script>
export default {
  props: ['auth'],
  data () {
    if (this.auth.userProfile) {
      this.$nextTick(() => {
        this.profile = this.auth.userProfile
      })
    } else {
      this.auth.getProfile((err, profile) => {
        if (err) return console.log(err)
        this.profile = profile
      })
    }
    return {
      profile: {}
    }
  },

  created(){
    // this.$vuetify.theme.primary = '#311b92';
  }
}
</script>

<style scoped>

</style>
