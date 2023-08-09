<template>
    <!-- login box -->
    <div class="w-screen h-screen">
        <form @submit.prevent="submit" class="px-3 justify-center" style="display: flex; flex-direction: column;">
            <h2>Login</h2>
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
                <div>提交註冊</div>
                <div>取消註冊</div>
            </div>
        </form>
    </div>
</template>
<script setup>
const submit = () => {

}
</script>