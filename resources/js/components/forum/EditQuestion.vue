<template>
    <v-container fluid>

        <v-card>
            <v-toolbar
                card
                color="grey"
                light
                dense
            >
                <v-toolbar-title class="body-2">Edit Question</v-toolbar-title>
            </v-toolbar>
            <v-container>
            <v-form @submit.prevent="update">
                <v-text-field
                    label="Title"
                    v-model="form.title"
                    type="text"
                    required
                ></v-text-field>

                <vue-simplemde v-model="form.body"/>

                <v-card-actions>
                    <v-btn fab dark small color="teal" type="submit">
                        <v-icon color="black" >save</v-icon>
                    </v-btn>
                    <v-btn fab small color="red">
                        <v-icon color="black" @click="cancel" >cancel</v-icon>
                    </v-btn>
                </v-card-actions>

            </v-form>
            </v-container>
        </v-card>
    </v-container>
</template>

<script>
    export default {
        props: ['data'],
        data(){
            return {
                form: {
                    title: null,
                    body: null
                }
            }
        },
        methods:{
            cancel(){
                EventBus.$emit('cancelEditing')
            },
            update(){
                axios.patch(`/api/question/${this.form.slug}`, this.form)
                .then(res => this.cancel())
            }
        },
        mounted() {
            this.form = this.data
        }
    }
</script>

<style scoped>

</style>
