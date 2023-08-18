<template>
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
import Swal from 'sweetalert2'

const test = () => {
    Swal.fire({
        title: `測試成功`,
        icon: 'success',
        showConfirmButton: false,
        showCancelButton: false,
        timer: 2000,
    })
}

</script>