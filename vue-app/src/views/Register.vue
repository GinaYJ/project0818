<template>
    <!-- login box -->
    <div id='bg' class="w-screen h-screen">
        <form @submit.prevent="submit" id="login-box" class="px-3 rounded-lg">
            <div class="absolute w-full h-full bg-slate-800 z-10"></div>
            <h2 class="text-white mb-5">Register</h2>
            <!-- input box -->
            <div class="">
                <div>
                    <input class="border-slate-50 border-solid rounded-lg"><label class="">手機號碼</label>
                </div>
                <div class="items-center" style="display: flex; align-items: center;">
                    <input class="border-slate-50 border-solid">
                    <label>認證碼</label>
                    <div class="border-solid rounded-sm cursor-pointer px-1 py-1" style="cursor: pointer;">發送認證碼</div>
                </div>
                <div>
                    <input class="border-slate-50 border-solid"><label>遊戲帳號</label>
                </div>
                <div>
                    <input class="border-slate-50 border-solid"><label>遊戲密碼</label>
                </div>
                <div>
                    <input class="border-slate-50 border-solid"><label>確認密碼</label>
                </div>
                <div>
                    <input class="border-slate-50 border-solid"><label>出生年月日</label>
                </div>
                <div>
                    <input class="border-slate-50 border-solid"><label>驗證碼</label>
                </div>
                <div class="bg-white rounded flex justify-center items-center btn py-1 mb-2">提交註冊</div>
                <div class="bg-white rounded flex justify-center items-center btn py-1">取消註冊</div>
            </div>
        </form>
    </div>
</template>
<script setup>
const submit = () => {

}
</script>
<style>
/* --- scroll bar hide start --- */
html {
    overflow: -moz-hidden-unscrollable;
    height: 100%;
}
body::-webkit-scrollbar {
    display: none;
}
body {
    -ms-overflow-style: none;
    height: 100%;
	width: calc(100vw + 18px);
	overflow: auto;
}
/* --- scroll bar hide end --- */
#bg{
    display: flex;
    align-items: center;
    justify-content: center;
    background: url('../assets/bg.jpg') no-repeat;
    background-size: cover;
    background-position: center;
    animation: bg-rotate 5s linear infinite;
}
#bg label{
    color: #fff;
}
/* @keyframes bg-rotate{
    100% {
        filter: hue-rotate(360deg);
    }
}  */
#login-box{
    width: 400px;
    height: 450px;
    display: flex;
    flex-direction: column;
    align-items: center;
    backdrop-filter: blur(10px);
    overflow: hidden;
    inset: 3px;
    z-index: 20;
    background: #28292d;
    
}
#login-box::before{
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 400px;
    height: 450px;
    background: linear-gradient(60deg, transparent, #45f3ff, #45f3ff);
    transform-origin: bottom right;
    animation: animate 6s linear infinite;
    z-index: -1;
}
#login-box::after{
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 400px;
    height: 450px;
    background: linear-gradient(60deg, transparent, #d9138a, #d9138a);
    transform-origin: bottom right;
    animation: animate 6s linear infinite;
    animation-delay: -3s;
    z-index: -1;
}
@keyframes animate{
    0%{
        transform: rotate(0deg);
    }
    100%{
        transform: rotate(360deg);
    }
}
.btn{
    display: flex;
    cursor: pointer;
}
</style>