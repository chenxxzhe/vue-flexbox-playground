<template>
<div class="flex-playground">
    <ul class="flex-container" :style="container">
        <li class="flex-item"
            v-for="(item,index) in boxes"
            :style="item">
            <span class="tag">{{index}}</span>
            <span contenteditable="true" class="content">lorem</span>
            <!-- <textarea>lorem</textarea> -->
        </li>
    </ul>
</div>
</template>

<style scoped>
    .flex-playground {
        /*height: 300px;*/
        background-color: #8C3A26;
        box-shadow: -23px 66px rgba(0,0,0,.06) inset, -63px 49px rgba(0,0,0,.06) inset, 17px -51px rgba(0,0,0,.06) inset, 2px 5px rgba(0,0,0,.2);
        border: 2px solid #C5C588;
        border-radius: 10px;
        overflow: hidden;
    }
    .flex-container {
        /*border: 1px solid blue;*/
    }
    .flex-item {
        position: relative;
        /*不能固定宽高，不然展示不了alignItem*/
        margin-left: 5px;
        padding: 15px;
        /*width: 60px;*/
        /*height: 100px;*/
        border-radius: 5px;
        background-color: #6F1F1F;
        box-shadow: -2px -4px rgba(0,0,0,.2) inset;
        /*border: 1px solid green;*/
    }
    .content {
        display: block;
        padding: 10px;
        word-wrap: break-word;
    }
    .content:hover {
        border-radius: 7px;
        background-color: #651C1C;
        box-shadow: 1px 1px rgba(0,0,0,.2) inset, 0 -1px rgba(255,255,255,.1) inset
    }
    .tag {
        position: absolute;
        top: -5px;
        left: -5px;
        width: 20px;
        height: 20px;
        line-height: 20px;
        border-radius: 50%;
        background-color: #938F67;
        box-shadow: 1px 1px rgba(255,255,255,.3) inset, -1px -1px rgba(0,0,0,.2) inset;
        text-align: center;
    }
</style>

<script>
import {mapState} from 'vuex';
export default {
    computed: {
        ...mapState(['boxes', 'container']),
    },
};
</script>