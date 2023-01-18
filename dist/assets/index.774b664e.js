import{r as c,o as l,c as _,a as b,b as r,d as u,w as h,e as m,f as p,g,h as x,i as w}from"./vendor.6a3c6d1d.js";const y=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))o(a);new MutationObserver(a=>{for(const e of a)if(e.type==="childList")for(const n of e.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function s(a){const e={};return a.integrity&&(e.integrity=a.integrity),a.referrerpolicy&&(e.referrerPolicy=a.referrerpolicy),a.crossorigin==="use-credentials"?e.credentials="include":a.crossorigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function o(a){if(a.ep)return;a.ep=!0;const e=s(a);fetch(a.href,e)}};y();var i=(d,t)=>{const s=d.__vccOpts||d;for(const[o,a]of t)s[o]=a;return s};const $={computed:{},methods:{}};function L(d,t,s,o,a,e){const n=c("router-view");return l(),_(n)}var k=i($,[["render",L]]);const N={},I={class:"hero min-h-screen",style:{"background-image":"url(https://placeimg.com/1000/800/arch)"}},S=r("div",{class:"hero-overlay bg-opacity-60"},null,-1),B={class:"hero-content text-center text-neutral-content"},P={class:"max-w-md"},M=r("h1",{class:"mb-5 text-5xl font-bold"},"Hello there",-1),O=r("p",{class:"mb-5"},"Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.",-1),A=m(" Login ");function V(d,t){const s=c("router-link");return l(),b("div",I,[S,r("div",B,[r("div",P,[M,O,u(s,{to:"login",class:"btn btn-primary"},{default:h(()=>[A]),_:1})])])])}var v=i(N,[["render",V]]);const j={},q={class:"navbar navbar-bg text-base-200"},C=p('<div class="navbar-start" data-v-f5b9bd0e><div class="dropdown" data-v-f5b9bd0e><label tabindex="0" class="btn btn-ghost lg:hidden" data-v-f5b9bd0e><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-v-f5b9bd0e><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" data-v-f5b9bd0e></path></svg></label><ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow rounded-box w-52" data-v-f5b9bd0e><li data-v-f5b9bd0e><a data-v-f5b9bd0e>Item 1</a></li><li tabindex="0" data-v-f5b9bd0e><a class="justify-between" data-v-f5b9bd0e> Parent <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" data-v-f5b9bd0e><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" data-v-f5b9bd0e></path></svg></a><ul class="p-2" data-v-f5b9bd0e><li data-v-f5b9bd0e><a data-v-f5b9bd0e>Submenu 1</a></li><li data-v-f5b9bd0e><a data-v-f5b9bd0e>Submenu 2</a></li></ul></li><li data-v-f5b9bd0e><a data-v-f5b9bd0e>Item 3</a></li></ul></div><a class="btn btn-ghost normal-case text-xl" data-v-f5b9bd0e>Salad Service</a></div><div class="navbar-center hidden lg:flex" data-v-f5b9bd0e><ul class="menu menu-horizontal px-1" data-v-f5b9bd0e><li data-v-f5b9bd0e><a data-v-f5b9bd0e>Item 1</a></li><li tabindex="0" data-v-f5b9bd0e><a data-v-f5b9bd0e> Parent <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" data-v-f5b9bd0e><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" data-v-f5b9bd0e></path></svg></a><ul class="p-2" data-v-f5b9bd0e><li data-v-f5b9bd0e><a data-v-f5b9bd0e>Submenu 1</a></li><li data-v-f5b9bd0e><a data-v-f5b9bd0e>Submenu 2</a></li></ul></li><li data-v-f5b9bd0e><a data-v-f5b9bd0e>Item 3</a></li></ul></div><div class="navbar-end" data-v-f5b9bd0e><a class="btn" data-v-f5b9bd0e>Get started</a></div>',3),E=[C];function H(d,t){return l(),b("div",q,E)}var T=i(j,[["render",H],["__scopeId","data-v-f5b9bd0e"]]);const Z={components:{Navbar:T},computed:{username(){return this.$route.params.username}},methods:{goToDashboard(){isAuthenticated?this.$router.push("/dashboard"):this.$router.push("/login")}}},z={class:"hero min-h-screen hero-background"},D={class:"hero-overlay bg-opacity-30"},F=p('<div class="hero-content text-center text-neutral-content" data-v-4a2461ba><div class="card w-96 glass" data-v-4a2461ba><div class="card-body" data-v-4a2461ba><h2 class="card-title" data-v-4a2461ba>Login</h2><p data-v-4a2461ba>Please login to continue.</p><div class="form-control w-full max-w-xs" data-v-4a2461ba><label class="label" data-v-4a2461ba><span class="label-text" data-v-4a2461ba>Email</span><span class="label-text-alt" data-v-4a2461ba></span></label><input type="text" placeholder="example@domain.com" class="input input-bordered w-full max-w-xs text-black" data-v-4a2461ba></div><div class="form-control w-full max-w-xs" data-v-4a2461ba><label class="label" data-v-4a2461ba><span class="label-text" data-v-4a2461ba>Password</span><span class="label-text-alt" data-v-4a2461ba></span></label><input type="password" placeholder="*******" class="input input-bordered w-full max-w-xs text-black" data-v-4a2461ba></div><div class="card-actions justify-center" data-v-4a2461ba><button class="btn btn-primary" data-v-4a2461ba>Login!</button></div></div></div></div>',1);function G(d,t,s,o,a,e){const n=c("Navbar");return l(),b("div",z,[r("div",D,[u(n)]),F])}var K=i(Z,[["render",G],["__scopeId","data-v-4a2461ba"]]);const Q=[{path:"/",component:v},{path:"/landing",component:v},{path:"/login",component:K}],R=g({history:x(),routes:Q}),f=w(k);f.use(R);f.mount("#app");
