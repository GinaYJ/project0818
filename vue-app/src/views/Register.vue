<template>
    <!-- login box -->
    <div id='bg' class="w-screen h-screen">
        <form @submit.prevent="submit" id="login-box" class="rounded-lg">
            <div id="mask"></div>
            <h2 class="text-white mt-5">帳號註冊</h2>
            <!-- input box -->
            <div id="form_area">
                <div class="inp_group">
                    <input required>
                    <span class="">手機號碼</span>
                    <i></i>
                </div>
                <div class="inp_group">
                    <input required>
                    <span>認證碼</span>
                    <i></i>
                    <!-- <div class="border-solid rounded-sm cursor-pointer px-1 py-1" style="cursor: pointer;">發送認證碼</div> -->
                </div>
                <div class="inp_group">
                    <input required>
                    <span>遊戲帳號</span>
                    <i></i>
                </div>
                <div class="inp_group">
                    <input required>
                    <span>遊戲密碼</span>
                    <i></i>
                </div>
                <div class="inp_group">
                    <input required>
                    <span>確認密碼</span>
                    <i></i>
                </div>
                <div class="inp_group">
                    <input required>
                    <span>出生年月日</span>
                    <i></i>
                </div>
                <div class="inp_group">
                    <input required>
                    <span>驗證碼</span>
                    <i></i>
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

@keyframes bg-rotate{
    100% {
        filter: hue-rotate(360deg);
    }
} 
#mask{
    width: calc(100% - 6px);
    height: calc(100% - 6px);
    position: absolute;
    top: 3px;
    left: 3px;
    border-radius: 8px;
    background-color: black;
    z-index: 1;
}

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

h2, #form_area{
    z-index: 20;
}

.inp_group{
    /* margin-top: 0.5em; */
    position: relative;
}

.inp_group input{
    position: relative;
    width: 100%;
    padding: 20px 10px 10px;
    background-color: transparent;
    border: none;
    outline: none;
    box-shadow: none;
    color: #fff;
    font-size: 1em;
    letter-spacing: 0.05em;
    transition: 0.5s;
}

.inp_group span{
    position: absolute;
    left: 0;
    padding: 20px 10px 10px;
    font-size: 1em;
    color: #fff;
    pointer-events: none;
    letter-spacing: 0.05em;
    transition: 0.5s;
}

.inp_group input:valid ~span,
.inp_group input:focus ~span{
    font-size: 0.75em;
    transform: translate(-10px, -15px);
}

.inp_group i{
    position: absolute;
    left: 0;
    bottom: 0;
    background-color: #fff;
    width: 100%;
    height: 2px;
}

.btn{
    display: flex;
    cursor: pointer;
}
</style>