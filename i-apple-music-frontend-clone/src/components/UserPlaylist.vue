<template>
    <div class="wrapper">
        <img src="https://picsum.photos/250/250" alt="Placeholder image" class="title-pic">
        <div class="is-size-3 has-text-weight-bold">{{ playlistName }}</div>
        <span>
            <button class="music-btn">Play</button>
            <button class="music-btn">Shuffle</button>
        </span>
        <hr class="break-line">
        <ul>
            <li v-for="{song, artist} in getSongs" :key="song">
                <span class="song-wrapper">
                    <img src="https://bulma.io/images/placeholders/32x32.png" class="song-pic">
                    <div class="is-size-7 song-text">
                        <p>{{ song }}</p>
                        <p>{{ artist }}</p>
                    </div>
                    <p class="test">time</p>
                </span>
                <hr class="songs-line">
            </li>
        </ul>
        <hr class="break-line">
        <bottom-text />
    </div>
</template>

<script>
import { mapState } from 'vuex';
import BottomText from './BottomText.vue';
export default {
  components: { BottomText },
    data () {
        return {
            playlistName: ""
        }
    },
    created () {
        this.playlistName = this.$store.state.selectedPlaylist;
    },
    computed: {
        ...mapState(['playlists',]),
        getSongs() {
            const playlists = this.$store.state.playlists;
            for(let i = 0; i < playlists.length; ++i) {
                if(playlists[i].title === this.playlistName) {
                    console.log(playlists[i].songs)
                    return playlists[i].songs;
                }
            }
        }
    },        
}
</script>

<style lang="scss" scoped>
.wrapper {
    margin-top: 4%;
}
hr.break-line {
    border-top: 1px solid #d4d4d4;
    width: 77%;
    margin: 3% 5%;
    margin-left: 11%;
}
hr.songs-line {
    border-top: 1px solid #d4d4d4;
    width: 65%;
    margin-left: 23%;
    margin-top: 0%
}
img {
    border-radius: 5px;
}
img.title-pic {
    -webkit-box-shadow: 2px 3px 8px 5px #ccc;  /* Safari 3-4, iOS 4.0.2 - 4.2, Android 2.3+ */
    -moz-box-shadow:    2px 3px 8px 5px #ccc;  /* Firefox 3.5 - 3.6 */
    box-shadow:         2px 3px 8px 5px #ccc; 
}
img.song-pic {
    width: 36px;
    height: 36px;
    margin-right: 3%;
}
.song-wrapper {
    display: flex;
    padding-left: 8%;
    margin: 3%;
    margin-bottom: 1%;
    margin-top: 1%;
}
.song-wrapper p:last-child {
  margin-left: auto;
  margin-right: 11%;
}
.song-text {
    text-align: left;
}
.music-btn {
    width: 100px;
    height: 30px;
    background-color: #F9233B;
    color: #fff;
    border: 0px solid;
    border-radius: 8px;
    margin: 10px 15px;
}
.icons {
    position: relative;
    top: 1px;
    margin-right: 5px;
}
.btn-text {
    position: relative;
    top: 1px;
    margin-right: 5px;
}
</style>