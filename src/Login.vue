<template>
  <div class="hero min-h-screen hero-background">
    <div class="hero-overlay bg-opacity-30">
      <Navbar></Navbar>
    </div>
    <div class="hero-content text-center text-neutral-content">
      <div class="card w-96 glass">

        <div class="card-body">
          <h2 class="card-title">Login</h2>
          <p>Please login to continue.</p>
          <div class="form-control w-full max-w-xs">
            <label class="label">
              <span class="label-text">Email</span>
              <span class="label-text-alt"></span>
            </label>

            <input type="text" placeholder="example@domain.com"
              class="input input-bordered w-full max-w-xs text-black" />
          </div>
          <div class="form-control w-full max-w-xs">
            <label class="label">
              <span class="label-text">Password</span>
              <span class="label-text-alt"></span>
            </label>

            <input type="password" placeholder="*******" class="input input-bordered w-full max-w-xs text-black" />
          </div>
          <div class="card-actions justify-center">
            <button class="btn btn-primary">Login!</button>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>
<script>
import Navbar from './corecomponents/Navbar.vue'
export default {
  components:{
    Navbar
  },
  computed: {
    username() {
      // We will see what `params` is shortly
      return this.$route.params.username
    },
  },
  methods: {
    goToDashboard() {
      if (isAuthenticated) {
        this.$router.push('/dashboard')
      } else {
        this.$router.push('/login')
      }
    },
  },
}
</script>
<style scoped>
.hero-background {
  background: rgb(146, 180, 255);
  background: linear-gradient(79deg, rgba(146, 180, 255, 1) 0%, rgba(0, 22, 148, 1) 35%, rgba(255, 0, 243, 1) 100%);
}
</style>