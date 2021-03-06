const common = require("./helper/common");
exports.config = {
    specs: ["test/**.js"], //需要测试的文件
    exclude: [], //不需要测试的文件
    maxInstances: 1, //最大的并发度运行测试个数，set maxInstance for all browser
    capabilities: [{
        maxInstances: 5, // 最多启动多少个浏览器窗口并行执行
        browserName: "chrome" // options: chrome || safari
            //(ps:use safari just need set Develop->Allow Remote Automation,when use safari,
            //you need avoid interactions with the browser that affect automated testing)
    }],
    baseUrl: "", //Shorten url command calls by setting a base URL.
    waitforTimeout: 20000, //所有waitFor *命令的默认超时
    connectionRetryTimeout: 20000, //请求的超时时间
    connectionRetryCount: 3,
    reporters: ["allure"], //测试报告
    reporterOptions: {
        allure: {
            outputDir: "allure-results"
        }
    },
    services: ["selenium-standalone"],//暂时注释
    framework: "mocha", //采用什么测试框架
    mochaOpts: {
        ui: "bdd", //
        timeout: 200 * 1000, //测试执行的超时时间
        require: ["./helper/addCommand.js"] //测试需要引入的公共文件
    },
    onPrepare: function(config, capabilities) {
        common.removeDir("./allure-report"); //每次执行测试前把之前allure保留的测试结果清空
        common.removeDir("./allure-results");
    }
};