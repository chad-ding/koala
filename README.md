KOALA
=====
1、概述
-------------------
    本项目专为学习React而创建。

2、构建工具与技术栈
-------------------
    2.1、采用react15+redux3作为开发框架。
    2.2、采用LESS作为CSS样式预编译语言。
    2.3、项目构建工具为webpack，不要问为什么，因为这样逼格显得高大上。
    2.4、采用ANTD作为组件库,本来想自己写的但是还不大会就先抄着吧。
    2.5、项目后端待搭建。

3、项目搭建与运行
-----------------
    3.1、安装node，已安装请跳过。
    3.2、npm install安装package.json中定义的node模块到本地，其中包括webpack等各类开发工具以及组件库。
    3.3、启动数据模拟服务
        3.3.1、安装express组件，进入simulator_node目录打开命令行工具，输入node index.js命令启动node web服务。
        3.3.2、如果没有安装python请先进行安装，进入simulator_python目录，输入python index.py命令启动python web服务。
    3.4、npm run dev启动本地开发环境。
    3.5、npm run build对项目进行打包。