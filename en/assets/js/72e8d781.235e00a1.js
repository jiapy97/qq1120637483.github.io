"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[92808],{3905:function(e,n,r){r.d(n,{Zo:function(){return s},kt:function(){return p}});var t=r(67294);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function a(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function c(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?a(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function l(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=t.createContext({}),d=function(e){var n=t.useContext(i),r=n;return e&&(r="function"==typeof e?e(n):c(c({},n),e)),r},s=function(e){var n=d(e.components);return t.createElement(i.Provider,{value:n},e.children)},k={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},u=t.forwardRef((function(e,n){var r=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=d(r),p=o,f=u["".concat(i,".").concat(p)]||u[p]||k[p]||a;return r?t.createElement(f,c(c({ref:n},s),{},{components:r})):t.createElement(f,c({ref:n},s))}));function p(e,n){var r=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=r.length,c=new Array(a);c[0]=u;var l={};for(var i in n)hasOwnProperty.call(n,i)&&(l[i]=n[i]);l.originalType=e,l.mdxType="string"==typeof e?e:o,c[1]=l;for(var d=2;d<a;d++)c[d]=r[d];return t.createElement.apply(null,c)}return t.createElement.apply(null,r)}u.displayName="MDXCreateElement"},89862:function(e,n,r){r.r(n),r.d(n,{assets:function(){return s},contentTitle:function(){return i},default:function(){return p},frontMatter:function(){return l},metadata:function(){return d},toc:function(){return k}});var t=r(87462),o=r(63366),a=(r(67294),r(3905)),c=["components"],l={id:"docker-container-log-clean",slug:"/docker-container-log-clean",title:"Docker\u5bb9\u5668\u65e5\u5fd7\u8fc7\u5927\u6e05\u7406",date:new Date("2021-10-16T00:00:00.000Z"),authors:"kuizuo",tags:["docker"],keywords:["docker"]},i=void 0,d={unversionedId:"skill/docker/docker-container-log-clean",id:"skill/docker/docker-container-log-clean",title:"Docker\u5bb9\u5668\u65e5\u5fd7\u8fc7\u5927\u6e05\u7406",description:"\u5728\u6211\u4ee5 docker \u5bb9\u5668\u90e8\u7f72\u4e86 elasticsearch \u670d\u52a1\u540e\u7684 3 \u4e2a\u6708\u65f6\u95f4\uff0c\u53d1\u73b0\u786c\u76d8\u4f1a\u4e0d\u65ad\u7684\u589e\u5927\uff0c\u4e00\u5f00\u59cb\u65f6\u6ca1\u5728\u610f\uff0c\u76f4\u5230\u786c\u76d8\u62a5\u9ec4\uff0c\u5c31\u50cf\u4e0b\u56fe\u8fd9\u6837",source:"@site/docs/skill/docker/Docker\u5bb9\u5668\u65e5\u5fd7\u8fc7\u5927\u6e05\u7406.md",sourceDirName:"skill/docker",slug:"/docker-container-log-clean",permalink:"/en/docs/docker-container-log-clean",draft:!1,tags:[{label:"docker",permalink:"/en/docs/tags/docker"}],version:"current",frontMatter:{id:"docker-container-log-clean",slug:"/docker-container-log-clean",title:"Docker\u5bb9\u5668\u65e5\u5fd7\u8fc7\u5927\u6e05\u7406",date:"2021-10-16T00:00:00.000Z",authors:"kuizuo",tags:["docker"],keywords:["docker"]},sidebar:"skill",previous:{title:"Docker\u7b14\u8bb0",permalink:"/en/docs/docker"},next:{title:"Docker\u8bbf\u95ee\u5bbf\u4e3b\u673a\u4e0a\u670d\u52a1",permalink:"/en/docs/docker-accesses-host-service"}},s={},k=[{value:"linux \u67e5\u627e\u6700\u5927\u5360\u7528\u7a7a\u95f4\u7684\u6587\u4ef6",id:"linux-\u67e5\u627e\u6700\u5927\u5360\u7528\u7a7a\u95f4\u7684\u6587\u4ef6",level:2},{value:"\u95ee\u9898",id:"\u95ee\u9898",level:3},{value:"\u6e05\u7406 Docker \u5bb9\u5668\u65e5\u5fd7",id:"\u6e05\u7406-docker-\u5bb9\u5668\u65e5\u5fd7",level:3},{value:"\u65e5\u5fd7\u6e05\u7406\u811a\u672c clean_docker_log.sh",id:"\u65e5\u5fd7\u6e05\u7406\u811a\u672c-clean_docker_logsh",level:4},{value:"\u8bbe\u7f6e Docker \u5bb9\u5668\u65e5\u5fd7\u5927\u5c0f",id:"\u8bbe\u7f6e-docker-\u5bb9\u5668\u65e5\u5fd7\u5927\u5c0f",level:3},{value:"\u5168\u5c40\u8bbe\u7f6e",id:"\u5168\u5c40\u8bbe\u7f6e",level:3}],u={toc:k};function p(e){var n=e.components,r=(0,o.Z)(e,c);return(0,a.kt)("wrapper",(0,t.Z)({},u,r,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u5728\u6211\u4ee5 docker \u5bb9\u5668\u90e8\u7f72\u4e86 elasticsearch \u670d\u52a1\u540e\u7684 3 \u4e2a\u6708\u65f6\u95f4\uff0c\u53d1\u73b0\u786c\u76d8\u4f1a\u4e0d\u65ad\u7684\u589e\u5927\uff0c\u4e00\u5f00\u59cb\u65f6\u6ca1\u5728\u610f\uff0c\u76f4\u5230\u786c\u76d8\u62a5\u9ec4\uff0c\u5c31\u50cf\u4e0b\u56fe\u8fd9\u6837"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://img.kuizuo.cn/image-20211016180014693.png",alt:"image-20211016180014693"})),(0,a.kt)("p",null,"\u4e8e\u662f\u5c31\u51c6\u5907\u627e\u627e\u662f\u4ec0\u4e48\u539f\u56e0\u5bfc\u81f4\u786c\u76d8\u7a7a\u95f4\u4e0d\u65ad\u589e\u5927\u3002"),(0,a.kt)("h2",{id:"linux-\u67e5\u627e\u6700\u5927\u5360\u7528\u7a7a\u95f4\u7684\u6587\u4ef6"},"linux \u67e5\u627e\u6700\u5927\u5360\u7528\u7a7a\u95f4\u7684\u6587\u4ef6"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"# \u8fdb\u5165\u6839\u76ee\u5f55\ncd /\n# \u67e5\u770b\u6839\u76ee\u5f55\u4e0b\u6bcf\u4e2a\u6587\u4ef6\u5939\u7684\u5927\u5c0f\ndu -sh *\n")),(0,a.kt)("p",null,"\u8fdb\u5165\u5360\u7528\u7a7a\u95f4\u6bd4\u8f83\u5927\u7684\u6587\u4ef6\u5939\uff0c\u518d\u901a\u8fc7 ",(0,a.kt)("inlineCode",{parentName:"p"},"du -sh *")," \u627e\u5230\u6700\u5927\u7684\u6587\u4ef6\u5939\uff0c\u5982\u6b64\u53cd\u590d\u4fbf\u53ef\u627e\u5230\u6700\u5927"),(0,a.kt)("p",null,"\u6216\u4f7f\u7528\u4e0b\u5217\u547d\u4ee4\uff08\u4f1a\u7a0d\u5fae\u9700\u8981\u4e00\u4e9b\u65f6\u95f4\uff0c\u5efa\u8bae\u5148\u4f7f\u7528\u4e0a\u9762\u547d\u4ee4\u6765\u7f29\u5c0f\u76ee\u5f55\u8303\u56f4\uff09"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"# Linux\u4e2d\u67e5\u627e\u5f53\u524d\u76ee\u5f55\u4e0b\u5360\u7528\u7a7a\u95f4\u6700\u5927\u7684\u524d10\u4e2a\u6587\u4ef6\u6216\u6587\u4ef6\u5939\ndu -am | sort -nr | head -n 10\n")),(0,a.kt)("p",null,"\u641c\u5bfb\u7684\u7ed3\u679c\u5982\u4e0b\uff0c\u4e00\u773c\u5c31\u80fd\u770b\u7684\u51fa\u90a3\u4e2a\u6587\u4ef6\u5939\u4e0e\u6587\u4ef6"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"134938  .\n125920  ./var\n125315  ./var/lib\n125229  ./var/lib/docker\n94888   ./var/lib/docker/containers\n94297   ./var/lib/docker/containers/f603a98f79874bca0e075ec1fcb0ec6866555832a4678631e7dffa7f34297281/f603a98f79874bca0e075ec1fcb0ec6866555832a4678631e7dffa7f34297281-json.log\n94297   ./var/lib/docker/containers/f603a98f79874bca0e075ec1fcb0ec6866555832a4678631e7dffa7f34297281\n30335   ./var/lib/docker/overlay2\n27291   ./var/lib/docker/overlay2/f43f485f7707293cda3319786debbbdede5d940c7706c0c4b5464f57eeed7bdb\n14012   ./var/lib/docker/overlay2/f43f485f7707293cda3319786debbbdede5d940c7706c0c4b5464f57eeed7bdb/merged\n")),(0,a.kt)("p",null,"\u6700\u7ec8\u5b9a\u4f4d\u5230\u6587\u4ef6\u5939",(0,a.kt)("inlineCode",{parentName:"p"},"/var/lib/docker/containers"),"\uff0c\u8f93\u51fa\u5f53\u524d\u6587\u4ef6\u5939\u4e0b\u7684\u6587\u4ef6\u5927\u5c0f"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"du -d1 -h /var/lib/docker/containers | sort -h\n")),(0,a.kt)("p",null,"\u7ed3\u679c\u5982\u4e0b"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"[root@localhost /]# du -d1 -h /var/lib/docker/containers | sort -h\n93G     /var/lib/docker/containers\n93G     /var/lib/docker/containers/f603a98f79874bca0e075ec1fcb0ec6866555832a4678631e7dffa7f34297281\n")),(0,a.kt)("p",null,"\u6210\u529f\u627e\u5230\u8fd9\u4e2a\u6587\u4ef6",(0,a.kt)("inlineCode",{parentName:"p"},"f603a98f79874bca0e075ec1fcb0ec6866555832a4678631e7dffa7f34297281-json.log"),"\uff0c\u8fd1 93GB\uff08\u53cd\u6b63\u6211\u662f\u6ca1\u6562\u5c1d\u8bd5\u6253\u5f00\uff0c\u751f\u6015\u76f4\u63a5\u628a\u670d\u52a1\u5668\u5e72\u5b95\u673a\u4e86\uff09"),(0,a.kt)("h3",{id:"\u95ee\u9898"},"\u95ee\u9898"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://so.csdn.net/so/search?q=docker"},"docker"),"\u5bb9\u5668\u65e5\u5fd7\u5bfc\u81f4\u4e3b\u673a\u78c1\u76d8\u7a7a\u95f4\u6ee1\u4e86\u3002elasticsearch \u7684 log \u5f88\u5360\u7528\u7a7a\u95f4\uff0c\u5b8c\u5168\u53ef\u4ee5\u6e05\u7406\u6389\u4e86\u3002"),(0,a.kt)("h3",{id:"\u6e05\u7406-docker-\u5bb9\u5668\u65e5\u5fd7"},"\u6e05\u7406 Docker \u5bb9\u5668\u65e5\u5fd7"),(0,a.kt)("p",null,"\u5982\u679c docker \u5bb9\u5668\u6b63\u5728\u8fd0\u884c\uff0c\u90a3\u4e48\u4f7f\u7528 rm -rf \u65b9\u5f0f\u5220\u9664\u65e5\u5fd7\u540e\uff0c\u90a3\u4e48\u5220\u9664\u540e\u4f1a\u53d1\u73b0\u78c1\u76d8\u7a7a\u95f4\u5e76\u6ca1\u6709\u91ca\u653e\u3002\u539f\u56e0\u662f\u5728 Linux \u6216\u8005 Unix \u7cfb\u7edf\u4e2d\uff0c\u901a\u8fc7 rm -rf \u6216\u8005\u6587\u4ef6\u7ba1\u7406\u5668\u5220\u9664\u6587\u4ef6\uff0c\u5c06\u4f1a\u4ece\u6587\u4ef6\u7cfb\u7edf\u7684\u76ee\u5f55\u7ed3\u6784\u4e0a\u89e3\u9664\u94fe\u63a5\uff08unlink\uff09\u3002\u5982\u679c\u6587\u4ef6\u662f\u88ab\u6253\u5f00\u7684\uff08\u6709\u4e00\u4e2a\u8fdb\u7a0b\u6b63\u5728\u4f7f\u7528\uff09\uff0c\u90a3\u4e48\u8fdb\u7a0b\u5c06\u4ecd\u7136\u53ef\u4ee5\u8bfb\u53d6\u8be5\u6587\u4ef6\uff0c\u78c1\u76d8\u7a7a\u95f4\u4e5f\u4e00\u76f4\u88ab\u5360\u7528\u3002\u5220\u9664\u540e\u91cd\u542f docker\u3002"),(0,a.kt)("h4",{id:"\u65e5\u5fd7\u6e05\u7406\u811a\u672c-clean_docker_logsh"},"\u65e5\u5fd7\u6e05\u7406\u811a\u672c clean_docker_log.sh"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},'#!/bin/sh\necho "======== start clean docker containers logs ========"\n\nlogs=$(find /var/lib/docker/containers/ -name *-json.log)\n\nfor log in $logs\n        do\n                echo "clean logs : $log"\n                cat /dev/null > $log\n        done\n\necho "======== end clean docker containers logs ========"\n\n# chmod +x clean_docker_log.sh\n\n# ./clean_docker_log.sh\n')),(0,a.kt)("h3",{id:"\u8bbe\u7f6e-docker-\u5bb9\u5668\u65e5\u5fd7\u5927\u5c0f"},"\u8bbe\u7f6e Docker \u5bb9\u5668\u65e5\u5fd7\u5927\u5c0f"),(0,a.kt)("p",null,"\u4e0a\u8ff0\u65b9\u6cd5\uff0c\u65e5\u5fd7\u6587\u4ef6\u8fdf\u65e9\u53c8\u4f1a\u6da8\u56de\u6765\u3002\u8981\u4ece\u6839\u672c\u4e0a\u89e3\u51b3\u95ee\u9898\uff0c\u9700\u8981\u9650\u5236\u5bb9\u5668\u670d\u52a1\u7684\u65e5\u5fd7\u5927\u5c0f\u4e0a\u9650\u3002\u8fd9\u4e2a\u901a\u8fc7\u914d\u7f6e\u5bb9\u5668 docker-compose \u7684 max-size \u9009\u9879\u6765\u5b9e\u73b0"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"nginx:\n  image: nginx:1.12.1\n  restart: always\n  logging:\n    driver: \u201cjson-file\u201d\n    options:\n      max-size: \u201c5g\u201d\n")),(0,a.kt)("h3",{id:"\u5168\u5c40\u8bbe\u7f6e"},"\u5168\u5c40\u8bbe\u7f6e"),(0,a.kt)("p",null,"\u65b0\u5efa/etc/docker/daemon.json\uff0c\u82e5\u6709\u5c31\u4e0d\u7528\u65b0\u5efa\u4e86\u3002\u6dfb\u52a0 log-dirver \u548c log-opts \u53c2\u6570\uff0c\u6837\u4f8b\u5982\u4e0b\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},'# vim /etc/docker/daemon.json\n\n{\n  "log-driver":"json-file",\n  "log-opts": {"max-size":"500m", "max-file":"3"}\n}\n\n')),(0,a.kt)("p",null,"max-size=500m\uff0c\u610f\u5473\u7740\u4e00\u4e2a\u5bb9\u5668\u65e5\u5fd7\u5927\u5c0f\u4e0a\u9650\u662f 500M\uff0c\nmax-file=3\uff0c\u610f\u5473\u7740\u4e00\u4e2a\u5bb9\u5668\u6709\u4e09\u4e2a\u65e5\u5fd7\uff0c\u5206\u522b\u662f id+.json\u3001id+1.json\u3001id+2.json\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"# \u91cd\u542fdocker\u5b88\u62a4\u8fdb\u7a0b\n\nsystemctl daemon-reload\n\nsystemctl restart docker\n")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u53c2\u8003\u6587\u7ae0: ",(0,a.kt)("a",{parentName:"p",href:"https://blog.csdn.net/gdsfga/article/details/90599131"},"Docker \u5bb9\u5668\u65e5\u5fd7\u5360\u7528\u7a7a\u95f4\u8fc7\u5927\u89e3\u51b3\u529e\u6cd5"))))}p.isMDXComponent=!0}}]);