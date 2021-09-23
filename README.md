微澜云相册
=========

微澜图书馆的各个分馆，经常会分享图片到群里，或者到社区网站里。如果有一个专门的相册应用会更好，
更方便地浏览、分享、下载、整理，使用云服务商的云存储来存储图片文件，以此提高访问速度。
图片更能展现各个分馆的风采，并且能够能够引流，能够让人看到一个分馆的过去和现在。
会考虑分享和存储视频，因为视频更有表现力，不过对带宽的要求比较大，会有一定限制。
我希望微澜云相册能够成为存储微澜分馆的记忆的地方，能够成为大家交流、分享服务过程中的快乐的地方。

这是我完全独立开发、构思的应用，这个开发完，后续我将开发一个社交论坛类应用，微澜悄悄话。
现在社区太过工具化，除了日常值班的记录，没有空间让人畅谈交流。公益不仅是服务大众，更是联结各个
志愿者的平台。我希望开发一个志愿者运营、互助、交流的平台，畅所欲言，营造一个良善友好的社区。  

技术栈：Koa + MongoDB + GraphQL + Vue + TypeScript     
应用模板：https://github.com/emmanuelnk/restful-typescript-koa    

应用目录结构
==========

/docs 项目文档    
/public 静态资源    
/src 主要源码   
/src/controllers 控制器目录   
/src/entities 模型目录   
/src/graphql graphql schema目录   
/src/interfaces 主要实体接口目录    
/src/libraries 工具类目录   
/src/middleware 中间件目录    
/src/providers 服务提供者封装 
/src/routes 路由目录    
/scc/services 业务逻辑目录，常用的业务逻辑处理  
/init-data.mjs 初始化微澜用户和群组数据的脚本   
/mongo-init.js 初始化mongodb数据库角色脚本    

LICENSE
=======

![](http://www.gnu.org/graphics/gplv3-127x51.png)

Copyright © 2021 Adam Smith

This project is licensed under version 3 of the GNU General Public License.
