<template>
    <!-- login box -->
    <div>
        <form @submit.prevent="submit">
            <h2>Login</h2>
            <!-- input box -->
            <div>
                <div>
                    <input><label>手機號碼</label>
                </div>
                <div>
                    <input><label>認證碼</label><div>發送認證碼</div>
                </div>
                <input><label>認證碼</label><div>發送認證碼</div>
                <input><label>遊戲帳號</label>
                <input><label>遊戲密碼</label>
                <input><label>確認密碼</label>
                <input><label>出生年月日</label>
                <input><label>驗證碼</label>
                
            </div>
        </form>
    </div>
</template>
<script setup>
const submit = () => {

}
</script>