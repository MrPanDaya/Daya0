// Learn cc.Class:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] https://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {
        bgArray: [cc.Node],
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad() {
        this.curBgId = 0;
        this.lastBgId = 2;
        this.bgHeight = this.bgArray[0].height;
        cc.carSpeed = 0;
        for (var i = 0; i < this.bgArray.length; ++i) {
            this.bgArray[i].y = this.bgHeight * (i - 1);
        }
    },

    start() {

    },

    update(dt) {
        if(!cc.carSpeed){
            return;
        }
        var dtYSpeed = dt * cc.carSpeed * -1;
        for (var i = 0; i < this.bgArray.length; ++i) {
            var posY = this.bgArray[i].y + dtYSpeed;
            this.bgArray[i].y += dtYSpeed;
            if (posY <= -this.bgHeight) {
                var dltY = posY + this.bgHeight;
                this.bgArray[i].y = this.bgHeight + dltY;
            } else {
                this.bgArray[i].y = posY;
            }
        }
    },

    onDestroy(){
        if(cc.mainMenu){
            cc.mainMenu.stop();
        }
    },

    onBtnStartGame(){
        cc.mainMenu = this.getComponent("cc.AudioSource");
        if(cc.mainMenu){
            cc.mainMenu.play();
        }
        this.btnStart = cc.find('Canvas/btnStart');
        if(this.btnStart){
            this.btnStart.active = false;
        }
        
        if(cc.mainPlayer){
            cc.mainPlayer.onStartPlay();
        }
        
    },

    onBtnPause(){
        if(cc.mainPlayer){
            cc.mainPlayer.onCarBroken();
        }
        if(this.btnStart){
            this.btnStart.active = true;
        }
    },

});
