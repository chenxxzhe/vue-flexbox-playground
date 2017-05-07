<template>
<div class="main">
    <!-- &#123; == { | &#125; == } -->
    <div class="container-css">
        .container &#123;
            display: {{container.display}};
            flex-direction: {{container.flexDirection}};
            flex-wrap: {{container.flexWrap}};
            justify-content: {{container.justifyContent}};
            align-items: {{container.alignItems}}；
            align-content: {{container.alignContent}}；
        &#125;
    </div>
    <div class="item-css" v-for="(item, index) in boxes">
        .item{{index}} &#123;
            order: {{item.order}};
            flex-grow: {{item.flexGrow}};
            flex-shrink: {{item.flexShrink}};
            flex-basis: {{item.flexBasis}};
            align-self: {{item.alignSelf}};
            /*flex: {{item.flex()}}*/
        &#125;
    </div>
</div>
</template>


<style scoped>
.main {
    border: 3px solid #938F67;
    border-radius: 10px;
    background-color: #F8EFD8;
    color: black;
}
.container-css {
    white-space: pre;
}
.item-css {
    white-space: pre;
}
</style>

<script>
import {mapState} from 'vuex';
export default {
    computed: mapState(['container', 'boxes']),
};
</script>