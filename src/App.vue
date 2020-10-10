<template>
    <v-app>
        <v-main>
            <v-container class="fill-height" fluid>
                <v-row align="center" justify="center">
                    <v-col id="page_container" cols="12" sm="8" md="4">
                        <h1>Userscripts</h1>
                        <h3>
                            Some userscripts I've written, mainly for keystroke
                            pagination
                        </h3>
                        <v-divider />

                        <!-- Userscripts -->
                        <v-spacer />
                        <v-card
                            v-for="script in userscripts"
                            :key="script.title"
                            class="mx-auto"
                            outlined
                        >
                            <v-card-title>
                                {{ script.title }}

                                <v-spacer></v-spacer>

                                <a
                                    :href="script.gist"
                                    :title="script.title + ' - Gist'"
                                    target="_blank"
                                >
                                    <v-btn icon>
                                        <v-icon>mdi-github</v-icon>
                                    </v-btn>
                                </a>
                                <a
                                    :href="script.raw_gist"
                                    :title="script.title + ' - Userscript'"
                                >
                                    <v-btn icon>
                                        <v-icon>mdi-script-text-outline</v-icon>
                                    </v-btn>
                                </a>
                            </v-card-title>
                            <v-card-subtitle>
                                {{ script.description }}
                            </v-card-subtitle>
                            <v-card-text>
                                <v-list dense flat>
                                    <v-list-item
                                        v-for="(note, i) in script.notes"
                                        :key="i"
                                    >
                                        {{ note }}
                                    </v-list-item>
                                </v-list>
                            </v-card-text>
                        </v-card>
                    </v-col>
                </v-row>

                <v-speed-dial
                    v-model="fab"
                    fixed
                    right
                    bottom
                    direction="top"
                    transition="slide-y-reverse-transition"
                >
                    <template v-slot:activator>
                        <v-btn v-model="fab" dark fab>
                            <v-icon v-if="fab">mdi-close</v-icon>
                            <v-icon v-else>mdi-menu</v-icon>
                        </v-btn>
                    </template>
                    <v-btn fab dark small @click="toggle_dark_mode">
                        <v-icon>mdi-theme-light-dark</v-icon>
                    </v-btn>
                    <v-btn
                        fab
                        dark
                        small
                        color="teal darken-4"
                        @click="help_dialog = true"
                    >
                        <v-btn icon>
                            <v-icon>mdi-help-circle-outline</v-icon>
                        </v-btn>
                    </v-btn>
                    <v-btn
                        fab
                        dark
                        small
                        color="teal darken-4"
                        @click="info_dialog = true"
                    >
                        <v-btn icon>
                            <v-icon>mdi-information-outline</v-icon>
                        </v-btn>
                    </v-btn>
                </v-speed-dial>
            </v-container>
            <v-dialog v-model="help_dialog" width="500">
                <v-card>
                    <v-card-title class="">
                        Help
                        <v-spacer />
                        <v-btn icon @click="help_dialog = false">
                            <v-icon>mdi-close</v-icon>
                        </v-btn>
                    </v-card-title>

                    <v-card-text>
                        <v-spacer />
                        <v-expansion-panels>
                            <v-expansion-panel>
                                <v-expansion-panel-header>
                                    What's a Userscript?
                                </v-expansion-panel-header>
                                <v-expansion-panel-content>
                                    A userscript (or user script) is a program,
                                    usually written in JavaScript, for modifying
                                    web pages to augment browsing. On desktop
                                    browsers such as Firefox, they are enabled
                                    by use of a userscript manager browser
                                    extension such as Greasemonkey.

                                    <v-divider />

                                    <span class="float-right">
                                        Source:
                                        <a
                                            href="https://wikipedia.org/wiki/Userscript"
                                            title="Userscript on Wikipedia"
                                            target="_blank"
                                        >
                                            Wikipedia
                                        </a>
                                    </span>
                                </v-expansion-panel-content>
                            </v-expansion-panel>
                            <v-expansion-panel>
                                <v-expansion-panel-header>
                                    What's a Userscript Manager?
                                </v-expansion-panel-header>
                                <v-expansion-panel-content>
                                    A userscript manager is a type of browser
                                    extension and augmented browsing technology
                                    that provides a user interface to manage
                                    userscripts. The main purpose of a
                                    userscript manager is to execute scripts on
                                    webpages as they are loaded.

                                    <v-divider />

                                    <span class="float-right">
                                        Source:
                                        <a
                                            href="https://wikipedia.org/wiki/Userscript_manager"
                                            title="Userscript on Wikipedia"
                                            target="_blank"
                                        >
                                            Wikipedia
                                        </a>
                                    </span>
                                </v-expansion-panel-content>
                            </v-expansion-panel>
                            <v-expansion-panel>
                                <v-expansion-panel-header>
                                    What's the Most Popular Userscript Manager?
                                </v-expansion-panel-header>
                                <v-expansion-panel-content>
                                    The most popular userscript manager is
                                    called
                                    <a
                                        href="https://tampermonkey.net"
                                        title="Tampermonkey website"
                                        target="_blank"
                                    >
                                        Tampermonkey</a
                                    >. Extensions for
                                    <a
                                        href="https://addons.mozilla.org/en-US/firefox/addon/tampermonkey/"
                                        title="Tampermonkey for Firefox"
                                        target="_blank"
                                    >
                                        Firefox</a
                                    >,
                                    <a
                                        href="https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo"
                                        title="Tampermonkey for Chrome"
                                        target="_blank"
                                    >
                                        Chrome</a
                                    >, and
                                    <a
                                        href="https://apps.apple.com/us/app/tampermonkey/id1482490089"
                                        title="Tampermonkey for Safari"
                                        target="_blank"
                                    >
                                        Safari</a
                                    >
                                    are available.
                                    <small>
                                        <i>
                                            Note: While the Firefox and Chrome
                                            extensions are free, the Safari
                                            extension is $1.99.
                                        </i>
                                    </small>
                                </v-expansion-panel-content>
                            </v-expansion-panel>
                            <v-expansion-panel>
                                <v-expansion-panel-header>
                                    How to Import a Userscript into a Userscript
                                    Manager?
                                </v-expansion-panel-header>
                                <v-expansion-panel-content>
                                    On this site, simply click the
                                    <v-icon>mdi-script-text-outline</v-icon>
                                    icon and a new tab should open with your
                                    userscript manager and the script loaded.
                                </v-expansion-panel-content>
                            </v-expansion-panel>
                            <v-expansion-panel>
                                <v-expansion-panel-header>
                                    How Can I Configure My Userscript Links to
                                    Open Automatically?
                                </v-expansion-panel-header>
                                <v-expansion-panel-content>
                                    Make sure your raw userscript URL ends in
                                    <code>.user.js</code>. For example, the raw
                                    URL for the Canvas LMS userscript is
                                    <a
                                        href="https://gist.github.com/hkamran80/8f0778b0f5379305674742682cb17b5e/raw/canvas_lms.user.js"
                                        title="Canvas LMS Userscript"
                                        target="_blank"
                                    >
                                        <code>
                                            https://gist.github.com/hkamran80/8f0778b0f5379305674742682cb17b5e/raw/
                                            <i>canvas_lms.user.js</i>
                                        </code> </a
                                    >.
                                </v-expansion-panel-content>
                            </v-expansion-panel>
                        </v-expansion-panels>
                    </v-card-text>
                </v-card>
            </v-dialog>
            <v-dialog v-model="info_dialog" width="500">
                <v-card>
                    <v-card-title class="">
                        Information
                        <v-spacer />
                        <v-btn icon @click="info_dialog = false">
                            <v-icon>mdi-close</v-icon>
                        </v-btn>
                    </v-card-title>

                    <v-card-text>
                        This site hosts the userscripts created by
                        <a
                            href="https://hkamran.com"
                            title="H. Kamran"
                            target="_blank"
                        >
                            H. Kamran</a
                        >. This was created using
                        <a
                            href="https://vuejs.org"
                            title="Vue.js"
                            target="_blank"
                            >Vue.js</a
                        >
                        and
                        <a
                            href="https://vuetifyjs.com"
                            title="Vuetify"
                            target="_blank"
                            >Vuetify</a
                        >, and is
                        <a
                            href="https://github.com/hkamran80/userscripts_site"
                            title="Userscripts site GitHub repository"
                            target="_blank"
                            >open-source</a
                        >.
                    </v-card-text>
                </v-card>
            </v-dialog>
        </v-main>
    </v-app>
