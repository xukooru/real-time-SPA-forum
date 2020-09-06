<template>
    <v-layout row>
        <v-container center>
            <v-flex xs12 sm6 offset-sm3>
                <v-card>
                    <v-toolbar color="indigo" dark>

                        <v-toolbar-title>Sign Up</v-toolbar-title>

                    </v-toolbar>
                    <v-list two-line>
                        <v-container grid-list-xl>
                            <v-form
                                @submit.prevent="signup"

                            >

                                <v-text-field
                                    v-model="form.name"
                                    label="Name"
                                    type="text"
                                    required
                                ></v-text-field>
                                <span class="red--text p-0 m-0" v-if="errors.name">{{errors.name[0]}}</span>

                                <v-text-field
                                    v-model="form.email"
                                    label="E-mail"
                                    type="email"
                                    required
                                ></v-text-field>
                                <span class="red--text p-0 m-0" v-if="errors.email">{{errors.email[0]}}</span>

                                <v-text-field
                                    v-model="form.password"
                                    label="Password"
                                    type="password"
                                    required
                                ></v-text-field>
                                <span class="red--text p-0 m-0" v-if="errors.password">{{errors.password[0]}}</span>

                                <v-text-field
                                    v-model="form.password_confirmation"
                                    label="Password Confirm"
                                    type="password"
                                    required
                                ></v-text-field>


                                <v-btn

                                    color="success"
                                    type="submit"

                                >
                                    Sign Up
                                </v-btn>
                                <router-link to="/login" style="text-decoration: none;">
                                    <v-btn color="info">Back to Login</v-btn>
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
                form :{
                    username: null,
                    email: null,
                    password: null,
                    password_conformation: null,
                },
                errors:{}
            }
        },
        created(){
            if(User.loggedIn()){
                this.$router.push({name: 'forum'})
            }
        },
        methods:{
            signup(){
                axios.post('/api/auth/signup', this.form)
                .then(res => {
                    User.responseAfterLog(res)
                    this.$router.push({name: 'forum'})

                })
                .catch(error => this.errors = error.response.data.errors)
            }
        }
    }
</script>

<style scoped>

</style>
