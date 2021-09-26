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
import prompt from '@system.prompt';
import router from '@system.router';
import {NineGridViewData} from '../../common/ninegridview/NineGridViewData.js';

export default {
    data: {
        listBean: [
            new NineGridViewData({
                content: "SpanType=1 NUM=1",
                showType: 2, //1 宫格布局  2 全填充布局
                spanType: 1,
                mGap: 1,
                imgDatas: [
                    {
                        imageUrls: "common/photos/photo1.jpg",
                        positionX: 0,
                        positionY: 0,
                        width: 0,
                        height: 0
                    }

                ]
            }),
            new NineGridViewData({
                content: "SpanType=1 NUM=2",
                showType: 2, //1 宫格布局  2 全填充布局
                spanType: 1,
                mGap: 1,
                imgDatas: [
                    {
                        imageUrls: "common/photos/photo2.jpg",
                        positionX: 0,
                        positionY: 0,
                        width: 0,
                        height: 0
                    },
                    {
                        imageUrls: "common/photos/photo2.jpg",
                        positionX: 0,
                        positionY: 0,
                        width: 0,
                        height: 0
                    }

                ]
            }),
            new NineGridViewData({
                content: "SpanType=1 NUM=3",
                showType: 2, //1 宫格布局  2 全填充布局
                spanType: 1,
                mGap: 1,
                imgDatas: [
                    {
                        imageUrls: "common/photos/photo3.jpg",
                        positionX: 0,
                        positionY: 0,
                        width: 0,
                        height: 0
                    },
                    {
                        imageUrls: "common/photos/photo3.jpg",
                        positionX: 0,
                        positionY: 0,
                        width: 0,
                        height: 0
                    },
                    {
                        imageUrls: "common/photos/photo3.jpg",
                        positionX: 0,
                        positionY: 0,
                        width: 0,
                        height: 0
                    }

                ]
            }),
            new NineGridViewData({
                content: "SpanType=2 NUM=3",
                showType: 2, //1 宫格布局  2 全填充布局
                spanType: 2,
                mGap: 1,
                imgDatas: [
                    {
                        imageUrls: "common/photos/photo4.jpg",
                        positionX: 0,
                        positionY: 0,
                        width: 0,
                        height: 0
                    },
                    {
                        imageUrls: "common/photos/photo4.jpg",
                        positionX: 0,
                        positionY: 0,
                        width: 0,
                        height: 0
                    },
                    {
                        imageUrls: "common/photos/photo4.jpg",
                        positionX: 0,
                        positionY: 0,
                        width: 0,
                        height: 0
                    }
                ]
            }),
            new NineGridViewData({
                content: "SpanType=3 NUM=3",
                showType: 2, //1 宫格布局  2 全填充布局
                spanType: 3,
                mGap: 1,
                imgDatas: [
                    {
                        imageUrls: "common/photos/photo5.jpg",
                        positionX: 0,
                        positionY: 0,
                        width: 0,
                        height: 0
                    },
                    {
                        imageUrls: "common/photos/photo5.jpg",
                        positionX: 0,
                        positionY: 0,
                        width: 0,
                        height: 0
                    },
                    {
                        imageUrls: "common/photos/photo5.jpg",
                        positionX: 0,
                        positionY: 0,
                        width: 0,
                        height: 0
                    }
                ]
            }),
            new NineGridViewData({
                content: "SpanType=4 NUM=3",
                showType: 2, //1 宫格布局  2 全填充布局
                spanType: 4,
                mGap: 1,
                imgDatas: [
                    {
                        imageUrls: "common/photos/photo6.jpg",
                        positionX: 0,
                        positionY: 0,
                        width: 0,
                        height: 0
                    },
                    {
                        imageUrls: "common/photos/photo6.jpg",
                        positionX: 0,
                        positionY: 0,
                        width: 0,
                        height: 0
                    },
                    {
                        imageUrls: "common/photos/photo6.jpg",
                        positionX: 0,
                        positionY: 0,
                        width: 0,
                        height: 0
                    }
                ]
            }),
            new NineGridViewData({
                content: "SpanType=1 NUM=4",
                showType: 2, //1 宫格布局  2 全填充布局
                spanType: 1,
                mGap: 1,
                imgDatas: [
                    {
                        imageUrls: "common/photos/photo1.jpg",
                        positionX: 0,
                        positionY: 0,
                        width: 0,
                        height: 0
                    },
                    {
                        imageUrls: "common/photos/photo1.jpg",
                        positionX: 0,
                        positionY: 0,
                        width: 0,
                        height: 0
                    },
                    {
                        imageUrls: "common/photos/photo1.jpg",
                        positionX: 0,
                        positionY: 0,
                        width: 0,
                        height: 0
                    },
                    {
                        imageUrls: "common/photos/photo1.jpg",
                        positionX: 0,
                        positionY: 0,
                        width: 0,
                        height: 0
                    }
                ]
            }),
            new NineGridViewData({
                content: "SpanType=2 NUM=4",
                showType: 2, //1 宫格布局  2 全填充布局
                spanType: 2,
                mGap: 1,
                imgDatas: [
                    {
                        imageUrls: "common/photos/photo2.jpg",
                        positionX: 0,
                        positionY: 0,
                        width: 0,
                        height: 0
                    },
                    {
                        imageUrls: "common/photos/photo2.jpg",
                        positionX: 0,
                        positionY: 0,
                        width: 0,
                        height: 0
                    },
                    {
                        imageUrls: "common/photos/photo2.jpg",
                        positionX: 0,
                        positionY: 0,
                        width: 0,
                        height: 0
                    },
                    {
                        imageUrls: "common/photos/photo2.jpg",
                        positionX: 0,
                        positionY: 0,
                        width: 0,
                        height: 0
                    }
                ]
            }),
            new NineGridViewData({
                content: "SpanType=3 NUM=4",
                showType: 2, //1 宫格布局  2 全填充布局
                spanType: 3,
                mGap: 1,
                imgDatas: [
                    {
                        imageUrls: "common/photos/photo3.jpg",
                        positionX: 0,
                        positionY: 0,
                        width: 0,
                        height: 0
                    },
                    {
                        imageUrls: "common/photos/photo3.jpg",
                        positionX: 0,
                        positionY: 0,
                        width: 0,
                        height: 0
                    },
                    {
                        imageUrls: "common/photos/photo3.jpg",
                        positionX: 0,
                        positionY: 0,
                        width: 0,
                        height: 0
                    },
                    {
                        imageUrls: "common/photos/photo3.jpg",
                        positionX: 0,
                        positionY: 0,
                        width: 0,
                        height: 0
                    }
                ]
            }),
            new NineGridViewData({
                content: "SpanType=4 NUM=4",
                showType: 2, //1 宫格布局  2 全填充布局
                spanType: 4,
                mGap: 1,
                imgDatas: [
                    {
                        imageUrls: "common/photos/photo4.jpg",
                        positionX: 0,
                        positionY: 0,
                        width: 0,
                        height: 0
                    },
                    {
                        imageUrls: "common/photos/photo4.jpg",
                        positionX: 0,
                        positionY: 0,
                        width: 0,
                        height: 0
                    },
                    {
                        imageUrls: "common/photos/photo4.jpg",
                        positionX: 0,
                        positionY: 0,
                        width: 0,
                        height: 0
                    },
                    {
                        imageUrls: "common/photos/photo4.jpg",
                        positionX: 0,
                        positionY: 0,
                        width: 0,
                        height: 0
                    }
                ]
            }),
            new NineGridViewData({
                content: "SpanType=1 NUM=5",
                showType: 2, //1 宫格布局  2 全填充布局
                spanType: 1,
                mGap: 1,
                imgDatas: [
                    {
                        imageUrls: "common/photos/photo5.jpg",
                        positionX: 0,
                        positionY: 0,
                        width: 0,
                        height: 0
                    },
                    {
                        imageUrls: "common/photos/photo5.jpg",
                        positionX: 0,
                        positionY: 0,
                        width: 0,
                        height: 0
                    },
                    {
                        imageUrls: "common/photos/photo5.jpg",
                        positionX: 0,
                        positionY: 0,
                        width: 0,
                        height: 0
                    },
                    {
                        imageUrls: "common/photos/photo5.jpg",
                        positionX: 0,
                        positionY: 0,
                        width: 0,
                        height: 0
                    },
                    {
                        imageUrls: "common/photos/photo5.jpg",
                        positionX: 0,
                        positionY: 0,
                        width: 0,
                        height: 0
                    }
                ]
            }),
            new NineGridViewData({
                content: "SpanType=2 NUM=5",
                showType: 2, //1 宫格布局  2 全填充布局
                spanType: 2,
                mGap: 1,
                imgDatas: [
                    {
                        imageUrls: "common/photos/photo6.jpg",
                        positionX: 0,
                        positionY: 0,
                        width: 0,
                        height: 0
                    },
                    {
                        imageUrls: "common/photos/photo6.jpg",
                        positionX: 0,
                        positionY: 0,
                        width: 0,
                        height: 0
                    },
                    {
                        imageUrls: "common/photos/photo6.jpg",
                        positionX: 0,
                        positionY: 0,
                        width: 0,
                        height: 0
                    },
                    {
                        imageUrls: "common/photos/photo6.jpg",
                        positionX: 0,
                        positionY: 0,
                        width: 0,
                        height: 0
                    },
                    {
                        imageUrls: "common/photos/photo6.jpg",
                        positionX: 0,
                        positionY: 0,
                        width: 0,
                        height: 0
                    }
                ]
            }),
            new NineGridViewData({
                content: "SpanType=3 NUM=5",
                showType: 2, //1 宫格布局  2 全填充布局
                spanType: 3,
                mGap: 1,
                imgDatas: [
                    {
                        imageUrls: "common/photos/photo1.jpg",
                        positionX: 0,
                        positionY: 0,
                        width: 0,
                        height: 0
                    },
                    {
                        imageUrls: "common/photos/photo1.jpg",
                        positionX: 0,
                        positionY: 0,
                        width: 0,
                        height: 0
                    },
                    {
                        imageUrls: "common/photos/photo1.jpg",
                        positionX: 0,
                        positionY: 0,
                        width: 0,
                        height: 0
                    },
                    {
                        imageUrls: "common/photos/photo1.jpg",
                        positionX: 0,
                        positionY: 0,
                        width: 0,
                        height: 0
                    },
                    {
                        imageUrls: "common/photos/photo1.jpg",
                        positionX: 0,
                        positionY: 0,
                        width: 0,
                        height: 0
                    }
                ]
            }),
            new NineGridViewData({
                content: "SpanType=4 NUM=5",
                showType: 2, //1 宫格布局  2 全填充布局
                spanType: 4,
                mGap: 1,
                imgDatas: [
                    {
                        imageUrls: "common/photos/photo2.jpg",
                        positionX: 0,
                        positionY: 0,
                        width: 0,
                        height: 0
                    },
                    {
                        imageUrls: "common/photos/photo2.jpg",
                        positionX: 0,
                        positionY: 0,
                        width: 0,
                        height: 0
                    },
                    {
                        imageUrls: "common/photos/photo2.jpg",
                        positionX: 0,
                        positionY: 0,
                        width: 0,
                        height: 0
                    },
                    {
                        imageUrls: "common/photos/photo2.jpg",
                        positionX: 0,
                        positionY: 0,
                        width: 0,
                        height: 0
                    },
                    {
                        imageUrls: "common/photos/photo2.jpg",
                        positionX: 0,
                        positionY: 0,
                        width: 0,
                        height: 0
                    }
                ]
            }),
            new NineGridViewData({
                content: "SpanType=1 NUM=6",
                showType: 2, //1 宫格布局  2 全填充布局
                spanType: 1,
                mGap: 1,
                imgDatas: [
                    {
                        imageUrls: "common/photos/photo3.jpg",
                        positionX: 0,
                        positionY: 0,
                        width: 0,
                        height: 0
                    },
                    {
                        imageUrls: "common/photos/photo3.jpg",
                        positionX: 0,
                        positionY: 0,
                        width: 0,
                        height: 0
                    },
                    {
                        imageUrls: "common/photos/photo3.jpg",
                        positionX: 0,
                        positionY: 0,
                        width: 0,
                        height: 0
                    },
                    {
                        imageUrls: "common/photos/photo3.jpg",
                        positionX: 0,
                        positionY: 0,
                        width: 0,
                        height: 0
                    },
                    {
                        imageUrls: "common/photos/photo3.jpg",
                        positionX: 0,
                        positionY: 0,
                        width: 0,
                        height: 0
                    },
                    {
                        imageUrls: "common/photos/photo3.jpg",
                        positionX: 0,
                        positionY: 0,
                        width: 0,
                        height: 0
                    }
                ]
            }),
            new NineGridViewData({
                content: "SpanType=2 NUM=6",
                showType: 2, //1 宫格布局  2 全填充布局
                spanType: 2,
                mGap: 1,
                imgDatas: [
                    {
                        imageUrls: "common/photos/photo4.jpg",
                        positionX: 0,
                        positionY: 0,
                        width: 0,
                        height: 0
                    },
                    {
                        imageUrls: "common/photos/photo4.jpg",
                        positionX: 0,
                        positionY: 0,
                        width: 0,
                        height: 0
                    },
                    {
                        imageUrls: "common/photos/photo4.jpg",
                        positionX: 0,
                        positionY: 0,
                        width: 0,
                        height: 0
                    },
                    {
                        imageUrls: "common/photos/photo4.jpg",
                        positionX: 0,
                        positionY: 0,
                        width: 0,
                        height: 0
                    },
                    {
                        imageUrls: "common/photos/photo4.jpg",
                        positionX: 0,
                        positionY: 0,
                        width: 0,
                        height: 0
                    },
                    {
                        imageUrls: "common/photos/photo4.jpg",
                        positionX: 0,
                        positionY: 0,
                        width: 0,
                        height: 0
                    }
                ]
            }),
            new NineGridViewData({
                content: "SpanType=3 NUM=6",
                showType: 2, //1 宫格布局  2 全填充布局
                spanType: 3,
                mGap: 1,
                imgDatas: [
                    {
                        imageUrls: "common/photos/photo5.jpg",
                        positionX: 0,
                        positionY: 0,
                        width: 0,
                        height: 0
                    },
                    {
                        imageUrls: "common/photos/photo5.jpg",
                        positionX: 0,
                        positionY: 0,
                        width: 0,
                        height: 0
                    },
                    {
                        imageUrls: "common/photos/photo5.jpg",
                        positionX: 0,
                        positionY: 0,
                        width: 0,
                        height: 0
                    },
                    {
                        imageUrls: "common/photos/photo5.jpg",
                        positionX: 0,
                        positionY: 0,
                        width: 0,
                        height: 0
                    },
                    {
                        imageUrls: "common/photos/photo5.jpg",
                        positionX: 0,
                        positionY: 0,
                        width: 0,
                        height: 0
                    },
                    {
                        imageUrls: "common/photos/photo5.jpg",
                        positionX: 0,
                        positionY: 0,
                        width: 0,
                        height: 0
                    }
                ]
            }),
            new NineGridViewData({
                content: "SpanType=4 NUM=6",
                showType: 2, //1 宫格布局  2 全填充布局
                spanType: 4,
                mGap: 1,
                imgDatas: [
                    {
                        imageUrls: "common/photos/photo6.jpg",
                        positionX: 0,
                        positionY: 0,
                        width: 0,
                        height: 0
                    },
                    {
                        imageUrls: "common/photos/photo6.jpg",
                        positionX: 0,
                        positionY: 0,
                        width: 0,
                        height: 0
                    },
                    {
                        imageUrls: "common/photos/photo6.jpg",
                        positionX: 0,
                        positionY: 0,
                        width: 0,
                        height: 0
                    },
                    {
                        imageUrls: "common/photos/photo6.jpg",
                        positionX: 0,
                        positionY: 0,
                        width: 0,
                        height: 0
                    },
                    {
                        imageUrls: "common/photos/photo6.jpg",
                        positionX: 0,
                        positionY: 0,
                        width: 0,
                        height: 0
                    },
                    {
                        imageUrls: "common/photos/photo6.jpg",
                        positionX: 0,
                        positionY: 0,
                        width: 0,
                        height: 0
                    }
                ]
            }),
        ]
    },
    
    onInit() {
        //页面数据初始化完成时触发，只触发一次。
        console.info("onInit");
        this.title = this.$t('strings.title');
    },
    onReady() {
        //页面创建完成时触发，只触发一次。
        console.info("onReady");
    },
    onShow() {
        //页面显示时触发。
        console.info("onShow");

        //获取到控件
        const eleTemp = this.$element("temp1");
        //对控件进行touch绑定
        eleTemp.setTouch

    },
    onHide() {
        //页面消失时触发。。
        console.info("onHide");
    },
    onDestroy() {
        //页面销毁时触发。。
        console.info("onDestroy");
    },
    onBackPress() {
        //        当用户点击返回按钮时触发。
        //        返回true表示页面自己处理返回逻辑。
        //        返回false表示使用默认的返回逻辑。
        //        不返回值会作为false处理。
        console.info("onBackPress");
    },
    listClicked(uri) {
        console.info(JSON.stringify(uri));
        this.pushUri(uri)
    },
    pushUri(uri) {
        router.push({
            uri: uri
        });
    },
    itemTouchStart() {

    },
    itemTouchMove() {

    },
    itemTouchCancel() {

    },
    itemTouchEnd() {

    },
    itemPressNineGrid(value) {
        console.info("itemPressNineGrid");

        var name = value.detail.name +
        "  itemIndex =" + value.detail.itemIndex+
        "  index =" + value.detail.index;

        var detail = value.detail;
        prompt.showToast({
            message: name,
            duration: 1000
        });
        console.info(name);
        console.info("value = " + JSON.stringify(value));

        if (name == "itemClick1") {
            //点击

        } else if (name == "itemLongPress1") {
            //长按

        }

    },
}
