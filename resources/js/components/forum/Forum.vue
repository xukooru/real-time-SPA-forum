<template>
    <v-container fluid grid-list-md>
        <v-layout row wrap>
            <v-flex xs8>
                <question
                    v-for="question in questions"
                    :key="questions.path"
                    :data=question
                >
                </question>
            </v-flex>
            sidebar
        </v-layout>

    </v-container>
</template>

<script>
    import Question from "./Question";
    export default {
        data(){
          return {
              questions: {}
          }
        },
        components: {Question},
        created() {
            axios.get('/api/question')
            .then(res => this.questions = res.data.data)
            .catch(error => console.log(error.response.data))
        }
    }
</script>

<style scoped>

</style>
