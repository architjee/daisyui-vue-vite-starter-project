<template>
  <div class="hero min-h-screen" style="background: rgb(157,177,173); background: linear-gradient(31deg, rgba(157,177,173,1) 0%, rgba(0,148,28,1) 35%, rgba(255,229,0,1) 100%);">
    <div class="hero-overlay bg-opacity-30"></div>
    <div class="hero-content text-center text-neutral-content">
      <!-- <div class="max-w-md">
      <h1 class="mb-5 text-5xl font-bold">Hello there</h1>
      <p class="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <button class="btn btn-primary">Get Started</button>
    </div> -->
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

            <input type="password" placeholder="*******"
              class="input input-bordered w-full max-w-xs text-black" />
          </div>
          <div class="card-actions justify-center">
            <button class="btn btn-primary">Login!</button>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>
