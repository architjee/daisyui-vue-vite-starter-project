<template>
    <router-view>

    </router-view>
    <div class="hero min-h-screen" style="background-image: url(https://placeimg.com/1000/800/nature);">
        <div class="hero-overlay bg-opacity-60"></div>
        <div class="hero-content text-center text-neutral-content">
            <div class="max-w-md">
                <h1 class="mb-5 text-5xl font-bold">Veggies</h1>
                <p class="mb-5">Service delivering salads and consumables directly to your home/work. Choose a healthy
                    lifestyle.</p>
                        
                        <p>

                            <router-link to="/login" class="btn btn-primary">Go to Login</router-link>
                        </p>
            </div>
        </div>
    </div>
</template>