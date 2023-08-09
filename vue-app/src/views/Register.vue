<template>
    <!-- login box -->
    <div id='bg' class="w-screen h-screen justify-center" style="display: flex; align-items: center;">
        <form @submit.prevent="submit" class="px-3 items-center justify-center border-white border-solid rounded-lg" 
            style="width: 400px; height: 400px; display: flex; flex-direction: column; align-items: center; backdrop-filter: blur(10px);">
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
                <div class="bg-white rounded-md flex justify-center items-center cursor-pointer btn">提交註冊</div>
                <div class="bg-white rounded-md flex justify-center items-center cursor-pointer">取消註冊</div>
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
    background: url('../assets/bg.jpg') no-repeat;
    background-size: cover;
    background-position: center;
    animation: bg-rotate 5s linear infinite;
}
#bg label{
    color: #fff;
}
@keyframes bg-rotate{
    100% {
        filter: hue-rotate(360deg);
    }
} 
.btn{
    display: flex;
}
</style>