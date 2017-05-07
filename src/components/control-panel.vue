<template>
<div class="controller">
    <h1>flex container</h1>
    <div class="container-controller box ">
        <ul class="option-table">
            <li v-for="attr in containerOption" class="row">
                <label class="attr">
                    {{attr.name}}:
                </label>
                <div class="value">
                    <select class="select-list"
                        @change="changeContainerAttr($event, dash2camel(attr.name))"
                        :value="container[dash2camel(attr.name)]">
                        <option v-for="opt in attr.option"
                            :value="opt">
                            {{opt}}
                        </option>
                    </select>
                    <a :title="attr.tip"
                        href="javascript:void(0)"
                        class="help">
                        ?
                    </a>
                </div>
            </li>
        </ul>
    </div>
    <h1>flex items</h1>
    <div class="items-controller">
        <div class="box button-box">
            <span class="button" @click="addBox">+</span>
            <span class="button" @click="removeBox">-</span>
        </div>
        <ul>
            <li class="box"
                v-for="(item,index) in boxes">
                <div class="tag">{{index}}</div>
                <ul class="option-table">
                    <!-- render for every option -->
                    <li v-for="attr in itemOption" class="row">
                        <label class="attr">
                            {{attr.name}}:
                        </label>
                        <div class="value">
                            <input v-if="!(attr.value instanceof Array)"
                                class="input-text"
                                type="text"
                                size="3"
                                :value="item[dash2camel(attr.name)]"
                                @input="changeItemAttr($event,dash2camel(attr.name),index)">

                            <!-- render for select -->
                            <select v-if="attr.value instanceof Array"
                                class="select-list"
                                :value="item[dash2camel(attr.name)]"
                                @change="changeItemAttr($event, dash2camel(attr.name),index)">
                                <option v-for="opt in attr.value"
                                    :value="opt">
                                    {{opt}}
                                </option>
                            </select>
                            <a href="javascript:void(0)"
                                :title="attr.tip"
                                class="help">
                                ?
                            </a>
                        </div>
                    </li>
                </ul>
                <p>flex: {{item.flex()}}<a href="javascript:void(0)" class="help" title="specifies the components of a flexible length: the *flex grow* factor and *flex shrink* factor, and the *flex basis*.">?</a></p>
            </li>
        </ul>
    </div>
</div>
</template>

<style scoped>
    h1, p {
        text-align: center;
    }
    .controller {
        padding: 15px;
        background-color: #8C3A26;
        box-shadow: -23px 66px rgba(0,0,0,.06) inset, -63px 49px rgba(0,0,0,.06) inset, 17px -51px rgba(0,0,0,.06) inset, 2px 5px rgba(0,0,0,.2);
        border: 2px solid #C5C588;
        border-radius: 10px;
    }
    .box {
        position: relative;
        padding: 15px;
        margin-bottom: 15px;
        border-radius: 5px;
        background-color: #6F1F1F;
        box-shadow: -2px -4px rgba(0,0,0,.2) inset;
    }
    .option-table {
        display: table;
        width: 100%;
    }
    .row {
        display: table-row;
    }
    .attr {
        display: table-cell;
        padding: 6px;
        white-space: nowrap;
        text-align: right;
    }
    .value {
        display: table-cell;
        padding: 6px;
    }
    .input-text {
        background-color: #874339;
        border-radius: 3px;
        padding: 3px;
        border: 0;
        color:inherit;
    }
    .select-list {
        width: 85%;
        background-color: #9F513D;
        color: inherit;
        border: 0;
        border-radius: 3px;
        box-shadow: 1px 2px rgba(0,0,0,.1);
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
    .help {
        display: inline-block;
        font: bold 13px/14px Lato;
        cursor: pointer;
        width: 14px;
        text-align: center;
        vertical-align: middle;
        color: #EFF1DF;
        background: rgba(255,255,255,.2);
        box-shadow: 1px 2px rgba(0,0,0,.1);
        padding: 1px;
        border-radius: 50%;
        text-decoration: none;
    }
    .button {
        display: inline-block;
        margin-left: 10px;
        width: 20%;
        height: 20%;
        padding: 1px;
        border-radius: 3px;
        box-shadow: 1px 2px rgba(0,0,0,.1);
        background-color: #874339;
        color: inherit;
        cursor: pointer;
        text-align: center;
        vertical-align: middle;
    }
    .button-box {
        text-align: center;
    }

</style>

<script>
import {mapMutations, mapState} from 'vuex';
import * as types from 'types';
export default {
    data() {
        return {
            containerOption: [
                {
                    name: 'display',
                    option: ['flex', 'inline-flex'],
                    tip: 'enabel flexbox mode',
                },
                {
                    name: 'flex-direction',
                    option: ['row', 'row-reverse', 'column', 'column-reverse'],
                    tip: 'direction of the flex container\'s main axis',
                },
                {
                    name: 'flex-wrap',
                    option: ['nowrap', 'wrap', 'wrap-reverse'],
                    tip: 'controls whether the flex container is single-line or multi-line, and the direction of the cross axis',
                },
                {
                    name: 'justify-content',
                    option: ['flex-start', 'flex-end', 'center', 'space-between', 'space-around'],
                    tip: 'align flex items along the main axis of the current line of the flex container',
                },
                {
                    name: 'align-items',
                    option: ['flex-start', 'flex-end', 'center', 'baseline', 'stretch'],
                    tip: 'align flex items along the cross axis of the current line of the flex container',
                },
                {
                    name: 'align-content',
                    option: ['flex-start', 'flex-end', 'center', 'space-between', 'space-around', 'stretch'],
                    tip: 'align a flex container\'s lines within the flex container when there is extra space in the cross axis, similar to how *justify-content* aligns individual items within the main axis.\nNote, this property has no effect when the flexbox has only a single line',
                },
            ],
            itemOption: [
                {
                    name: 'order',
                    value: 0,
                    tip: 'controls the order in which flex items appear within their flex container',
                },
                {
                    name: 'flex-grow',
                    value: 0,
                    tip: '*Number* which determines how much the flex item will *grow* relative to the rest of the flex items in the flex container when positive free space is distributed.',
                },
                {
                    name: 'flex-shrink',
                    value: 1,
                    tip: '*Number* which determines how much the flex item will *shrink* relative to the rest of the flex items in the flex container when negative free space is distributed.',
                },
                {
                    name: 'flex-basis',
                    value: 'auto',
                    tip: 'The initial *width or height* (depending on main axis) of the flex item, before free space is distributed according to the flex factors.',
                },
                {
                    name: 'align-self',
                    value: ['auto', 'flex-start', 'flex-end', 'center', 'baseline', 'stretch'],
                    tip: 'allows the alignment to be overridden for individual flex items',
                },

            ],
        };
    },
    computed: {
        ...mapState(['container', 'boxes']),
    },
    methods: {
        ...mapMutations({
            addBox: types.ADD_BOX,
            removeBox: types.REMOVE_BOX,
        }),
        // try if vue can deliver params from v-on:event
        changeContainerAttr(e, attr) {
            const value = e.target.value;
            return this.$store.commit(types.CHANGE_CONTAINER_ATTR, {attr, value});
        },
        changeItemAttr(e, attr, index) {
            const value = e.target.value;
            return this.$store.commit(types.CHANGE_ITEM_ATTR, {attr, value, index});
        },
        dash2camel(str) {
            return str.replace(/-(\w)/g, (match, p1)=>p1.toUpperCase());
        },
        camel2dash(str) {
            return str.replace(/([A-Z])/g, '-$1').toLowerCase();
        },
    },
};
</script>