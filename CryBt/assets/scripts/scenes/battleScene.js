cc.Class({
    extends: cc.Component,

    properties: {
        bag_sprite: cc.Sprite,
        road_grid: cc.Prefab,
        weapon_prefab: cc.Prefab,
        born_effect: cc.Prefab,
        weapon_choose: cc.Prefab,
        crystal_prefab: cc.Prefab,
    },

    onLoad () {
        cc.battleScene = this;
        this.road_node = this.node.getChildByName("road_node");
        this.monster_wave = this.node.getChildByName("monster_node").getComponent("monsterWave");
        this.buttle_node = this.node.getChildByName("buttle_node");
        this.weapon_node = this.node.getChildByName("weapon_node");
        this.monster_born_node = this.node.getChildByName("monster_born_node");
        this.weapon_tips = this.node.getChildByName("weapon_tips");
        this.weapon_lvup = this.node.getChildByName("weapon_lvup").getComponent("lvup_weapon");
        this.battle_ui = this.node.getChildByName("ui_node").getComponent("battle_ui");
        this.initUserData();
        this.initScene(1000);
    },

    initUserData(){
        this.data = {
            money: 500,
        }
    },

    onGameEnd(){
        console.log("fail the game end!");
    },

    // start () {},
    // update (dt) {},

    initScene(sceneId){
        // 背景图片
        var self = this;
        cc.loader.loadRes("bg/Back"+sceneId, cc.SpriteFrame, function (err, spriteFrame) {
            self.bag_sprite.spriteFrame = spriteFrame;
        });
        // 地图配置
        this.mapConfig = mapCfg[sceneId];
        // 道路
        this.initRoad();
        // 武器格子
        this.initWeapon();
        // 可使用的武器列表
        this.initBuildWeaponList();
        // 初始化怪物列表
        this.initMonsterWave();
        // 设置界面
        this.initBattleUI();
    },

    initRoad(){
        var roadCfg = this.mapConfig.roadGrid;
        for(var k in roadCfg){
            var gridCfg = roadCfg[k];
            var grid = cc.instantiate(this.road_grid);
            this.road_node.addChild(grid);
            grid.getComponent("road_grid").initGrid(gridCfg.img);
            grid.x = (gridCfg.posX - 6) * 64;
            grid.y = (gridCfg.posY - 3) * 64;
        }
        // 怪物出生点
        var startGridCfg = roadCfg[0];
        if(!this.bornEffect){
            this.bornEffect = cc.instantiate(this.born_effect);
            this.monster_born_node.addChild(this.bornEffect);
        }
        this.bornEffect.x = (startGridCfg.posX - 6) * 64;
        this.bornEffect.y = (startGridCfg.posY - 3) * 64;
        this.bornEffect.getComponent(cc.Animation).play("monsterBornPos", 0);
        // 水晶
        var endGridCfg = roadCfg[Object.keys(roadCfg).length - 1];
        if(!this.crystalNode){
            this.crystalNode = cc.instantiate(this.crystal_prefab);
            this.monster_born_node.addChild(this.crystalNode);
        }
        this.crystalNode.x = (endGridCfg.posX - 6) * 64;
        this.crystalNode.y = (endGridCfg.posY - 3) * 64;
        this.crystal = this.crystalNode.getComponent("crystalAi");
        this.crystal.initCrystal(1);
    },

    initWeapon(){
        var weaponGridCfg = this.mapConfig.weaponGrid;
        this.weaponList = [];
        for(var k in weaponGridCfg){
            var gridPos = weaponGridCfg[k];
            var weapon = cc.instantiate(this.weapon_prefab);
            this.weapon_node.addChild(weapon);
            weapon.x = (gridPos.posX - 6) * 64;
            weapon.y = (gridPos.posY - 3) * 64;
            var weaponAi = weapon.getComponent("weaponAi");
            weaponAi.initWeapon();
            this.weaponList.push(weaponAi);
        }
    },

    initBuildWeaponList(){
        for(var i = 0, len = this.mapConfig.weapon.length; i < len; ++i){
            var weaponId = this.mapConfig.weapon[i];
            var weaponCfg = weaponCfgList[weaponId];
            if(weaponCfg){
                var chooseWeapon = cc.instantiate(this.weapon_choose);
                this.weapon_tips.addChild(chooseWeapon);
                chooseWeapon.getComponent("weaponSel").initWeapon(i, weaponCfg);
            }
        }
    },

    initMonsterWave(){
        this.monster_wave.initConfig(this.mapConfig.monsterWave);
        this.monster_wave.startGame(this.mapConfig.roadGrid);
    },

    initBattleUI(){
        this.battle_ui.crystal_num.string = this.mapConfig.startMoney;
        this.battle_ui.total_wave.string = Object.keys(this.mapConfig.monsterWave).length;
    },

    setCurWave(waveId){
        this.battle_ui.cur_wave.string = waveId;
    },

    onWeaponSelected(grid){
        for(var i = 0, len = this.weaponList.length; i < len; ++i){
            if(this.weaponList[i] != grid){
                this.weaponList[i].onWeaponUnSel();
            }
        }
    },

    onUnSelect(){
        this.hideWeaponTips();
        this.weapon_lvup.node.active = false;
        if(this.selWeapon){
            this.selWeapon.onWeaponUnSel();
            this.selWeapon = null;
        }
    },

    showWeaponTips(weapon){
        this.selWeapon = weapon;
        this.weapon_tips.active = true;
        this.weapon_tips.x = weapon.node.x + 64;
        this.weapon_tips.y = weapon.node.y;
        this.weapon_lvup.node.active = false;
    },

    hideWeaponTips(){
        this.weapon_tips.active = false;
    },

    buildWeapon(weaponId){
        if(this.selWeapon){
            this.selWeapon.buildWeapon(weaponId);
        }
    },

    showLvupWeaponNode(weapon){
        this.selWeapon = weapon;
        this.weapon_lvup.showLvupWeapon(this.selWeapon);
        this.hideWeaponTips();
    },

});
