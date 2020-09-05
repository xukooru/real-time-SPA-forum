<template>
    <v-card
        color="grey lighten-4"
        flat
        height="200px"
        tile
    >
        <v-toolbar dense>


            <v-toolbar-title>Nova Forum</v-toolbar-title>

            <v-spacer></v-spacer>

            <v-btn icon>
                <v-icon>search</v-icon>
            </v-btn>

            <div class="hidden-sm-and-down">
                <router-link to="/">
                    <v-btn flat>Forum</v-btn>
                </router-link>

                <v-btn flat>Ask Question</v-btn>
                <v-btn flat>Category</v-btn>
                <router-link to="/login">
                    <v-btn flat>Login</v-btn>
                </router-link>

            </div>



            <v-btn icon>
                <v-icon>favorite</v-icon>
            </v-btn>

            <v-btn icon>
                <v-icon>more_vert</v-icon>
            </v-btn>
        </v-toolbar>
    </v-card>
</template>
<script>
    export default {

    }
</script>

<style scoped>

</style>
