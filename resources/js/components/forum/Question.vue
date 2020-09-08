<template>

    <v-card class="mb-3">

        <v-card-title primary-title>
            <div>
                <h3 class="headline mb-0">
                    <router-link
                        :to="data.path"
                        style="text-decoration: none;"
                    >
                        {{data.title}}
                    </router-link>

                </h3>
                <div class="dark--text">
                    {{data.user}} |
                <span class="grey--text">
                    {{data.created_at}}
                </span>
                </div>
            </div>
        </v-card-title>

        <v-card-text>
            {{data.body}}
        </v-card-text>
        <v-divider light></v-divider>
    </v-card >


</template>

<script>
    export default {
        props: ['data']
    }
</script>

<style scoped>

</style>
