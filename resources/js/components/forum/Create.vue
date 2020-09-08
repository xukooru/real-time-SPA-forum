<template>

    <v-layout row>
        <v-container center>
            <v-flex xs12 sm8 offset-sm2>
                <v-card>
                    <v-toolbar color="grey" light>
                        <v-toolbar-title>Create New Question</v-toolbar-title>
                    </v-toolbar>
                    <v-list two-line>
                        <v-container grid-list-xl>
                            <v-form
                                @submit.prevent="create"
                            >
                                <v-text-field
                                    label="Title"
                                    v-model="form.title"
                                    type="text"
                                    required
                                ></v-text-field>

                                <v-select
                                    :items="categories"
                                    v-model="form.category_id"
                                    item-text="name"
                                    item-value="id"
                                    label="Category"


                                ></v-select>

                                <vue-simplemde v-model="form.body"/>

                                <v-btn
                                    color="success"
                                    type="submit"
                                >
                                    Create
                                </v-btn>


                            </v-form>
                        </v-container>
                    </v-list>
                </v-card>
            </v-flex>
        </v-container>
    </v-layout>

</template>

<script>
    import VueSimplemde from 'vue-simplemde'
    export default {
        components: {
            VueSimplemde
        },
        data(){
            return {
                form: {
                    title: null,
                    category_id: null,
                    body: null
                },
                categories: {},
                errors: {}
            }
        },
        created(){
            axios.get('/api/category')
            .then(res => this.categories = res.data.data)

        },
        methods:{
            create(){
                axios.post('/api/question', this.form)
                    .then(response => this.$router.push(response.data.path))
                    .catch(error => this.errors = error.response.data.error)
            }
        }
    }
</script>

<style scoped>

</style>
