import Vue from 'vue';
import Vuex from 'vuex';
import createLogger from 'vuex/dist/logger';

import * as types from 'types';

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

const itemShape = {
    order: 0,
    flexGrow: 0,
    flexShrink: 1,
    flexBasis: 'auto',
    alignSelf: 'auto',
    flex: function () {
        return this.flexGrow + ' ' + this.flexShrink + ' ' + this.flexBasis;
    },
};

export default new Vuex.Store({
    // actions:{},
    // getters:{},
    state: {
        // flex attr of container
        container: {
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'nowrap',
            justifyContent: 'flex-start',
            alignItems: 'flex-start',
            alignContent: 'stretch',
        },
        // flex attr of every item
        boxes: [
            Object.assign({}, itemShape),
            Object.assign({}, itemShape),
        ],
    },
    mutations: {
        [types.CHANGE_CONTAINER_ATTR](state, {attr, value}) {
            state.container[attr] = value;
        },
        [types.CHANGE_ITEM_ATTR](state, {attr, value, index}) {
            state.boxes[index][attr] = value;
        },
        [types.ADD_BOX](state) {
            if (state.boxes.length >= 10) {
                return;
            }
            state.boxes.push(Object.assign(itemShape));
        },
        [types.REMOVE_BOX](state) {
            if (state.boxes.length === 0) {
                return;
            }
            state.box.pop();
        },
    },
    strict: debug,
    plugins: debug ? [createLogger()] : [],
});


