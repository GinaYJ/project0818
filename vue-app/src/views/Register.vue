<template>
    <!-- login box -->
    <div>
        <form @submit.prevent="submit">
            <h2>Login</h2>
            <!-- input box -->
            <div>
                <!-- icon -->
                <v-icon icon="vuetify"></v-icon>
                <input type="text">
                <label>Email</label>
            </div>
        </form>
    </div>
</template>
<script setup>
const submit = () => {

}
</script>