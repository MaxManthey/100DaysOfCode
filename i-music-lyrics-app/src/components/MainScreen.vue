<template>
    <div>
        <input id="song-name" type="text" class="is-size-5" placeholder="Song Name" v-model="songName">
        <input id="artist-name" type="text" class="is-size-5" placeholder="Artist Name" v-model="artistName">
        <br>
        <button @click="moin('poets of fall', 'carnival of rust')" class="is-size-4 has-text-weight-bold">Find Lyrics</button>
        <pre>{{ songName }}</pre>
        <div v-if="btnClicked" class="lyrics-wrapper">
            <div class="lyrics-bg">
                <h1 class="is-size-2 has-text-weight-bold">Song name</h1>
                <h1 class="is-size-3 has-text-weight-bold">Artist Name</h1>
                <p class="lyrics is-size-5">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tortor aliquam nulla facilisi cras fermentum. Arcu non odio euismod lacinia at. Ultricies lacus sed turpis tincidunt id. Donec adipiscing tristique risus nec. Sit amet luctus venenatis lectus magna. Vitae suscipit tellus mauris a diam maecenas sed. Aenean sed adipiscing diam donec adipiscing tristique risus nec feugiat. Nunc vel risus commodo viverra. Et ultrices neque ornare aenean euismod elementum. Eget aliquet nibh praesent tristique magna. Quis risus sed vulputate odio ut enim blandit volutpat. Morbi tincidunt augue interdum velit euismod in pellentesque massa. Suspendisse ultrices gravida dictum fusce ut placerat orci nulla pellentesque. Magna eget est lorem ipsum dolor sit amet. Et malesuada fames ac turpis.

Convallis tellus id interdum velit laoreet id. Viverra nibh cras pulvinar mattis nunc sed blandit. Mus mauris vitae ultricies leo. Elementum nisi quis eleifend quam adipiscing vitae proin. Et netus et malesuada fames. Morbi blandit cursus risus at ultrices mi tempus imperdiet nulla. Quam vulputate dignissim suspendisse in est ante in nibh. Viverra justo nec ultrices dui sapien eget mi proin. Cras semper auctor neque vitae tempus quam. Vel orci porta non pulvinar neque laoreet suspendisse interdum. Tellus cras adipiscing enim eu turpis egestas pretium aenean. Enim ut tellus elementum sagittis. Orci nulla pellentesque dignissim enim sit amet. Pulvinar neque laoreet suspendisse interdum consectetur. Amet massa vitae tortor condimentum. Fermentum iaculis eu non diam phasellus. Adipiscing at in tellus integer feugiat scelerisque. At risus viverra adipiscing at in tellus integer. At elementum eu facilisis sed odio morbi.

Vitae semper quis lectus nulla at volutpat diam ut. Consequat nisl vel pretium lectus quam id leo in vitae. Posuere lorem ipsum dolor sit amet consectetur adipiscing elit. Sollicitudin tempor id eu nisl nunc mi ipsum. Amet aliquam id diam maecenas ultricies mi eget. Turpis massa sed elementum tempus egestas sed sed risus pretium. Gravida in fermentum et sollicitudin ac orci phasellus egestas. Sit amet nulla facilisi morbi. Tincidunt dui ut ornare lectus. Justo laoreet sit amet cursus sit amet dictum sit. Ut eu sem integer vitae justo eget. Feugiat nibh sed pulvinar proin gravida hendrerit lectus a. Lobortis elementum nibh tellus molestie nunc non blandit massa enim. Scelerisque fermentum dui faucibus in ornare quam viverra. Massa sed elementum tempus egestas sed sed risus. Tristique et egestas quis ipsum suspendisse ultrices. Hendrerit gravida rutrum quisque non tellus orci ac auctor augue.
                </p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data () {
        return {
            btnClicked: false,
            songName: "",
            artistName: "",
        }
    },
    methods: {
        findLyrics() {
            this.btnClicked = true
        },
        async moin(artist, title) {
    let lyrics = await lyricsFinder(artist, title) || "Not Found!";
    console.log(lyrics);
    this.songName = lyrics
    }
    }
}
</script>

<style scoped>
h1 {
    color: #545454;
}
input {
    color: #545454;
    background-color: #fcfcfc;
    height: 35px;
    width: 22ch;
    margin: 2% 1%;
    border-radius: 5px;
    border: 0px;
    padding-left: 10px;
}
@media screen and (max-width: 1000px) {
    input {
        width: 90%    
    }
    button {
        margin-top: 3%;
    }
}
input:focus {
    outline: none;
}
button {
    padding: 10px;
    border: 0px;
    border-radius: 5px;
    box-shadow: 0 12px 10px -6px grey;
    color: #fcfcfc;
    background-color: rgba(148,187,233,1);
}
button:focus {
    outline: none;    
}
button:hover {
    background-color: rgba(238,174,202,1);    
}
button:active {
    box-shadow: 0 8px 6px -6px grey;
    padding: 5px;
    margin-top: 5px;
    margin-bottom: 5px;
    font-size: 90px;
}
.lyrics-wrapper {
  display: grid;
  color: #545454;
  grid-template-columns:
    1fr
    min(65ch, 100%)
    1fr;
}
.lyrics-wrapper > * {
  grid-column: 2;
}
.lyrics-bg {
    background-color: #fcfcfc;
    border-radius: 5px;
    padding: 5%;
    margin: 5%;
}
.lyrics {
    text-align: left;
    margin-top: 5%;
}
</style>