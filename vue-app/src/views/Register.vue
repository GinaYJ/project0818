<template>
    <!-- login box -->
    <div>
        <form @submit.prevent="submit">
            <h2>Login</h2>
            <!-- input box -->
            <div>
                <div>
                    <input class="border-slate-50 border-solid"><label>手機號碼</label>
                </div>
                <div>
                    <input class="border-slate-50 border-solid"><label>認證碼</label><span>發送認證碼</span>
                </div>
                <div>
                    <input class="border-slate-50 border-solid"><label>認證碼</label><button>發送認證碼</button>
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
                
            </div>
        </form>
    </div>
</template>
<script setup>
const submit = () => {

}
</script>