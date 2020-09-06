<template>

    <v-layout row>
        <v-container center>
            <v-flex xs12 sm6 offset-sm3>
            <v-card>
                <v-toolbar color="indigo" dark>

                    <v-toolbar-title>Login</v-toolbar-title>

                </v-toolbar>
                <v-list two-line>
                    <v-container grid-list-xl>
                        <v-form
                            @submit.prevent="login"

                        >

                            <v-text-field
                                v-model="form.email"
                                label="E-mail"
                                type="email"
                                required
                            ></v-text-field>

                            <v-text-field
                                v-model="form.password"
                                label="Password"
                                type="password"
                                required
                            ></v-text-field>


                            <v-btn

                                color="success"
                                type="submit"

                            >
                                Login
                            </v-btn>

                            <router-link to="/signup" style="text-decoration: none;">
                                <v-btn color="info">Sign Up</v-btn>
                            </router-link>

                        </v-form>
                    </v-container>
                </v-list>
            </v-card>
        </v-flex>
        </v-container>
    </v-layout>

</template>

<script>
    export default {
        data(){
            return {
                form:{
                    email: null,
                    password: null
                }
            }
        },
        created(){
            if(User.loggedIn()){
                this.$router.push({name: 'forum'})
            }
        },
        methods:{
            login(){
                User.login(this.form)

            }
        }
    }
</script>

<style scoped>

</style>
