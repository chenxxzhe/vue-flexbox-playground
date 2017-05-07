<template>
<div class="app-container">
    <h1 class="title">Flexbox Playground</h1>
    <div class="flex">
        <div class="left">
            <playground class="playground"></playground>
            <css-panel></css-panel>
        </div>
        <control-panel class="right"></control-panel>
    </div>
</div>
</template>

<style>
/*global css*/
/*mobile 425*/
body {
    /*padding: 0;
    margin: 0;*/
    background-color: #261F26;
    color: white;
}
ul {
    padding: 0;
    list-style: none;
}
.title {
    font-size: 5rem;
    text-align: center;
    padding: 0;
    margin: 5px auto;
}
/*local*/
.flex {
    display: flex;
    justify-content: space-around;
    align-items: flex-start;
    padding: 10px;
}

.left {
    width: 60%;
    flex: none;
}
.right {
    width: 30%;
    /*flex:auto;*/
}
.playground {
    min-height: 300px;
    margin-bottom: 10px;
}

</style>


<script>
import Playground from 'Components/playground.vue';
import CssPanel from 'Components/css-panel.vue';
import ControlPanel from 'Components/control-panel.vue';

export default {
    components: {
        Playground,
        CssPanel,
        ControlPanel,
    },
};
</script>
