<template>
    <div class="pl-wrapper pt-1">
        <div class="is-size-5 pb-2">
            <router-link to="/playlist">
                <svg style="width:24px;height:24px" viewBox="0 0 24 24">
                    <path fill="#F9233B" d="M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M10,16.5L16,12L10,7.5V16.5Z" />
                </svg>
                Listen Now
            </router-link>
        </div>
        <div class="is-size-6">Playlists</div>
        <ul>
            <li v-for="playlist in getPlaylists()" :key="playlist.title" class="is-size-5 pl-3">
                <span @click="setPlaylist(playlist.title)">
                    <router-link to="/playlist">
                        <svg style="width:24px;height:24px" viewBox="0 0 24 24" >
                            <path fill="currentColor" d="M15,6H3V8H15V6M15,10H3V12H15V10M3,16H11V14H3V16M17,6V14.18C16.69,14.07 16.35,14 16,14A3,3 0 0,0 13,17A3,3 0 0,0 16,20A3,3 0 0,0 19,17V8H22V6H17Z" />
                        </svg>
                        {{ playlist.title }}
                    </router-link>
                </span>                
            </li>
        </ul>
        <span class="pl-3 pt-5" @click="addPaylistPrompt()">
            <svg style="width:24px;height:24px;" viewBox="0 0 28 16">
                <path fill="#F9233B" d="M17,13H13V17H11V13H7V11H11V7H13V11H17M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z" />
            </svg>
            <span class="is-size-5">Create New Playlist</span>
        </span>
    </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
    computed: {
        ...mapState(['playlists',])
    },
    methods: {
        getPlaylists() {
            return this.$store.state.playlists;
        },
        setPlaylist(playlist) {
            this.$store.dispatch("selectedPlaylist", playlist)
        },
        addPaylistPrompt() {
            this.$buefy.dialog.prompt({
                message: `Add new playlist`,
                type: 'is-apple',
                inputAttrs: {
                    placeholder: 'e.g. "My Playlist"',
                    maxlength: 10
                },
                trapFocus: false,
                onConfirm: (value) => {
                    if(!this.titleExists(value)) {
                        this.$store.dispatch("addPlaylist", {
                            title: value,
                            songs: []
                        })
                    } else {
                        this.$buefy.toast.open({
                            message: 'Playlist already exists',
                            type: 'is-danger'
                        })
                    }
                }
            })
        },
        titleExists(title) {
            let playlists = this.getPlaylists();
            return playlists.filter(item => item.title === title).length
        }
    }
}
</script>

<style lang="scss" scoped>
$is-apple: #F9233B;
.pl-wrapper {
    text-align: left;
    padding-left: 4%;
}
</style>