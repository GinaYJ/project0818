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
                    label="Email"
                ></v-text-field>
                <label>Email</label>
            </div>
        </form>
    </div>
</template>
<script setup>
const submit = () => {

}
</script>