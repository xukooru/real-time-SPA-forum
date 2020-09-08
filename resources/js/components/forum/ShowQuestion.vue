<template>

    <v-card>
        <v-container fluid>
            <v-card-title primary-title>
                <div>
                    <div class="headline">{{data.title}}</div>
                    <div class="dark--text">
                        {{data.user}} |
                        <span class="grey--text">
                            {{data.created_at}}
                        </span>
                    </div>

                </div>
                <v-spacer></v-spacer>
                <v-btn round outline color="teal" dark>
                    5 Replies
                </v-btn>
            </v-card-title>
            <v-divider light></v-divider>

            <v-card-text v-html="body"></v-card-text>

            <v-card-actions v-if="own">

                <v-btn fab dark small color="teal">
                    <v-icon color="black" @click="edit" >edit</v-icon>
                </v-btn>

                <v-btn fab dark small color="red">
                    <v-icon color="black" @click="destroy" >delete</v-icon>
                </v-btn>

            </v-card-actions>

        </v-container>
    </v-card>
</template>

<script>

    export default {
        props: ['data'],
        data(){
            return {
                own: User.own(this.data.user_id)
            }
        },
        computed: {
            body(){
                return md.parse(this.data.body)
            }
        },
        methods:{
            destroy(){
                axios.delete(`/api/question/${this.data.slug}`)
                .then(res => this.$router.push('/forum'))
                .catch(error => console.log(error.response.data))
            },
            edit(){
                EventBus.$emit('startEditing')
            }
        }

    }
</script>

<style scoped>

</style>
