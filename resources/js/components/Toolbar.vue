<template>
    <v-card
        color="grey lighten-4"
        flat

        tile
    >
        <v-toolbar dense>


            <v-toolbar-title>Nova Forum</v-toolbar-title>

            <v-spacer></v-spacer>

            <v-btn icon>
                <v-icon>search</v-icon>
            </v-btn>

            <div class="hidden-sm-and-down">
                <router-link
                    v-for="item in items"
                    :key="item.title"
                    :to="item.to"
                    style="text-decoration: none;"
                    v-if="item.show"
                >
                    <v-btn flat>{{item.title}}</v-btn>
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
        data(){
            return {
                items: [
                    {title : 'Forum', to: '/forum', show: true},
                    {title : 'Ask Question', to: '/ask', show: User.loggedIn()},
                    {title : 'Category', to: '/category', show: User.loggedIn()},
                    {title : 'Login', to: '/login', show: !User.loggedIn()},
                    {title : 'Logout', to: '/logout', show: User.loggedIn()},
                ]
            }
        },
        created() {
            EventBus.$on('logout', () => {
                User.logout()
            })
        }

    }
</script>

<style scoped>

</style>
