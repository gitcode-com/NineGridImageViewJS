/**
 * Copyright (c) 2021 ZhouLisheng
 * NineGridImageViewJS is licensed under Mulan PSL v2.
 * You can use this software according to the terms and conditions of the Mulan PSL v2.
 * You may obtain a copy of Mulan PSL v2 at:
 *          http://license.coscl.org.cn/MulanPSL2
 * THIS SOFTWARE IS PROVIDED ON AN "AS IS" BASIS, WITHOUT WARRANTIES OF ANY KIND,
 * EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO NON-INFRINGEMENT,
 * MERCHANTABILITY OR FIT FOR A PARTICULAR PURPOSE.
 * See the Mulan PSL v2 for more details.
 */

import router from '@system.router';
export default {
    data: {
        title: "",
        pageNames:
        [

            {name:"NineGridViewJS填充布局",
             uri:"pages/page2/page2"
            },,
            {name:"NineGridViewJS宫格布局",
             uri:"pages/page3/page3"
            },


        ]
    },
    onInit() {
    //页面数据初始化完成时触发，只触发一次。
        console.info("onInit");
        this.title = this.$t('strings.title');
    },
    onReady(){
        //页面创建完成时触发，只触发一次。
        console.info("onReady");
    },

    onShow(){
        //页面显示时触发。
        console.info("onShow");
    },
    onHide(){
        //页面消失时触发。。
        console.info("onHide");
    },
    onDestroy(){
        //页面销毁时触发。。
        console.info("onDestroy");
    },
    onBackPress(){
//        当用户点击返回按钮时触发。
//        返回true表示页面自己处理返回逻辑。
//        返回false表示使用默认的返回逻辑。
//        不返回值会作为false处理。
        console.info("onBackPress");
    },

    listClicked(uri){
        console.info(JSON.stringify(uri));
        this.pushUri(uri)
    },


    pushUri(uri){
        router.push({uri: uri});
    }




}
