# set-html-lang-en
(Chrome Extension) Right click on any web page to force set `lang` attribute of root `html` element to `en`

Solves the problem of incorrect font choosing under default font setting of Chrome under Windows. Recommend to be used with [Advanced Font Settings](https://chrome.google.com/webstore/detail/advanced-font-settings/caclkomlalccbpcdllchkeecicepbmbm).


一键设置 HTML tag 的 `lang` 属性 为 en。

解决的问题：Chrome 默认选择的无衬线字体为微软雅黑，会造成单引号全宽显示，阅读英文文章时多有不便。使用 [Advanced Font Settings](https://chrome.google.com/webstore/detail/advanced-font-settings/caclkomlalccbpcdllchkeecicepbmbm) 插件，可以设定英文所属的书写系统（`Latin`）的无衬线字体为 Arial。但部分英文网页缺失 HTML 元素的 `lang` 属性，导致 Chrome 无法判断网页语言，从而回落到默认的无衬线字体设定。本插件在右键菜单中新增一项，点击即可设定当前网页的 `lang` 为 `en`，以强制 Chrome 调用适用于英文的正确字体，并显示单引号为半宽。

## Usage
1. Clone & Unzip
2. Chrome - Extension - Load Uncompressed Extension
3. Right click on any page, choose "Set html lang to en"
