<template>
    <!-- login box -->
    <div>
        <form @submit.prevent="submit">
            <h2>Login</h2>
            <!-- input box -->
            <div>
                <!-- icon -->
                <v-icon icon="fa:fas fa-searc"></v-icon>
                <v-text-field
                    variant="outlined"
                    label="手機號碼"
                ></v-text-field>
                <div class="flex">
                    <v-text-field
                        variant="outlined"
                        label="認證號碼"
                    ></v-text-field>
                    <v-btn>發送驗證碼</v-btn>
                </div>
                <v-text-field
                    variant="outlined"
                    label="遊戲帳戶"
                ></v-text-field>
                <v-text-field
                    variant="outlined"
                    label="遊戲密碼"
                ></v-text-field>
                <v-text-field
                    variant="outlined"
                    label="確認密碼"
                ></v-text-field>
                <v-text-field
                    variant="outlined"
                    label="出生年月日"
                ></v-text-field>
                <v-text-field
                    variant="outlined"
                    label="驗證碼"
                ></v-text-field>
            </div>
        </form>
    </div>
</template>
<script setup>
const submit = () => {

}
</script>