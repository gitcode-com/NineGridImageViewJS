# NineGridImageViewJS

- 自定义控件 , 用来展示九宫格照片, 就像微博图片和微信朋友圈图片展示一样

#### 效果演示

<img src="screenshot/1.gif" width="50%"/>

<img src="screenshot/2.png" width="50%"/>

<img src="screenshot/3.png" width="50%"/>

#### 使用说明

1.在hml注入自定义组件

```javascript
<element name='ninegridview' src='../../common/ninegridview/NineGridView.hml'></element>
```

2.hml中注入相关数据 事件

```javascript
<element name='ninegridview' src='../page2/NineGridView.hml'></element>
<div class="container">
    <list style="background-color : aquamarine;" divider="true" cachedcount="20"  >
        <block for="{{ listBean }}">
            <list-item class="item" style="width: 100%;min-height: 0px;"   >
                <ninegridview item-value ="{{$item}}"
                              item-index="{{$idx}}"
                              @item-press1="itemPressNineGrid"
                        ></ninegridview>
            </list-item>
        </block>
    </list>
</div>
```

3.在js中写入数据和事件

```javascript
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
        ]
    },
               
```

```javascript
itemPressNineGrid(value) {
        console.info("itemPressNineGrid");
        var name = value.detail.name + "itemIndex =" + value.detail.itemIndex + "  index =" + value.detail.index;
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
```

## 实现思路

  通过用户设置的NineGridViewData类型参数，然后在自定义组件中计算好位置，布局，最后展示出来照片排列效果。

## entry运行要求

SDK 6+

## LICENSE

```
Copyright (c) 2021 ZhouLisheng
NineGridImageViewJS is licensed under Mulan PSL v2.
You can use this software according to the terms and conditions of the Mulan PSL v2.
You may obtain a copy of Mulan PSL v2 at:
         http://license.coscl.org.cn/MulanPSL2
THIS SOFTWARE IS PROVIDED ON AN "AS IS" BASIS, WITHOUT WARRANTIES OF ANY KIND,
EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO NON-INFRINGEMENT,
MERCHANTABILITY OR FIT FOR A PARTICULAR PURPOSE.
See the Mulan PSL v2 for more details.
```