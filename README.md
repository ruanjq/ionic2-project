
# ionic2 App

![项目摘要图](https://github.com/fengyi123/operationManage/blob/master/src/images/home.png)


## 前端相关技术：Webpack2.0、、、Angualr2.0，，，Ionic2.0，， Cordova，，Typescript ，，ES6 
	
	1: 依赖nodejs，需要先安装nodejs环境，安装nodejs 后执行命令 npm install 
	2: 依赖Webpack2.0 环境，，先安装webpack2.0 全局环境  npm install -g webpack@2.0
	3：检查安装成功 =>
		npm -v
		webpack -V
	4：npm install 插件名  添加开发插件
	5：npm uninstall 插件名 移除插件
	

## 项目介绍：
  
	1：config目录：
        【cordova.js】 配置cordova 打包编译的命令 cordova prepare
        【webpack.common.js】 webpack打包公用配置文件
        【webpack.dev.js】 	  webpack 开发环境配置文件
        【webpack.prod.js】   webpack 生产环境配置文件

	
	2：cordovaApp目录
	    cordova 项目工程文件，，包含android ，，ios平台相关代码

	3：node_module  ....

	4: src目录
		4.1：项目开发源代码目录，包括ts脚本文件，css,less样式文件，images图片文件，，组件目录。
		4.2：index.html 	单页引用入口页面
		     main.ts    	页面入口脚本文件
		     polyfills.ts、vendors.ts   angular2.0 运行所依赖的核心代码
		


## 项目运行：
    
	1：npm install ，安装node_modules所有依赖的包文件	 
	2：npm run start 生产环境
	3：npm run build 开发环境... 最终编译代码打包到 cordovaApp/www目录文件







