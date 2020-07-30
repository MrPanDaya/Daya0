(function(){
    window.userData = {

    };
    window.weaponCfgList =  {};
    window.initWeaponCfg = function(){
        var list = [
            {"id":"1011","name":"Weapon1","assertName":"weapon11","backPic":"weaponBg11","normalBtn":"weapon1_Nor","disbaleBtn":"weapon1_Dis","attEffect":"AttEffect01","nextLevelId":"1012","att":"8","buildMoney":"100","dropMoney":"50","attSpeed":"0.9","attRadius":"2","buttleEffect":"buttlEffect011","buttleType":"0","buttleSpeed":"10","buttleAccSpeed":"0","buttleMaxSpeed":"10","buttleRadius":"0","sound":"bullet1.mp3"},
            {"id":"1012","name":"Weapon1","assertName":"weapon12","backPic":"weaponBg12","normalBtn":"weapon1_Nor","disbaleBtn":"weapon1_Dis","attEffect":"AttEffect01","nextLevelId":"1013","att":"9","buildMoney":"200","dropMoney":"150","attSpeed":"0.75","attRadius":"2.5","buttleEffect":"buttlEffect012","buttleType":"0","buttleSpeed":"10","buttleAccSpeed":"0","buttleMaxSpeed":"10","buttleRadius":"0","sound":"bullet1.mp3"},
            {"id":"1013","name":"Weapon1","assertName":"weapon13","backPic":"weaponBg13","normalBtn":"weapon1_Nor","disbaleBtn":"weapon1_Dis","attEffect":"AttEffect01","nextLevelId":"0","att":"10","buildMoney":"300","dropMoney":"300","attSpeed":"0.55","attRadius":"3","buttleEffect":"buttlEffect013","buttleType":"0","buttleSpeed":"10","buttleAccSpeed":"0","buttleMaxSpeed":"10","buttleRadius":"0","sound":"bullet1.mp3"},
            {"id":"1021","name":"Weapon2","assertName":"weapon21","backPic":"weaponBg21","normalBtn":"weapon2_Nor","disbaleBtn":"weapon2_Dis","attEffect":"AttEffect02","nextLevelId":"1022","att":"7","buildMoney":"100","dropMoney":"50","attSpeed":"0.85","attRadius":"2","buttleEffect":"buttlEffect021","buttleType":"0","buttleSpeed":"10","buttleAccSpeed":"0","buttleMaxSpeed":"10","buttleRadius":"0","sound":"bullet2.mp3"},
            {"id":"1022","name":"Weapon2","assertName":"weapon22","backPic":"weaponBg22","normalBtn":"weapon2_Nor","disbaleBtn":"weapon2_Dis","attEffect":"AttEffect02","nextLevelId":"1023","att":"9","buildMoney":"200","dropMoney":"150","attSpeed":"0.7","attRadius":"2.5","buttleEffect":"buttlEffect022","buttleType":"0","buttleSpeed":"10","buttleAccSpeed":"0","buttleMaxSpeed":"10","buttleRadius":"0","sound":"bullet2.mp3"},
            {"id":"1023","name":"Weapon2","assertName":"weapon23","backPic":"weaponBg23","normalBtn":"weapon2_Nor","disbaleBtn":"weapon2_Dis","attEffect":"AttEffect02","nextLevelId":"0","att":"9.5","buildMoney":"300","dropMoney":"300","attSpeed":"0.5","attRadius":"3","buttleEffect":"buttlEffect023","buttleType":"0","buttleSpeed":"10","buttleAccSpeed":"0","buttleMaxSpeed":"10","buttleRadius":"0","sound":"bullet2.mp3"},
            {"id":"1031","name":"Weapon3","assertName":"weapon31","backPic":"weaponBg31","normalBtn":"weapon3_Nor","disbaleBtn":"weapon3_Dis","attEffect":"AttEffect03","nextLevelId":"1032","att":"2","buildMoney":"120","dropMoney":"60","attSpeed":"0.8","attRadius":"2.2","buttleEffect":"buttlEffect031","buttleType":"2","buttleSpeed":"3","buttleAccSpeed":"0","buttleMaxSpeed":"3","buttleRadius":"1.2","sound":"bullet3.mp3"},
            {"id":"1032","name":"Weapon3","assertName":"weapon32","backPic":"weaponBg32","normalBtn":"weapon3_Nor","disbaleBtn":"weapon3_Dis","attEffect":"AttEffect03","nextLevelId":"1033","att":"2.2","buildMoney":"240","dropMoney":"180","attSpeed":"0.65","attRadius":"2.6","buttleEffect":"buttlEffect032","buttleType":"2","buttleSpeed":"3","buttleAccSpeed":"0","buttleMaxSpeed":"3","buttleRadius":"1.5","sound":"bullet3.mp3"},
            {"id":"1033","name":"Weapon3","assertName":"weapon33","backPic":"weaponBg33","normalBtn":"weapon3_Nor","disbaleBtn":"weapon3_Dis","attEffect":"AttEffect03","nextLevelId":"0","att":"2.6","buildMoney":"360","dropMoney":"360","attSpeed":"0.5","attRadius":"3.2","buttleEffect":"buttlEffect033","buttleType":"2","buttleSpeed":"3","buttleAccSpeed":"0","buttleMaxSpeed":"3","buttleRadius":"1.8","sound":"bullet3.mp3"},
            {"id":"1041","name":"Weapon4","assertName":"weapon41","backPic":"weaponBg41","normalBtn":"weapon4_Nor","disbaleBtn":"weapon4_Dis","attEffect":"AttEffect04","nextLevelId":"1042","att":"4.5","buildMoney":"120","dropMoney":"60","attSpeed":"0.6","attRadius":"2.5","buttleEffect":"buttlEffect041","buttleType":"3","buttleSpeed":"10","buttleAccSpeed":"0","buttleMaxSpeed":"10","buttleRadius":"0","sound":"bullet4.mp3"},
            {"id":"1042","name":"Weapon4","assertName":"weapon42","backPic":"weaponBg42","normalBtn":"weapon4_Nor","disbaleBtn":"weapon4_Dis","attEffect":"AttEffect04","nextLevelId":"1043","att":"5.5","buildMoney":"240","dropMoney":"180","attSpeed":"0.5","attRadius":"3","buttleEffect":"buttlEffect042","buttleType":"3","buttleSpeed":"10","buttleAccSpeed":"0","buttleMaxSpeed":"10","buttleRadius":"0","sound":"bullet4.mp3"},
            {"id":"1043","name":"Weapon4","assertName":"weapon43","backPic":"weaponBg43","normalBtn":"weapon4_Nor","disbaleBtn":"weapon4_Dis","attEffect":"AttEffect04","nextLevelId":"0","att":"6.8","buildMoney":"360","dropMoney":"360","attSpeed":"0.2","attRadius":"3.5","buttleEffect":"buttlEffect043","buttleType":"3","buttleSpeed":"10","buttleAccSpeed":"0","buttleMaxSpeed":"10","buttleRadius":"0","sound":"bullet4.mp3"},
            {"id":"1051","name":"Weapon5","assertName":"weapon51","backPic":"weaponBg51","normalBtn":"weapon5_Nor","disbaleBtn":"weapon5_Dis","attEffect":"AttEffect05","nextLevelId":"1052","att":"9","buildMoney":"120","dropMoney":"60","attSpeed":"0.8","attRadius":"2.2","buttleEffect":"buttlEffect051","buttleType":"0","buttleSpeed":"10","buttleAccSpeed":"0","buttleMaxSpeed":"10","buttleRadius":"0","sound":"bullet5.mp3"},
            {"id":"1052","name":"Weapon5","assertName":"weapon52","backPic":"weaponBg52","normalBtn":"weapon5_Nor","disbaleBtn":"weapon5_Dis","attEffect":"AttEffect05","nextLevelId":"1053","att":"10","buildMoney":"240","dropMoney":"180","attSpeed":"0.65","attRadius":"2.6","buttleEffect":"buttlEffect052","buttleType":"0","buttleSpeed":"10","buttleAccSpeed":"0","buttleMaxSpeed":"10","buttleRadius":"0","sound":"bullet5.mp3"},
            {"id":"1053","name":"Weapon5","assertName":"weapon53","backPic":"weaponBg53","normalBtn":"weapon5_Nor","disbaleBtn":"weapon5_Dis","attEffect":"AttEffect05","nextLevelId":"0","att":"12","buildMoney":"360","dropMoney":"360","attSpeed":"0.5","attRadius":"3.2","buttleEffect":"buttlEffect053","buttleType":"0","buttleSpeed":"10","buttleAccSpeed":"0","buttleMaxSpeed":"10","buttleRadius":"0","sound":"bullet5.mp3"},
            {"id":"1061","name":"Weapon6","assertName":"weapon61","backPic":"weaponBg11","normalBtn":"weapon6_Nor","disbaleBtn":"weapon6_Dis","attEffect":"AttEffect06","nextLevelId":"1062","att":"7","buildMoney":"120","dropMoney":"60","attSpeed":"0.8","attRadius":"2.4","buttleEffect":"buttlEffect061","buttleType":"0","buttleSpeed":"8","buttleAccSpeed":"0","buttleMaxSpeed":"8","buttleRadius":"1.2","sound":"bullet6.mp3"},
            {"id":"1062","name":"Weapon6","assertName":"weapon62","backPic":"weaponBg12","normalBtn":"weapon6_Nor","disbaleBtn":"weapon6_Dis","attEffect":"AttEffect06","nextLevelId":"1063","att":"8","buildMoney":"240","dropMoney":"180","attSpeed":"0.65","attRadius":"3","buttleEffect":"buttlEffect062","buttleType":"0","buttleSpeed":"8","buttleAccSpeed":"0","buttleMaxSpeed":"8","buttleRadius":"1.4","sound":"bullet6.mp3"},
            {"id":"1063","name":"Weapon6","assertName":"weapon63","backPic":"weaponBg13","normalBtn":"weapon6_Nor","disbaleBtn":"weapon6_Dis","attEffect":"AttEffect06","nextLevelId":"0","att":"10","buildMoney":"360","dropMoney":"360","attSpeed":"0.55","attRadius":"3.6","buttleEffect":"buttlEffect063","buttleType":"0","buttleSpeed":"8","buttleAccSpeed":"0","buttleMaxSpeed":"8","buttleRadius":"1.8","sound":"bullet6.mp3"},
            {"id":"1071","name":"Weapon7","assertName":"weapon71","backPic":"weaponBg71","normalBtn":"weapon7_Nor","disbaleBtn":"weapon7_Dis","attEffect":"AttEffect07","nextLevelId":"1072","att":"10","buildMoney":"160","dropMoney":"80","attSpeed":"1.2","attRadius":"2.5","buttleEffect":"buttlEffect071","buttleType":"5","buttleSpeed":"0","buttleAccSpeed":"20","buttleMaxSpeed":"10","buttleRadius":"1.5","sound":"bullet7.mp3"},
            {"id":"1072","name":"Weapon7","assertName":"weapon72","backPic":"weaponBg72","normalBtn":"weapon7_Nor","disbaleBtn":"weapon7_Dis","attEffect":"AttEffect07","nextLevelId":"1073","att":"12","buildMoney":"320","dropMoney":"240","attSpeed":"1","attRadius":"3","buttleEffect":"buttlEffect072","buttleType":"5","buttleSpeed":"0","buttleAccSpeed":"20","buttleMaxSpeed":"10","buttleRadius":"2","sound":"bullet7.mp3"},
            {"id":"1073","name":"Weapon7","assertName":"weapon73","backPic":"weaponBg73","normalBtn":"weapon7_Nor","disbaleBtn":"weapon7_Dis","attEffect":"AttEffect07","nextLevelId":"0","att":"14","buildMoney":"480","dropMoney":"480","attSpeed":"0.8","attRadius":"3.5","buttleEffect":"buttlEffect073","buttleType":"5","buttleSpeed":"0","buttleAccSpeed":"20","buttleMaxSpeed":"10","buttleRadius":"2.5","sound":"bullet7.mp3"},
        ];
        for(var i = 0, len = list.length; i < len; ++i){
            var cfg = list[i];
            weaponCfgList[cfg.id] = cfg;
        }
    };

    initWeaponCfg();
})();
