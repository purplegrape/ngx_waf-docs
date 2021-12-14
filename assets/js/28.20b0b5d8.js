(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{432:function(t,s,e){"use strict";e.r(s);var a=e(54),n=Object(a.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"test"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#test"}},[t._v("#")]),t._v(" Test")]),t._v(" "),e("h2",{attrs:{id:"quick-test"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#quick-test"}},[t._v("#")]),t._v(" Quick Test")]),t._v(" "),e("p",[t._v("Run the following command, if the output is 403 then the module is working properly.")]),t._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" -I -o /dev/null --user-agent bench -s -w "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"%{http_code}'),e("span",{pre:!0,attrs:{class:"token entity",title:"\\\\"}},[t._v("\\\\")]),t._v('n"')]),t._v(" https://example.com/\n")])])]),e("h2",{attrs:{id:"automated-testing"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#automated-testing"}},[t._v("#")]),t._v(" Automated Testing")]),t._v(" "),e("p",[t._v("This project comes with many test cases.")]),t._v(" "),e("p",[t._v("To run it on your side:")]),t._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("## It will take a lot of time, but it only needs to be run once.")]),t._v("\ncpan Test::Nginx\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# You need to specify a temporary directory.")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# If the directory does not exist it will be created automatically.")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# If the directory already exists it will be **removed** first and then created.")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("export")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("MODULE_TEST_PATH")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("/path/to/temp/dir\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# You need to specify the absolute path to the dynamic module if you have it installed, ")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# otherwise you do not need to run this line.")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("export")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("MODULE_PATH")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("/path/to/ngx_http_waf_module.so\n\n"),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(".")]),t._v(" /test/test-nginx\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("sh")]),t._v(" ./init.sh\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("sh")]),t._v(" ./start.sh ./t/*.t\n")])])]),e("p",[t._v("Normally all cases will pass, if not please let us know.")]),t._v(" "),e("h2",{attrs:{id:"performance-test"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#performance-test"}},[t._v("#")]),t._v(" Performance Test")]),t._v(" "),e("h3",{attrs:{id:"example-test"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#example-test"}},[t._v("#")]),t._v(" Example Test")]),t._v(" "),e("h4",{attrs:{id:"test-description"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#test-description"}},[t._v("#")]),t._v(" Test Description")]),t._v(" "),e("ul",[e("li",[t._v("ngx_waf v5.1.1.")]),t._v(" "),e("li",[t._v("Approximately 210,000 IPV4 whitelist rules were used.")]),t._v(" "),e("li",[t._v("About 210,000 IPV4 blacklist rules were used.")]),t._v(" "),e("li",[t._v("Approximately 48,000 IPV6 whitelist rules were used.")]),t._v(" "),e("li",[t._v("Approximately 48,000 IPV6 blacklist rules were used.")]),t._v(" "),e("li",[t._v("100,000 URL blacklist rules used, obtained by random string generator.")]),t._v(" "),e("li",[t._v("100,000 URL whitelist rules were used, obtained by a random string generator.")]),t._v(" "),e("li",[t._v("Uses 5000 random strings, obtained by a random string generator. One of them is randomly selected as the URI for each request to send a GET request.")]),t._v(" "),e("li",[t._v("The test lasts 30 minutes.")]),t._v(" "),e("li",[t._v("Tested twice, once with the firewall on and once with the firewall off.")])]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("NOTE")]),t._v(" "),e("p",[t._v("The IP for testing is obtained from "),e("a",{attrs:{href:"https://www.ipdeny.com/ipblocks/",target:"_blank",rel:"noopener noreferrer"}},[t._v("IPdney"),e("OutboundLink")],1),t._v(".")])]),t._v(" "),e("p",[t._v("Configuration used for testing.")]),t._v(" "),e("div",{staticClass:"language-nginx extra-class"},[e("pre",{pre:!0,attrs:{class:"language-nginx"}},[e("code",[e("span",{pre:!0,attrs:{class:"token directive"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("master_process")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("on")])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token directive"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("worker_processes")]),t._v("  "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token directive"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("http")])]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token directive"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("server")])]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token directive"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("listen")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("80")])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token directive"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("server_name")]),t._v("  localhost")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n        "),e("span",{pre:!0,attrs:{class:"token directive"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("access_log")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("off")])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        \n        "),e("span",{pre:!0,attrs:{class:"token directive"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("waf")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("on")])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token directive"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("waf_mode")]),t._v(" DYNAMIC !CC !POST")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token directive"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("waf_rule_path")]),t._v(" /usr/local/src/ngx_waf/rules/")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token directive"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("waf_cache")]),t._v(" capacity=6000 interval=1h percent=50")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n        "),e("span",{pre:!0,attrs:{class:"token directive"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("location")]),t._v(" /")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),e("span",{pre:!0,attrs:{class:"token directive"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default_type")]),t._v(" text/html")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),e("span",{pre:!0,attrs:{class:"token directive"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("200")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'hello'")])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("h4",{attrs:{id:"test-command"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#test-command"}},[t._v("#")]),t._v(" Test Command")]),t._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[t._v("wrk -c "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),t._v(" -d 30m -t "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" -s test/wrk/rand.lua --latency http://localhost/ -- /path/to/rand-str.txt\n")])])]),e("h4",{attrs:{id:"test-results"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#test-results"}},[t._v("#")]),t._v(" Test Results")]),t._v(" "),e("p",[t._v("With the firewall on, QPS(Queries Per Second) is reduced by about 4%.")]),t._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# waf on;")]),t._v("\nwrk -c "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),t._v(" -d 30m -t "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" -s ngx_waf/test/wrk/rand.lua --timeout 1m --latency http://localhost/ -- /usr/local/src/ngx_waf/txt.txt\n\nRunning 30m "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("test")]),t._v(" @ http://localhost/\n  "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" threads and "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),t._v(" connections\n  Thread Stats   Avg      Stdev     Max   +/- Stdev\n    Latency    "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("78")]),t._v(".56ms  "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("340")]),t._v(".74ms   "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v(".97s    "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("94.52")]),t._v("%\n    Req/Sec    "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("67")]),t._v(".33k    "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("25")]),t._v(".42k   "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("95")]),t._v(".38k    "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("86.58")]),t._v("%\n  Latency Distribution\n     "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("50")]),t._v("%    "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(".14ms\n     "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("75")]),t._v("%    "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(".48ms\n     "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("90")]),t._v("%    "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),t._v(".84ms\n     "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("99")]),t._v("%    "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(".97s\n  "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("120532104")]),t._v(" requests "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("30")]),t._v(".00m, "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("17")]),t._v(".06GB "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("read")]),t._v("\nRequests/sec:  "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("66959.26")]),t._v("\nTransfer/sec:      "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("9")]),t._v(".71MB\n\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# waf off;")]),t._v("\nwrk -c "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),t._v(" -d 30m -t "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" -s ngx_waf/test/wrk/rand.lua --timeout 1m --latency http://localhost/ -- /usr/local/src/ngx_waf/txt.txt\n\nRunning 30m "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("test")]),t._v(" @ http://localhost/\n  "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" threads and "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),t._v(" connections\n  Thread Stats   Avg      Stdev     Max   +/- Stdev\n    Latency   "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("803")]),t._v(".44us    "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(".87ms  "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("40")]),t._v(".32ms   "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("95.23")]),t._v("%\n    Req/Sec    "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("70")]),t._v(".69k    "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),t._v(".46k  "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("105")]),t._v(".82k    "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("81.15")]),t._v("%\n  Latency Distribution\n     "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("50")]),t._v("%  "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("590")]),t._v(".00us\n     "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("75")]),t._v("%  "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("760")]),t._v(".00us\n     "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("90")]),t._v("%    "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(".25ms\n     "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("99")]),t._v("%    "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),t._v(".25ms\n  "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("126562158")]),t._v(" requests "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("30")]),t._v(".00m, "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("17")]),t._v(".92GB "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("read")]),t._v("\nRequests/sec:  "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("70310.93")]),t._v("\nTransfer/sec:     "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),t._v(".19MB\n")])])]),e("h3",{attrs:{id:"test-by-yourself"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#test-by-yourself"}},[t._v("#")]),t._v(" Test By Yourself")]),t._v(" "),e("p",[t._v("You can use "),e("a",{attrs:{href:"https://github.com/wg/wrk",target:"_blank",rel:"noopener noreferrer"}},[t._v("wrk"),e("OutboundLink")],1),t._v(" to perform performance tests on this module.")]),t._v(" "),e("p",[t._v("This project provides wrk's lua script for testing. The path of the script is "),e("code",[t._v("test/wrk/rand.lua")]),t._v(" and its function is to send GET requests using a random URI. You need to provide it with a text file containing a certain number of random strings, one random string per line. Then test it with the following command.")]),t._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[t._v("wrk -c "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),t._v(" -d 1m -t "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" -s test/wrk/rand.lua --latency http://localhost/ -- /path/to/rand-str.txt\n")])])])])}),[],!1,null,null,null);s.default=n.exports}}]);