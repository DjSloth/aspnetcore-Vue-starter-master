<template>
    <v-app :dark="dark">
        <v-navigation-drawer fixed
                             :mini-variant="miniVariant"
                             :clipped="clipped"
                             v-model="drawer"
                             app>
            <brand-logo size="4rem" style="margin: 2rem auto 2rem 20%;"></brand-logo>
            <v-list>
                <v-list-tile value="true"
                             v-for="(item, i) in routes"
                             :key="i"
                             exact
                             :to="item.path">
                    <v-list-tile-action>
                        <v-icon v-html="item.icon"></v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                        <v-list-tile-title v-text="item.display"></v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>

                <v-list-tile @click.stop="toggleTheme">
                    <v-list-tile-action>
                        <v-icon>devices_other</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                        <v-list-tile-title>{{ dark ? 'go light' : 'go dark' }}</v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>
                <v-list-tile @click.stop="toggleMiniVariant">
                    <v-list-tile-action>
                        <v-icon v-html="miniVariant ? 'chevron_right' : 'chevron_left'"></v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                        <v-list-tile-title>{{ miniVariant ? 'expand' : 'minimize' }}</v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>
            </v-list>
        </v-navigation-drawer>
        <v-toolbar fixed app :clipped-left="clipped">
            <v-toolbar-side-icon @click.stop="drawer = !drawer" class="ml-4"></v-toolbar-side-icon>
            <v-toolbar-title v-text="title"></v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn flat @click="toggleAuth()">
                <small class="hidden-sm-and-down">{{ !authenticated ? "log-in" : "log-out" }}</small>
                <v-icon right>fingerprint</v-icon>
            </v-btn>
        </v-toolbar>
        <v-content>
            <transition mode="out-in"
                        enter-active-class="pagein"
                        leave-active-class="pageout">
                <router-view class="router-view"
                             :auth="auth"
                             :authenticated="authenticated"
                             :admin="admin">
                </router-view>
            </transition>
        </v-content>
    </v-app>
</template>

<script>
    import Vue from 'vue'

    import BrandLogo from './global/brand-logo'
    import AuthService from '../services/auth-service'
    const auth = new AuthService()
    const { login, logout, authenticated, admin, authNotifier } = auth

    import { routes } from '../routes'

    export default {
        data() {

            authNotifier.on('authChange', authState => {
                this.authenticated = authState.authenticated
                this.admin = authState.admin
                let redirectRout = this.authenticated ? '/profile' : '/'

                this.$router.push({ path: redirectRout })
            })

            return {
                dark: localStorage.getItem('dark') && eval(localStorage.getItem('dark')) || false,
                clipped: false,
                drawer: false,
                fixed: true,
                miniVariant: localStorage.getItem('mini') && eval(localStorage.getItem('mini')) || false,
                title: 'SOME-DOMAIN.com',
                routes: routes.filter(route => route.display !== undefined && route.display !== ""),
                auth,
                authenticated,
                admin
            }

        },

        components: {
            'brand-logo': BrandLogo
        },

        methods: {
            toggleAuth() {
                return !this.authenticated ? login() : logout();
            },
            toggleTheme() {
                this.dark = !this.dark;
                localStorage.setItem('dark', this.dark);
            },
            toggleMiniVariant() {
                this.miniVariant = !this.miniVariant;
                localStorage.setItem('mini', this.miniVariant);
            }
        }
    }
</script>
