(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{454:function(t,a,s){"use strict";s.r(a);var e=s(54),_=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"更新日志-6-0-x"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#更新日志-6-0-x"}},[t._v("#")]),t._v(" 更新日志（6.0.x）")]),t._v(" "),s("p",[t._v("本文件的格式基于"),s("a",{attrs:{href:"https://keepachangelog.com/zh-CN/1.0.0",target:"_blank",rel:"noopener noreferrer"}},[t._v("如何维护更新日志"),s("OutboundLink")],1),t._v("，\n并且本项目遵守"),s("a",{attrs:{href:"https://semver.org/lang/zh-CN/spec/v2.0.0.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("语义化版本"),s("OutboundLink")],1),t._v("。")]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("何为「不兼容的修改」？")]),t._v(" "),s("ul",[s("li",[t._v("原有的配置文件可能无法使用，比如删除或者重命名了某个配置项。")]),t._v(" "),s("li",[t._v("可能需要更新编译环境，比如安装新的依赖。")])])]),t._v(" "),s("h2",{attrs:{id:"_6-0-3-2021-08-02-utc-0800"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_6-0-3-2021-08-02-utc-0800"}},[t._v("#")]),t._v(" [6.0.3] - 2021-08-02 UTC+0800")]),t._v(" "),s("h3",{attrs:{id:"修复"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#修复"}},[t._v("#")]),t._v(" 修复")]),t._v(" "),s("ul",[s("li",[t._v("释放虚拟机资源时可能会引起段错误。")])]),t._v(" "),s("hr"),t._v(" "),s("h2",{attrs:{id:"_6-0-2-2021-08-01-utc-0800"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_6-0-2-2021-08-01-utc-0800"}},[t._v("#")]),t._v(" [6.0.2] - 2021-08-01 UTC+0800")]),t._v(" "),s("h3",{attrs:{id:"修复-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#修复-2"}},[t._v("#")]),t._v(" 修复")]),t._v(" "),s("ul",[s("li",[t._v("未能正确继承上层配置中的 URL 和 Referer 的白名单。")])]),t._v(" "),s("hr"),t._v(" "),s("h2",{attrs:{id:"_6-0-1-2021-07-30-utc-0800"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_6-0-1-2021-07-30-utc-0800"}},[t._v("#")]),t._v(" [6.0.1] - 2021-07-30 UTC+0800")]),t._v(" "),s("h3",{attrs:{id:"弃用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#弃用"}},[t._v("#")]),t._v(" 弃用")]),t._v(" "),s("ul",[s("li",[t._v("弃用了 "),s("code",[t._v("waf_cache")]),t._v(" 配置的 "),s("code",[t._v("interval")]),t._v(" 和 "),s("code",[t._v("percent")]),t._v(" 参数，但并未将它们删除，只是它们不再有任何作用。这两个参数会在后续的某个版本删除。")])]),t._v(" "),s("h3",{attrs:{id:"变动"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#变动"}},[t._v("#")]),t._v(" 变动")]),t._v(" "),s("ul",[s("li",[t._v("提升了 CC 防护的性能。")])]),t._v(" "),s("h3",{attrs:{id:"修复-3"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#修复-3"}},[t._v("#")]),t._v(" 修复")]),t._v(" "),s("ul",[s("li",[t._v("极端情况下可能会造成大量的内存浪费，感谢 "),s("a",{attrs:{href:"https://github.com/RekGRpth",target:"_blank",rel:"noopener noreferrer"}},[t._v("@RekGRpth"),s("OutboundLink")],1),t._v("。")])]),t._v(" "),s("hr"),t._v(" "),s("h2",{attrs:{id:"_6-0-0-2021-07-21-utc-0800"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_6-0-0-2021-07-21-utc-0800"}},[t._v("#")]),t._v(" [6.0.0] - 2021-07-21 UTC+0800")]),t._v(" "),s("h3",{attrs:{id:"注意"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#注意"}},[t._v("#")]),t._v(" 注意")]),t._v(" "),s("ul",[s("li",[s("p",[s("strong",[t._v("本次更新有一些不向下兼容的改动。")])])]),t._v(" "),s("li",[s("p",[t._v("高级规则的执行速度较慢，因为其原理是将规则编译成一系列指令，然后由虚拟机执行。")])])]),t._v(" "),s("h3",{attrs:{id:"预构建模块"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#预构建模块"}},[t._v("#")]),t._v(" 预构建模块")]),t._v(" "),s("p",[t._v("现在我们提供了提前编译好的模块，只要满足了下列要求即可使用。")]),t._v(" "),s("ol",[s("li",[t._v("nginx 的版本必须是最新的 stable 或 mainline 版本。")]),t._v(" "),s("li",[t._v("您使用的 C 语言的标准库实现必须是 GNU 实现或者 musl 实现。")])]),t._v(" "),s("blockquote",[s("p",[t._v("下载脚本会自动检查是否满足第二个条件。")])]),t._v(" "),s("p",[t._v("您可以执行 "),s("code",[t._v("assets/download.sh")]),t._v(" 来下载对应版本的模块并保存到当前目录。下面是用例。")]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# nginx-stable ngx_waf-stable")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sh")]),t._v(" assets/download stable stable\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# nginx-mainline ngx_waf-stable")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sh")]),t._v(" assets/download mainline stable\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# nginx-stable ngx_waf-beta")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sh")]),t._v(" assets/download stable beta\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# nginx-mainline ngx_waf-beta")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sh")]),t._v(" assets/download mainline beta\n")])])]),s("blockquote",[s("p",[t._v("每次更新都需要花费约一个半小时的时间来编译模块，所以推荐在更新超过两个小时后再下载更新后的模块，否则可能会下载到旧的模块。")])]),t._v(" "),s("h3",{attrs:{id:"从-5-x-x-升级到-6-x-x"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#从-5-x-x-升级到-6-x-x"}},[t._v("#")]),t._v(" 从 5.x.x 升级到 6.x.x")]),t._v(" "),s("ol",[s("li",[t._v("在规则目录下新建一个名为 "),s("code",[t._v("advanced")]),t._v(" 的空文件。")]),t._v(" "),s("li",[t._v("如果使用了配置项 "),s("code",[t._v("waf_priority")]),t._v("，可以将其删除或者按照文档中对该配置项的说明进行修改。")])]),t._v(" "),s("h3",{attrs:{id:"新增"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#新增"}},[t._v("#")]),t._v(" 新增")]),t._v(" "),s("ul",[s("li",[t._v("支持了高级规则，详情见文档。")])]),t._v(" "),s("h3",{attrs:{id:"移除"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#移除"}},[t._v("#")]),t._v(" 移除")]),t._v(" "),s("ul",[s("li",[t._v("移除 "),s("code",[t._v("COMPAT")]),t._v(" 模式，不再完全兼容 "),s("code",[t._v("ngx_http_rewrite_module")]),t._v("。")])]),t._v(" "),s("h3",{attrs:{id:"变动-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#变动-2"}},[t._v("#")]),t._v(" 变动")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("更新了配置项 "),s("code",[t._v("waf_priority")]),t._v("，详情见文档。")])]),t._v(" "),s("li",[s("p",[t._v("现在你可以在 "),s("code",[t._v("http")]),t._v("、"),s("code",[t._v("server")]),t._v(" 和 "),s("code",[t._v("location")]),t._v(" 块中使用本模块的所有配置项。")])])])])}),[],!1,null,null,null);a.default=_.exports}}]);