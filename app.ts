const { App } = require('homey');

class MyApp extends App {
    onInit() {
        this.log('MyApp TS App is running...');
    }
}

module.exports = MyApp;