</template>

<script>
export default {
    name: "App",
    data: function() {
        return {
            fab: false,
            help_dialog: false,
            info_dialog: false,
            
        };
    },
    methods: {
        toggle_dark_mode: function() {
            this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
            localStorage.setItem(
                "dark_theme",
                this.$vuetify.theme.dark.toString()
            );
        }
    },
    mounted() {
        const theme = localStorage.getItem("dark_theme");
        if (theme) {
            // deepcode ignore UseStrictEquality: Loaded as a String, not a Boolean
            if (theme == "true") {
                this.$vuetify.theme.dark = true;
            } else {
                this.$vuetify.theme.dark = false;
            }
        } else if (
            window.matchMedia &&
            window.matchMedia("(prefers-color-scheme: dark)").matches
        ) {
            this.$vuetify.theme.dark = true;
            localStorage.setItem(
                "dark_theme",
                this.$vuetify.theme.dark.toString()
            );
        }
    }
};
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

#page_container {
    padding: 55px 0;
}

@media only screen and (orientation: portrait) and (max-width: 768px) {
    #page_container {
        padding: 35px 36px;
    }
}

a {
    text-decoration: none;
}

div.v-card__title i.v-icon {
    margin: 0 5px;
}

div.v-card.status-cancelled {
    border-left: 8px solid rgb(255, 0, 0) !important;
}
hr {
    margin: 10px 0;
}
h3 i.v-icon {
    margin: 7.5px;
}
h3 i.v-icon:nth-of-type(1) {
    margin-left: 0;
}
div.v-card {
    margin: 12.5px auto;
}
</style>
