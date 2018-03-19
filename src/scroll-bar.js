/**
 * 滚动条位置保持
 * 需要的参数 dom
 * 适用于单页面
 */

/**
 * demo this.ScrollBar.init('index-scroll',this.$refs.indexScroll)
 *
 * let ScrollBar = new ScrollBar();  // 实例对象保存到vuex 或者 全局变量
 *
 * let key = 'index-scroll';
 * let dom = this.$refs.indexScroll // 设置滚动条的dom实例
 *
 * ScrollBar.init(key, dom)
 */

export class ScrollBar {
    /**
     * {
     *      ref:null,
     *      top:0,
     *      left:0,
     * }
     */
    _scrolls = {};
    _events = {};

    add(key, dom, config = {}) {
        let data = {
            ref: dom,
            top: 0,
            left: 0,
        };
        Object.assign(data,config);
        this._scrolls[key] = data;
        this.initEvent(key, data)
    }

    recovery(key,dom){
        let data = this._scrolls[key];
        data.ref = dom;
        this.initEvent(key,data);
        dom.scrollTop = data.top;
        dom.scrollLeft = data.left;
    }

    remove(key){
        let b = Reflect.has(this._scrolls, key);
        let e = Reflect.has(this._events, key);
        if(b) Reflect.deleteProperty(this._scrolls, key);
        if(e) Reflect.deleteProperty(this._events, key);
    }

    assignConfig(key, config){
        Object.assign(this._scrolls[key], config);
    }

    init(key, dom, config) {
        let b = Reflect.has(this._scrolls, key);
        if (!b) {
            this.add(key,dom,config);
        }else if(b && config){
            this.assignConfig(key, config);
        }else{
            this.recovery(key,dom);
        }
    }

    initEvent(key, data){
        let fun = function (e) {
            data.top = e.target.scrollTop;
            data.left = e.target.scrollLeft;
        };
        this._events[key] = fun;
        data.ref.addEventListener('scroll',fun)
    }
}
