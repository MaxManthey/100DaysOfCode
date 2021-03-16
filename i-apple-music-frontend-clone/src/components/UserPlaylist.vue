<template>
    <div>
        <img src="https://picsum.photos/id/43${value}/500/500" alt="Placeholder image">
        <div>Playlist Name</div>
        <span>
            <button>Play</button>
            <button>Shuffle</button>
        </span>
        <hr class="break-line">
        <ul>
            <li>
                <span>
                    cover
                    <div>
                        <p>title</p>
                        <p></p>
                    </div>
                </span>
                </span>
                </span>
                <hr class="songs-line">
            </li>
        </ul>
        <hr class="break-line">
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
hr.break-line {
    border-top: 1px solid #d4d4d4;
    width: 90%;
    margin: 0% 5%;
}
</style>