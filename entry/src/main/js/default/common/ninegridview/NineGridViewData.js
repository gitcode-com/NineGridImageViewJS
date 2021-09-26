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

class NineGridViewData {

    constructor(opt={}) {
        this.opt = opt;
        this.defaultSetting =
        {
            content: "",
            showType: 1, //1 宫格布局  2 全填充布局
            mMaxSize: 9, //最大图片数量
            mGridSize: 360, //图片的Size
            mGap: 1, //图片之间间距
            spanType: 1,
            imgDatas: [
                {
                    imageUrls: "/common/photos/photo1.jpg",
                    positionX: 0,
                    positionY: 0,
                    width: 0,
                    height: 0
                },
            ],
        }

        this.content = this.defaultSetting.content;
        if(this.opt.content){
            this.content = this.opt.content
        }
        this.showType = this.defaultSetting.showType;
        if(this.opt.showType){
            this.showType = this.opt.showType
        }
        this.mMaxSize = this.defaultSetting.mMaxSize;
        if(this.opt.mMaxSize){
            this.mMaxSize = this.opt.mMaxSize
        }
        this.mGridSize = this.defaultSetting.mGridSize;
        if(this.opt.mGridSize){
            this.mGridSize = this.opt.mGridSize
        }
        this.mGap = this.defaultSetting.mGap;
        if(this.opt.mGap){
            this.mGap = this.opt.mGap
        }
        this.spanType = this.defaultSetting.spanType;
        if(this.opt.spanType){
            this.spanType = this.opt.spanType
        }
        this.imgDatas = this.defaultSetting.imgDatas;
        if(this.opt.imgDatas){
            this.imgDatas = this.opt.imgDatas
        }

    };
}

export {
    NineGridViewData
}
