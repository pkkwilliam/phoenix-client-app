
var isReady=false;var onReadyCallbacks=[];
var isServiceReady=false;var onServiceReadyCallbacks=[];
var __uniConfig = {"pages":["pages/landing/landingTabsSwiper","pages/addressFormPage","pages/addressSelectionPage","pages/bankAccount/bankAccountFormPage","pages/bankAccount/myBankAccountPage","pages/cashOut/cashOutFormPage","pages/cashOut/cashOutHistoryPage","pages/changePasswordPage","pages/createItemPage","pages/itemDetailPage","pages/item/searchItemPage","pages/loginPage","pages/me/myListPage","pages/me/myOrderPage","pages/me/myPage","pages/me/mySaveItemPage","pages/me/mySettingPage","pages/me/mySoldPage","pages/me/myViewItemPage","pages/order/buyerOrderDetailPage","pages/order/orderConfirmationPage","pages/order/sellerOrderDetailPage","pages/preOrderPage","pages/registerPage","pages/forgotPasswordPage","pages/workbenchPage","pages/user/userPage","pages/me/salary","pages/me/aboutMe","pages/me/mentalTest/list","pages/me/mentalTest/index","pages/me/mentalTest/explain","pages/news/news","pages/me/course","pages/video","pages/project/list","pages/project/project","pages/timeline","pages/design","tn_components/pano","tn_components/bggrad","tn_components/bgcolor","tn_components/ancube","tn_components/anloading","tn_components/mimicry","tn_components/mapLocus","tn_components/charts","tn_components/poster","tn_components/discern","tn_components/sign","tn_components/district","tn_components/search","tn_components/openDocument","tn_components/company","tn_components/timeline"],"window":{"backgroundColor":"#F8F8F8","navigationBarTextStyle":"black","navigationBarTitleText":"uni-app","navigationBarBackgroundColor":"#F8F8F8","scrollIndicator":"none"},"tabBar":{"color":"#a3a3a3","selectedColor":"#000000","borderStyle":"#FFFFFF","backgroundColor":"#FFFFFF","midButton":{"pagePath":"pages/me/myOrderPage","iconPath":"static/tabBar/create_item_button.png","width":"100px","height":"44px","iconWidth":"40px"},"list":[{"pagePath":"pages/landing/landingTabsSwiper","iconPath":"static/tabBar/index.png","selectedIconPath":"static/tabBar/index_cur.png","text":"摸魚"},{"pagePath":"pages/me/myPage","iconPath":"static/tabBar/me.png","selectedIconPath":"static/tabBar/me.png","text":"我的"}]},"nvueCompiler":"uni-app","nvueStyleCompiler":"weex","renderer":"auto","splashscreen":{"alwaysShowBeforeRender":true,"autoclose":false},"appname":"Bitcode-Second-Hand-Trade","compilerVersion":"3.2.16","entryPagePath":"pages/landing/landingTabsSwiper","networkTimeout":{"request":60000,"connectSocket":60000,"uploadFile":60000,"downloadFile":60000}};
var __uniRoutes = [{"path":"/pages/landing/landingTabsSwiper","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"摸魚","navigationStyle":"custom"}},{"path":"/pages/addressFormPage","meta":{},"window":{"navigationBarTitleText":"收貨地址"}},{"path":"/pages/addressSelectionPage","meta":{},"window":{"navigationBarTitleText":"收貨地址"}},{"path":"/pages/bankAccount/bankAccountFormPage","meta":{},"window":{"navigationBarTitleText":"銀行賬戶"}},{"path":"/pages/bankAccount/myBankAccountPage","meta":{},"window":{"navigationBarTitleText":"銀行賬戶"}},{"path":"/pages/cashOut/cashOutFormPage","meta":{},"window":{"navigationBarTitleText":"提取現金"}},{"path":"/pages/cashOut/cashOutHistoryPage","meta":{},"window":{"navigationBarTitleText":"提取現金歷史"}},{"path":"/pages/changePasswordPage","meta":{},"window":{"navigationBarTitleText":"修改密碼"}},{"path":"/pages/createItemPage","meta":{},"window":{"disableScroll":true,"navigationBarTitleText":"創建物品","navigationStyle":"custom"}},{"path":"/pages/itemDetailPage","meta":{},"window":{"navigationBarTitleText":"物品詳細"}},{"path":"/pages/item/searchItemPage","meta":{},"window":{"navigationBarTitleText":"搜索物品"}},{"path":"/pages/loginPage","meta":{},"window":{"navigationBarTitleText":"登入"}},{"path":"/pages/me/myListPage","meta":{},"window":{"navigationBarTitleText":"我發布的"}},{"path":"/pages/me/myOrderPage","meta":{},"window":{"navigationBarTitleText":"我買到的"}},{"path":"/pages/me/myPage","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"我的","navigationStyle":"custom"}},{"path":"/pages/me/mySaveItemPage","meta":{},"window":{"navigationBarTitleText":"我收藏的"}},{"path":"/pages/me/mySettingPage","meta":{},"window":{"navigationBarTitleText":"設置"}},{"path":"/pages/me/mySoldPage","meta":{},"window":{"navigationBarTitleText":"我賣出的"}},{"path":"/pages/me/myViewItemPage","meta":{},"window":{"navigationBarTitleText":"我的足跡"}},{"path":"/pages/order/buyerOrderDetailPage","meta":{},"window":{"navigationBarBackgroundColor":"#ffe24b","navigationBarTitleText":"我買到的","navigationStyle":"custom"}},{"path":"/pages/order/orderConfirmationPage","meta":{},"window":{"navigationBarBackgroundColor":"#ffe24b","navigationBarTitleText":"交易成功","navigationStyle":"custom"}},{"path":"/pages/order/sellerOrderDetailPage","meta":{},"window":{"navigationBarBackgroundColor":"#ffe24b","navigationBarTitleText":"我買到的","navigationStyle":"custom"}},{"path":"/pages/preOrderPage","meta":{},"window":{"navigationBarTitleText":"購買寶貝"}},{"path":"/pages/registerPage","meta":{},"window":{"navigationBarTitleText":"注冊"}},{"path":"/pages/forgotPasswordPage","meta":{},"window":{"navigationBarTitleText":"忘記密碼"}},{"path":"/pages/workbenchPage","meta":{},"window":{"navigationBarTitleText":"工作台PRO","navigationStyle":"custom"}},{"path":"/pages/user/userPage","meta":{},"window":{"navigationBarTitleText":""}},{"path":"/pages/me/salary","meta":{},"window":{"navigationBarTitleText":"薪资排行","navigationStyle":"custom"}},{"path":"/pages/me/aboutMe","meta":{},"window":{"navigationBarTitleText":"关于作者","navigationStyle":"custom"}},{"path":"/pages/me/mentalTest/list","meta":{},"window":{"navigationBarTitleText":"答题测试","navigationStyle":"custom"}},{"path":"/pages/me/mentalTest/index","meta":{},"window":{"navigationBarTitleText":"答题测试","navigationStyle":"custom"}},{"path":"/pages/me/mentalTest/explain","meta":{},"window":{"navigationBarTitleText":"答题规则说明"}},{"path":"/pages/news/news","meta":{},"window":{"navigationBarTitleText":"资讯详情"}},{"path":"/pages/me/course","meta":{},"window":{"navigationBarTitleText":"班级课程","navigationStyle":"custom"}},{"path":"/pages/video","meta":{},"window":{"navigationBarTitleText":"视频播放"}},{"path":"/pages/project/list","meta":{},"window":{"navigationBarTitleText":"项目展示","navigationStyle":"custom"}},{"path":"/pages/project/project","meta":{},"window":{"navigationBarTitleText":"项目展示","navigationStyle":"custom"}},{"path":"/pages/timeline","meta":{},"window":{"navigationStyle":"custom"}},{"path":"/pages/design","meta":{},"window":{"navigationStyle":"custom"}},{"path":"/tn_components/pano","meta":{},"window":{}},{"path":"/tn_components/bggrad","meta":{},"window":{"navigationStyle":"custom"}},{"path":"/tn_components/bgcolor","meta":{},"window":{"navigationStyle":"custom"}},{"path":"/tn_components/ancube","meta":{},"window":{"navigationStyle":"custom"}},{"path":"/tn_components/anloading","meta":{},"window":{"navigationStyle":"custom"}},{"path":"/tn_components/mimicry","meta":{},"window":{"navigationStyle":"custom"}},{"path":"/tn_components/mapLocus","meta":{},"window":{"navigationStyle":"custom"}},{"path":"/tn_components/charts","meta":{},"window":{"navigationBarTitleText":"图表展示"}},{"path":"/tn_components/poster","meta":{},"window":{"navigationStyle":"custom"}},{"path":"/tn_components/discern","meta":{},"window":{"navigationStyle":"custom"}},{"path":"/tn_components/sign","meta":{},"window":{"navigationBarTitleText":"电子签名"}},{"path":"/tn_components/district","meta":{},"window":{"navigationBarTitleText":"行政区图"}},{"path":"/tn_components/search","meta":{},"window":{"navigationStyle":"custom","navigationBarTitleText":"便捷查询"}},{"path":"/tn_components/openDocument","meta":{},"window":{"navigationStyle":"custom","navigationBarTitleText":"文档预览"}},{"path":"/tn_components/company","meta":{},"window":{"navigationBarTitleText":"自定义相机"}},{"path":"/tn_components/timeline","meta":{},"window":{"navigationBarTitleText":"时间轴"}}];
__uniConfig.onReady=function(callback){if(__uniConfig.ready){callback()}else{onReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"ready",{get:function(){return isReady},set:function(val){isReady=val;if(!isReady){return}const callbacks=onReadyCallbacks.slice(0);onReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
__uniConfig.onServiceReady=function(callback){if(__uniConfig.serviceReady){callback()}else{onServiceReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"serviceReady",{get:function(){return isServiceReady},set:function(val){isServiceReady=val;if(!isServiceReady){return}const callbacks=onServiceReadyCallbacks.slice(0);onServiceReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
service.register("uni-app-config",{create(a,b,c){if(!__uniConfig.viewport){var d=b.weex.config.env.scale,e=b.weex.config.env.deviceWidth,f=Math.ceil(e/d);Object.assign(__uniConfig,{viewport:f,defaultFontSize:Math.round(f/20)})}return{instance:{__uniConfig:__uniConfig,__uniRoutes:__uniRoutes,global:void 0,window:void 0,document:void 0,frames:void 0,self:void 0,location:void 0,navigator:void 0,localStorage:void 0,history:void 0,Caches:void 0,screen:void 0,alert:void 0,confirm:void 0,prompt:void 0,fetch:void 0,XMLHttpRequest:void 0,WebSocket:void 0,webkit:void 0,print:void 0}}}});
