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
import prompt from '@system.prompt';
import {NineGridViewData} from '../ninegridview/NineGridViewData.js';
export default {
    data: {
        firstLayout: true,
        useValue: new NineGridViewData({}), //NineGridViewData
        mRowCount: 1,
        mColumnCount: 1,
        mNineGridWidth: 0,
        mNineGridHeight: 360,
        mMaxSize: 9, //最大图片数量
        content: "暂无数据",
        imgDatas: [],
        isFullStyle:false,
        isGridStyle:true,
    },
    props: {
        itemValue:  new NineGridViewData({}), //NineGridViewData
        itemIndex: 0,
    },
    computed: {
        aquireItemValue() {
            return this.useValue;
        },
    },


    itemTouchStart(index, value) {
        //改变蒙层背景颜色
    },
    itemTouchMove(index, value) {

    },
    itemTouchCancel(index, value) {
    },
    itemTouchEnd(index, value) {
    },
    imageClicked(index, value) {
        this.$emit("imageClicked");
    },
    imageLongclicked(index, value) {
        this.$emit("imageLongClicked")
    },
    onInit() {
        //自定义组件初始化生命周期回调，当自定义组件创建时，触发该回调，主要用于自定义组件中必须使用的数据初始化，该回调只会触发一次调用。
        console.info("nine grid view " + " onInit")

    },
    onAttached() {
        //自定义组件被创建后，加入到Page组件树时，触发该回调，该回调触发时，表示组件将被进行显示，该声明周期可用于初始化显示相关数据，通常用于加载图片资源、开始执行动画等场景。
        console.info("nine grid view " + " onAttached")
    },
    onLayoutReady() {
        //自定义组件插入Page组件树后，将会对自定义组件进行布局计算，调整其内容元素尺寸与位置，当布局计算结束后触发该回调。
        console.info("nine grid view " + " onLayoutReady")

        if (this.firstLayout) {
            this.firstLayout = false;
            try {
                var that = this;
                setTimeout(that.onLayoutJustFirst(),200);
            } catch (err) {
                console.info("onLayoutJustFirst error =" + err);
            }
        }

    },
    onDetached() {
        //自定义组件摘除时，触发该回调，常用于停止动画或异步逻辑停止执行的场景。
        console.info("nine grid view " + " onDetached")
    },
    onDestroy() {
        //自定义组件销毁时，触发该回调，常用于资源释放。
        console.info("nine grid view " + " onDestroy")
    },
    onPageShow() {
        //自定义组件所在Page显示后，触发该回调。
        console.info("nine grid view " + " onPageShow")
    },
    onPageHide() {
        //自定义组件所在Page隐藏后，触发该回调。
        console.info("nine grid view " + " onPageHide")
    },
    calculateGridParam(imageSize, showStyle) {
        var gridParam = [0, 0];
        if (showStyle == 2) {
            this.generatUnitRowAndColumnForSpanType(imageSize, gridParam);
        } else {
            gridParam[0] = Math.floor(imageSize / 3) + (imageSize % 3 == 0 ? 0 : 1);
            gridParam[1] = 3;
        }
        return gridParam;
    },
    generatUnitRowAndColumnForSpanType(imagesSize, gridParam) {
        if (imagesSize <= 2) {
            gridParam[0] = 1;
            gridParam[1] = imagesSize;
        } else if (imagesSize == 3) {
            if (
            this.itemValue.spanType == 2 || // 2行2列,首行跨列
            this.itemValue.spanType == 3 || // 2行2列,末行跨列
            this.itemValue.spanType == 4 // 2行2列,首列跨行
            ) {
                gridParam[0] = 2;
                gridParam[1] = 2;
            } else {
                gridParam[0] = 1;
                gridParam[1] = 3;
            }
        } else if (imagesSize <= 6) {
            if (
            this.itemValue.spanType == 2 || // 3行3列,首行跨列
            this.itemValue.spanType == 3 || // 3行3列,末行跨列
            this.itemValue.spanType == 4 // 3行3列,首列跨行
            ) {
                gridParam[0] = 3;
                gridParam[1] = 3;
            } else {
                gridParam[0] = 2;
                gridParam[1] = Math.floor(imagesSize / 2) + imagesSize % 2;
            }
        } else {
            gridParam[0] = Math.floor(imagesSize / 3) + (imagesSize % 3 == 0 ? 0 : 1);
            gridParam[1] = 3;
        }
    },
    getNeedShowCount(size) {
        if (this.mMaxSize > 0 && size > this.mMaxSize) {
            return this.mMaxSize;
        } else {
            return size;
        }
    },
    layoutForNoSpanChildrenView(childrenCount) {
        if (childrenCount <= 0) {
            return;
        }
        let row;
        let column;
        let left;
        let top;
        let right;
        let bottom;
        for (let i = 0; i < childrenCount; i++) {
            row = Math.floor(i / this.mColumnCount);
            column = i % this.mColumnCount;
            left = (this.useValue.mGridSize + this.useValue.mGap) * column + this.getPaddingLeft();
            top = (this.useValue.mGridSize + this.useValue.mGap) * row;
            right = left + this.useValue.mGridSize;
            bottom = top + this.useValue.mGridSize;
            this.useValue.imgDatas[i].positionX = left;
            this.useValue.imgDatas[i].positionY = top;
            this.useValue.imgDatas[i].width = right - left;
            this.useValue.imgDatas[i].height = bottom - top;
        }
    },
    layoutForThreeChildrenView(childrenCount) {
        let left;
        let top;
        let right;
        let bottom;
        for (let i = 0; i < childrenCount; i++) {

            if (this.useValue.spanType == 2) {
                if (i == 0) {
                    left = this.getPaddingLeft();
                    top = this.getPaddingTop();
                    right = left + this.useValue.mGridSize * 2 + this.useValue.mGap;
                    bottom = top + this.useValue.mGridSize;
                } else if (i == 1) {
                    left = this.getPaddingLeft();
                    top = this.getPaddingTop() + this.useValue.mGridSize + this.useValue.mGap;
                    right = left + this.useValue.mGridSize;
                    bottom = top + this.useValue.mGridSize;
                } else {
                    left = this.getPaddingLeft() + this.useValue.mGridSize + this.useValue.mGap;
                    top = this.getPaddingTop() + this.useValue.mGridSize + this.useValue.mGap;
                    right = left + this.useValue.mGridSize;
                    bottom = top + this.useValue.mGridSize;
                }
                this.useValue.imgDatas[i].positionX = left;
                this.useValue.imgDatas[i].positionY = top;
                this.useValue.imgDatas[i].width = right - left;
                this.useValue.imgDatas[i].height = bottom - top;
            } else if (this.useValue.spanType == 3) {
                if (i == 0) {
                    left = this.getPaddingLeft();
                    top = this.getPaddingTop();
                    right = left + this.useValue.mGridSize;
                    bottom = top + this.useValue.mGridSize;
                } else if (i == 1) {
                    left = this.getPaddingLeft() + this.useValue.mGridSize + this.useValue.mGap;
                    top = this.getPaddingTop();
                    right = left + this.useValue.mGridSize;
                    bottom = top + this.useValue.mGridSize;
                } else {
                    left = this.getPaddingLeft();
                    top = this.getPaddingTop() + this.useValue.mGridSize + this.useValue.mGap;
                    right = left + this.useValue.mGridSize * 2 + this.useValue.mGap;
                    bottom = top + this.useValue.mGridSize;
                }

                this.useValue.imgDatas[i].positionX = left;
                this.useValue.imgDatas[i].positionY = top;
                this.useValue.imgDatas[i].width = right - left;
                this.useValue.imgDatas[i].height = bottom - top;

            } else if (this.useValue.spanType == 4) {
                if (i == 0) {
                    left = this.getPaddingLeft();
                    top = this.getPaddingTop();
                    right = left + this.useValue.mGridSize;
                    bottom = top + this.useValue.mGridSize * 2 + this.useValue.mGap;
                } else if (i == 1) {
                    left = this.getPaddingLeft() + this.useValue.mGridSize + this.useValue.mGap;
                    top = this.getPaddingTop();
                    right = left + this.useValue.mGridSize;
                    bottom = top + this.useValue.mGridSize;
                } else {
                    left = this.getPaddingLeft() + this.useValue.mGridSize + this.useValue.mGap;
                    top = this.getPaddingTop() + this.useValue.mGridSize + this.useValue.mGap;
                    right = left + this.useValue.mGridSize;
                    bottom = top + this.useValue.mGridSize;
                }

                this.useValue.imgDatas[i].positionX = left;
                this.useValue.imgDatas[i].positionY = top;
                this.useValue.imgDatas[i].width = right - left;
                this.useValue.imgDatas[i].height = bottom - top;

            }

        }
    },
    layoutForFourChildrenView(childrenCount) {
        let left;
        let top;
        let right;
        let bottom;
        for (let i = 0; i < childrenCount; i++) {

            if (this.useValue.spanType == 2) {
                // 3行3列,首行跨2行3列
                if (i == 0) {
                    left = this.getPaddingLeft();
                    top = this.getPaddingTop();
                    right = left + this.useValue.mGridSize * 3 + this.useValue.mGap * 2;
                    bottom = top + this.useValue.mGridSize * 2 + this.useValue.mGap;
                } else if (i == 1) {
                    left = this.getPaddingLeft();
                    top = this.getPaddingTop() + this.useValue.mGridSize * 2 + this.useValue.mGap * 2;
                    right = left + this.useValue.mGridSize;
                    bottom = top + this.useValue.mGridSize;
                } else if (i == 2) {
                    left = this.getPaddingLeft() + this.useValue.mGridSize + this.useValue.mGap;
                    top = this.getPaddingTop() + this.useValue.mGridSize * 2 + this.useValue.mGap * 2;
                    right = left + this.useValue.mGridSize;
                    bottom = top + this.useValue.mGridSize;
                } else {
                    left = this.getPaddingLeft() + this.useValue.mGridSize * 2 + this.useValue.mGap * 2;
                    top = this.getPaddingTop() + this.useValue.mGridSize * 2 + this.useValue.mGap * 2;
                    right = left + this.useValue.mGridSize;
                    bottom = top + this.useValue.mGridSize;
                }
                this.useValue.imgDatas[i].positionX = left;
                this.useValue.imgDatas[i].positionY = top;
                this.useValue.imgDatas[i].width = right - left;
                this.useValue.imgDatas[i].height = bottom - top;
            } else if (this.useValue.spanType == 3) {
                // 3行3列,末行跨2行3列
                if (i == 0) {
                    left = this.getPaddingLeft();
                    top = this.getPaddingTop();
                    right = left + this.useValue.mGridSize;
                    bottom = top + this.useValue.mGridSize;
                } else if (i == 1) {
                    left = this.getPaddingLeft() + this.useValue.mGridSize + this.useValue.mGap;
                    top = this.getPaddingTop();
                    right = left + this.useValue.mGridSize;
                    bottom = top + this.useValue.mGridSize;
                } else if (i == 2) {
                    left = this.getPaddingLeft() + this.useValue.mGridSize * 2 + this.useValue.mGap * 2;
                    top = this.getPaddingTop();
                    right = left + this.useValue.mGridSize;
                    bottom = top + this.useValue.mGridSize;
                } else {
                    left = this.getPaddingLeft();
                    top = this.getPaddingTop() + this.useValue.mGridSize + this.useValue.mGap;
                    right = left + this.useValue.mGridSize * 3 + this.useValue.mGap * 2;
                    bottom = top + this.useValue.mGridSize * 2 + this.useValue.mGap;
                }
                this.useValue.imgDatas[i].positionX = left;
                this.useValue.imgDatas[i].positionY = top;
                this.useValue.imgDatas[i].width = right - left;
                this.useValue.imgDatas[i].height = bottom - top;
            } else if (this.useValue.spanType == 4) {
                // 3行3列,首列跨3行2列
                if (i == 0) {
                    left = this.getPaddingLeft();
                    top = this.getPaddingTop();
                    right = left + this.useValue.mGridSize * 2 + this.useValue.mGap;
                    bottom = top + this.useValue.mGridSize * 3 + this.useValue.mGap * 2;
                } else if (i == 1) {
                    left = this.getPaddingLeft() + this.useValue.mGridSize * 2 + this.useValue.mGap * 2;
                    top = this.getPaddingTop();
                    right = left + this.useValue.mGridSize;
                    bottom = top + this.useValue.mGridSize;
                } else if (i == 2) {
                    left = this.getPaddingLeft() + this.useValue.mGridSize * 2 + this.useValue.mGap * 2;
                    top = this.getPaddingTop() + this.useValue.mGridSize + this.useValue.mGap;
                    right = left + this.useValue.mGridSize;
                    bottom = top + this.useValue.mGridSize;
                } else {
                    left = this.getPaddingLeft() + this.useValue.mGridSize * 2 + this.useValue.mGap * 2;
                    top = this.getPaddingTop() + this.useValue.mGridSize * 2 + this.useValue.mGap * 2;
                    right = left + this.useValue.mGridSize;
                    bottom = top + this.useValue.mGridSize;
                }
                this.useValue.imgDatas[i].positionX = left;
                this.useValue.imgDatas[i].positionY = top;
                this.useValue.imgDatas[i].width = right - left;
                this.useValue.imgDatas[i].height = bottom - top;
            }
        }
    },
    layoutForFiveChildrenView(childrenCount) {
        let left;
        let top;
        let right;
        let bottom;

        for (let i = 0; i < childrenCount; i++) {
            if (this.useValue.spanType == 2) { // 3行3列,首行跨2行,2列跨3列
                if (i == 0) {
                    left = this.getPaddingLeft();
                    top = this.getPaddingTop();
                    right = left + (this.useValue.mGridSize * 3 + this.useValue.mGap) / 2;
                    bottom = top + this.useValue.mGridSize * 2 + this.useValue.mGap;
                } else if (i == 1) {
                    left = this.getPaddingLeft() + (this.useValue.mGridSize * 3 + this.useValue.mGap) / 2 + this.useValue.mGap;
                    top = this.getPaddingTop();
                    right = left + (this.useValue.mGridSize * 3 + this.useValue.mGap) / 2;
                    bottom = top + this.useValue.mGridSize * 2 + this.useValue.mGap;
                } else if (i == 2) {
                    left = this.getPaddingLeft();
                    top = this.getPaddingTop() + this.useValue.mGridSize * 2 + this.useValue.mGap * 2;
                    right = left + this.useValue.mGridSize;
                    bottom = top + this.useValue.mGridSize;
                } else if (i == 3) {
                    left = this.getPaddingLeft() + this.useValue.mGridSize + this.useValue.mGap;
                    top = this.getPaddingTop() + this.useValue.mGridSize * 2 + this.useValue.mGap * 2;
                    right = left + this.useValue.mGridSize;
                    bottom = top + this.useValue.mGridSize;
                } else {
                    left = this.getPaddingLeft() + this.useValue.mGridSize * 2 + this.useValue.mGap * 2;
                    top = this.getPaddingTop() + this.useValue.mGridSize * 2 + this.useValue.mGap * 2;
                    right = left + this.useValue.mGridSize;
                    bottom = top + this.useValue.mGridSize;
                }
                this.useValue.imgDatas[i].positionX = left;
                this.useValue.imgDatas[i].positionY = top;
                this.useValue.imgDatas[i].width = right - left;
                this.useValue.imgDatas[i].height = bottom - top;
            } else if (this.useValue.spanType == 3) { // 3行3列,末行跨2行,2列跨3列
                if (i == 0) {
                    left = this.getPaddingLeft();
                    top = this.getPaddingTop();
                    right = left + this.useValue.mGridSize;
                    bottom = top + this.useValue.mGridSize;
                } else if (i == 1) {
                    left = this.getPaddingLeft() + this.useValue.mGridSize + this.useValue.mGap;
                    top = this.getPaddingTop();
                    right = left + this.useValue.mGridSize;
                    bottom = top + this.useValue.mGridSize;
                } else if (i == 2) {
                    left = this.getPaddingLeft() + this.useValue.mGridSize * 2 + this.useValue.mGap * 2;
                    top = this.getPaddingTop();
                    right = left + this.useValue.mGridSize;
                    bottom = top + this.useValue.mGridSize;
                } else if (i == 3) {
                    left = this.getPaddingLeft();
                    top = this.getPaddingTop() + this.useValue.mGridSize + this.useValue.mGap;
                    right = left + (this.useValue.mGridSize * 3 + this.useValue.mGap) / 2;
                    bottom = top + this.useValue.mGridSize * 2 + this.useValue.mGap;
                } else {
                    left = this.getPaddingLeft() + (this.useValue.mGridSize * 3 + this.useValue.mGap) / 2 + this.useValue.mGap;
                    top = this.getPaddingTop() + this.useValue.mGridSize + this.useValue.mGap;
                    right = left + (this.useValue.mGridSize * 3 + this.useValue.mGap) / 2;
                    bottom = top + this.useValue.mGridSize * 2 + this.useValue.mGap;
                }
                this.useValue.imgDatas[i].positionX = left;
                this.useValue.imgDatas[i].positionY = top;
                this.useValue.imgDatas[i].width = right - left;
                this.useValue.imgDatas[i].height = bottom - top;
            } else if (this.useValue.spanType == 4) { // 3行3列,2行跨3行，1列
                if (i == 0) {
                    left = this.getPaddingLeft();
                    top = this.getPaddingTop();
                    right = left + this.useValue.mGridSize * 2 + this.useValue.mGap;
                    bottom = top + (this.useValue.mGridSize * 3 + this.useValue.mGap) / 2;
                } else if (i == 1) {
                    left = this.getPaddingLeft();
                    top = this.getPaddingTop() + (this.useValue.mGridSize * 3 + this.useValue.mGap) / 2 + this.useValue.mGap;
                    right = left + this.useValue.mGridSize * 2 + this.useValue.mGap;
                    bottom = top + (this.useValue.mGridSize * 3 + this.useValue.mGap) / 2;
                } else if (i == 2) {
                    left = this.getPaddingLeft() + this.useValue.mGridSize * 2 + this.useValue.mGap * 2;
                    top = this.getPaddingTop();
                    right = left + this.useValue.mGridSize;
                    bottom = top + this.useValue.mGridSize;
                } else if (i == 3) {
                    left = this.getPaddingLeft() + this.useValue.mGridSize * 2 + this.useValue.mGap * 2;
                    top = this.getPaddingTop() + this.useValue.mGridSize + this.useValue.mGap;
                    right = left + this.useValue.mGridSize;
                    bottom = top + this.useValue.mGridSize;
                } else {
                    left = this.getPaddingLeft() + this.useValue.mGridSize * 2 + this.useValue.mGap * 2;
                    top = this.getPaddingTop() + this.useValue.mGridSize * 2 + this.useValue.mGap * 2;
                    right = left + this.useValue.mGridSize;
                    bottom = top + this.useValue.mGridSize;
                }
                this.useValue.imgDatas[i].positionX = left;
                this.useValue.imgDatas[i].positionY = top;
                this.useValue.imgDatas[i].width = right - left;
                this.useValue.imgDatas[i].height = bottom - top;
            }

        }
    },
    layoutForSixChildrenView(childrenCount) {
        let left;
        let top;
        let right;
        let bottom;
        for (let i = 0; i < childrenCount; i++) {
            if (this.useValue.spanType == 2) { // 3行3列,第一张跨2行2列
                if (i == 0) {
                    left = this.getPaddingLeft();
                    top = this.getPaddingTop();
                    right = left + this.useValue.mGridSize * 2 + this.useValue.mGap;
                    bottom = top + this.useValue.mGridSize * 2 + this.useValue.mGap;
                } else if (i == 1) {
                    left = this.getPaddingLeft() + this.useValue.mGridSize * 2 + this.useValue.mGap * 2;
                    top = this.getPaddingTop();
                    right = left + this.useValue.mGridSize;
                    bottom = top + this.useValue.mGridSize;
                } else if (i == 2) {
                    left = this.getPaddingLeft() + this.useValue.mGridSize * 2 + this.useValue.mGap * 2;
                    top = this.getPaddingTop() + this.useValue.mGridSize + this.useValue.mGap;
                    right = left + this.useValue.mGridSize;
                    bottom = top + this.useValue.mGridSize;
                } else if (i == 3) {
                    left = this.getPaddingLeft();
                    top = this.getPaddingTop() + this.useValue.mGridSize * 2 + this.useValue.mGap * 2;
                    right = left + this.useValue.mGridSize;
                    bottom = top + this.useValue.mGridSize;
                } else if (i == 4) {
                    left = this.getPaddingLeft() + this.useValue.mGridSize + this.useValue.mGap;
                    top = this.getPaddingTop() + this.useValue.mGridSize * 2 + this.useValue.mGap * 2;
                    right = left + this.useValue.mGridSize;
                    bottom = top + this.useValue.mGridSize;
                } else {
                    left = this.getPaddingLeft() + this.useValue.mGridSize * 2 + this.useValue.mGap * 2;
                    top = this.getPaddingTop() + this.useValue.mGridSize * 2 + this.useValue.mGap * 2;
                    right = left + this.useValue.mGridSize;
                    bottom = top + this.useValue.mGridSize;
                }
                this.useValue.imgDatas[i].positionX = left;
                this.useValue.imgDatas[i].positionY = top;
                this.useValue.imgDatas[i].width = right - left;
                this.useValue.imgDatas[i].height = bottom - top;
            } else if (this.useValue.spanType == 3) { // 3行3列,第4张跨2行2列
                if (i == 0) {
                    left = this.getPaddingLeft();
                    top = this.getPaddingTop();
                    right = left + this.useValue.mGridSize;
                    bottom = top + this.useValue.mGridSize;
                } else if (i == 1) {
                    left = this.getPaddingLeft() + this.useValue.mGridSize + this.useValue.mGap;
                    top = this.getPaddingTop();
                    right = left + this.useValue.mGridSize;
                    bottom = top + this.useValue.mGridSize;
                } else if (i == 2) {
                    left = this.getPaddingLeft() + this.useValue.mGridSize * 2 + this.useValue.mGap * 2;
                    top = this.getPaddingTop();
                    right = left + this.useValue.mGridSize;
                    bottom = top + this.useValue.mGridSize;
                } else if (i == 3) {
                    left = this.getPaddingLeft();
                    top = this.getPaddingTop() + this.useValue.mGridSize + this.useValue.mGap;
                    right = left + this.useValue.mGridSize * 2 + this.useValue.mGap;
                    bottom = top + this.useValue.mGridSize * 2 + this.useValue.mGap;
                } else if (i == 4) {
                    left = this.getPaddingLeft() + this.useValue.mGridSize * 2 + this.useValue.mGap * 2;
                    top = this.getPaddingTop() + this.useValue.mGridSize + this.useValue.mGap;
                    right = left + this.useValue.mGridSize;
                    bottom = top + this.useValue.mGridSize;
                } else {
                    left = this.getPaddingLeft() + this.useValue.mGridSize * 2 + this.useValue.mGap * 2;
                    top = this.getPaddingTop() + this.useValue.mGridSize * 2 + this.useValue.mGap * 2;
                    right = left + this.useValue.mGridSize;
                    bottom = top + this.useValue.mGridSize;
                }
                this.useValue.imgDatas[i].positionX = left;
                this.useValue.imgDatas[i].positionY = top;
                this.useValue.imgDatas[i].width = right - left;
                this.useValue.imgDatas[i].height = bottom - top;
            } else if (this.useValue.spanType == 4) { // 3行3列,第2张跨2行2列
                if (i == 0) {
                    left = this.getPaddingLeft();
                    top = this.getPaddingTop();
                    right = left + this.useValue.mGridSize;
                    bottom = top + this.useValue.mGridSize;
                } else if (i == 1) {
                    left = this.getPaddingLeft() + this.useValue.mGridSize + this.useValue.mGap;
                    top = this.getPaddingTop();
                    right = left + this.useValue.mGridSize * 2 + this.useValue.mGap;
                    bottom = top + this.useValue.mGridSize * 2 + this.useValue.mGap;
                } else if (i == 2) {
                    left = this.getPaddingLeft();
                    top = this.getPaddingTop() + this.useValue.mGridSize + this.useValue.mGap;
                    right = left + this.useValue.mGridSize;
                    bottom = top + this.useValue.mGridSize;
                } else if (i == 3) {
                    left = this.getPaddingLeft();
                    top = this.getPaddingTop() + this.useValue.mGridSize * 2 + this.useValue.mGap * 2;
                    right = left + this.useValue.mGridSize;
                    bottom = top + this.useValue.mGridSize;
                } else if (i == 4) {
                    left = this.getPaddingLeft() + this.useValue.mGridSize + this.useValue.mGap;
                    top = this.getPaddingTop() + this.useValue.mGridSize * 2 + this.useValue.mGap * 2;
                    right = left + this.useValue.mGridSize;
                    bottom = top + this.useValue.mGridSize;
                } else {
                    left = this.getPaddingLeft() + this.useValue.mGridSize * 2 + this.useValue.mGap * 2;
                    top = this.getPaddingTop() + this.useValue.mGridSize * 2 + this.useValue.mGap * 2;
                    right = left + this.useValue.mGridSize;
                    bottom = top + this.useValue.mGridSize;
                }
                this.useValue.imgDatas[i].positionX = left;
                this.useValue.imgDatas[i].positionY = top;
                this.useValue.imgDatas[i].width = right - left;
                this.useValue.imgDatas[i].height = bottom - top;
            }
        }
    },
    getPaddingLeft() {
        return 0;
    },
    getPaddingTop() {
        return 0;
    },
    getPaddingRight() {
        return 0;
    },
    getPaddingBottom() {
        return 0;
    },
    onReady() {
        console.info("nine grid view onReady");

    },
    onLayoutJustFirst() {

        this.isFullStyle =  ((
            this.itemValue.spanType == 1 ||
            this.itemValue.spanType == 2 ||
            this.itemValue.spanType == 3 ||
            this.itemValue.spanType == 4
        )&&(this.itemValue.showType == 2));
        this.isGridStyle =  ((
            this.itemValue.spanType == 1
        )&&(this.itemValue.showType == 1));

        console.info("dodo=>"+ "this.isFullStyle ="+this.isFullStyle +"  this.isGridStyle = " +this.isGridStyle)


        var ninegrid = this;
        var ninegriditem = this.$element("ninegriditem");
        //        console.info(JSON.stringify(ninegriditem));
        console.info(
            "left =" + ninegriditem.getBoundingClientRect().left +
            "top =" + ninegriditem.getBoundingClientRect().top +
            "width =" + ninegriditem.getBoundingClientRect().width +
            "height =" + ninegriditem.getBoundingClientRect().height
        )



        if (this.itemValue.mMaxSize) {
            //设置用户手动设置最大图片数量
            this.mMaxSize = this.itemValue.mMaxSize;
        }


        let gridParam = this.calculateGridParam(this.itemValue.imgDatas.length, this.itemValue.showType);
        this.mRowCount = gridParam[0];
        this.mColumnCount = gridParam[1];
        console.info(
            "gridParam[0] =" + gridParam[0] +
            "gridParam[1] =" + gridParam[1]
        )


        //使用值 从 外部传入值获取

        ninegrid.useValue = ninegrid.itemValue;


        if (!ninegrid.useValue.mGap) {
            ninegrid.useValue.mGap = 0;
        }
        console.info(JSON.stringify(ninegrid.useValue));
        var measureChild = function () {
            if (!ninegrid.useValue.imgDatas) {
                //数组为空不考虑
                prompt.showToast({
                    message: "传入数据为空，无法测量。",
                    duration: 1000
                });
                return;
            }
            var urls = ninegrid.itemValue.imgDatas

            var itemWidth = ninegriditem.getBoundingClientRect().width;
            var itemHeight = ninegriditem.getBoundingClientRect().height;
            console.info(
                "itemWidth = " + itemWidth +
                "itemHeight = " + itemHeight
            )
            //计算每张图片占比
                ninegrid.useValue.mGridSize = (itemWidth - ninegrid.useValue.mGap * (ninegrid.mColumnCount - 1)) / (ninegrid.mColumnCount * 1.0);
                console.info("ninegrid.useValue.mGridSize =" + ninegrid.useValue.mGridSize);
                ninegrid.mNineGridWidth = itemWidth;
                ninegrid.mNineGridHeight = ninegrid.useValue.mGridSize * ninegrid.mRowCount + ninegrid.useValue.mGap * (ninegrid.mRowCount - 1);

            console.info(
                "ninegrid.mNineGridWidth = " + ninegrid.mNineGridWidth +
                "ninegrid.mNineGridHeight = " + ninegrid.mNineGridHeight
            )
        };

        var layoutChild = function () {
            if (!ninegrid.useValue.imgDatas) {
                //数组为空不考虑
                prompt.showToast({
                    message: "传入数据为空，无法布局。",
                    duration: 1000
                });
                return;
            }
            let showChildrenCount = ninegrid.getNeedShowCount(ninegrid.useValue.imgDatas.length);
            console.info("dodo=》" + showChildrenCount);

            if (ninegrid.useValue.spanType == 1 || showChildrenCount <= 2) {
                ninegrid.layoutForNoSpanChildrenView(showChildrenCount);
                //布局结束后赋值
                ninegrid.dataCopyNative(ninegrid);
                return;
            }


            if (showChildrenCount == 3) {
                ninegrid.layoutForThreeChildrenView(showChildrenCount);
            } else if (showChildrenCount == 4) {
                ninegrid.layoutForFourChildrenView(showChildrenCount);
            } else if (showChildrenCount == 5) {
                ninegrid.layoutForFiveChildrenView(showChildrenCount);
            } else if (showChildrenCount == 6) {
                ninegrid.layoutForSixChildrenView(showChildrenCount);
            } else {
                ninegrid.layoutForNoSpanChildrenView(showChildrenCount);
            }
            //布局结束后赋值
            ninegrid.dataCopyNative(ninegrid);
        }
        measureChild();
        layoutChild();




    },

    dataCopyNative(ninegrid){
        this.content = ninegrid.useValue.content;
        this.imgDatas = ninegrid.useValue.imgDatas;

        console.info("dodo===>" + JSON.stringify(this.imgDatas))
        console.info("========>" + JSON.stringify(ninegrid.useValue));

        for (let i = 0;i < this.imgDatas.length; i++) {
//            this.showMask[i] = false;
            this.imgDatas.showMask = true;
        }
    },


    itemClick1(index, value) {
        console.info("itemClick()");
        console.info("index =" + index + "  itemIndex =" +  this.itemIndex+
        "   value = " + JSON.stringify(value)
        )
        value.itemIndex = this.itemIndex;
        value.index = index;
        value.name = "itemClick1"
        this.$emit('itemPress1', value);
    },
    itemLongPress1(index, value) {
        console.info("itemLongpress1");
        console.info("index =" + index + "  itemIndex =" +  this.itemIndex+
        "   value = " + JSON.stringify(value)
        )
        value.itemIndex = this.itemIndex;
        value.index = index;
        value.name = "itemLongPress1"
        this.$emit('itemPress1', value);


    }
}
