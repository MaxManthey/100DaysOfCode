<template>
  <div>
    <input
      id="song-name"
      type="text"
      class="is-size-5"
      placeholder="Song Name"
      v-model="songName"
    />
    <input
      id="artist-name"
      type="text"
      class="is-size-5"
      placeholder="Artist Name"
      v-model="artistName"
    />
    <br />
    <button @click="findLyrics()" class="is-size-4 has-text-weight-bold">
      Find Lyrics
    </button>
    <div v-if="btnClicked" class="lyrics-wrapper">
      <div v-if="lyrics === 'nf'" class="not-found">
        <h1 class="is-size-2 has-text-weight-bold">
          Lyrics to {{ song }} from {{ artist }} not found please try again
        </h1>
      </div>
      <div class="lyrics-bg" v-else>
        <h1 class="is-size-2 has-text-weight-bold">{{ song }}</h1>
        <h1 class="is-size-3 has-text-weight-bold">{{ artist }}</h1>
        <p class="lyrics is-size-5">
          {{ lyrics }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      btnClicked: false,
      songName: "",
      artistName: "",
    };
  },
  computed: {
    ...mapState(["lyrics", "song", "artist"]),
  },
  methods: {
    findLyrics() {
      let payload = {
        song: this.songName,
        artist: this.artistName,
      };
      this.$store.dispatch("updateLyrics", payload);
      this.btnClicked = true;
    },
  },
};
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
    width: 90%;
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
  background-color: rgba(148, 187, 233, 1);
}
button:focus {
  outline: none;
}
button:hover {
  background-color: rgba(238, 174, 202, 1);
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
.not-found {
  margin-top: 5%;
}
</style>
