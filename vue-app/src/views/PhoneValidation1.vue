<template>
    <!-- login box -->
    <div id='bg' class="w-screen h-screen">
        <form @submit.prevent="submit" id="login-box" class="rounded-lg">
            <div id="mask'"></div>
            <h2 class="text-white mt-12">帳號註冊</h2>
            <!-- input box -->
            <div id="form_area">
                <div class="inp_group mt-12">
                    <input v-model = 'phone' required>
                    <span class="">手機號碼</span>
                    <i></i>
                </div>
                <div class="inp_group mt-2">
                    <input v-model = 'code' required>
                    <span>認證碼</span>
                    <i style="width: 60%;"></i>
                    <div id='btn_send_code' class="btn" @click="sendCode">發送認證碼</div>
                </div>
                <div class="bg-white rounded flex justify-center items-center btn py-1 mb-2 mt-6">送出</div>
                <hr class="mt-5">
                <div class="bg-white rounded flex justify-center items-center btn py-1 mt-5">查詢帳號</div>
                <div class="bg-white rounded flex justify-center items-center btn py-1 mt-3">找回密碼</div>
            </div>
        </form>
    </div>
</template>
<script setup>
import axios from 'axios'
import Swal from 'sweetalert2'

const phone = ref()
const code = ref()
const apiUrl = ref()
const apiParam = ref()
const apiUrlPrefix = 'http://170.187.229.132:9090/api/bonus-register/'

const sendCode = async() => {
    if (phone.value != ''){     // 驗證手機號碼不可為空值
        const formData = ref({
            phone: phone.value,
        })
        apiParam.value = '?action=sendCode'
        apiUrl.value = apiUrlPrefix + "phone.php" + apiParam.value
    }else{
        // please input phone
    }
}

const submit = async() => {
    const formData = ref({
        phone: phone.value,
    })

    apiUrl.value = '/api/bonus'
    const { data: { success, msg } } = await axios.post(
        apiUrl.value,
        formData.value
    )

    console.log(success);

    if (success){
        emits('closeDialog')
        Swal.fire({
            title: `建立紀錄成功`,
            icon: 'success',
            showConfirmButton: false,
            showCancelButton: false,
            timer: 2000,
        }).then(() => {
            // emits('handleUpdateProfiles')
        })
        // alert('success')
    }
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
    width: 350px;
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

#form_area{
    width: 80%;
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

#btn_send_code{
    padding: 2px 10px 2px 10px;
    border-radius: 5px;
    position: absolute;
    right: 0px;
    top: 20px;
}

.btn{
    display: flex;
    cursor: pointer;
    background-color: #fff;
}
</style>