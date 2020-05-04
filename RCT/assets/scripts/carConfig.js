(function(){
    window.bPlayMainMenu = true;
    window.bPlaySound = true;

    window.mainCarCfg = {
        car0 : {
            img: 'img/main_scene/car01',
            name: '急速一号',
            achorF : 0.2,       // 前轮锚点
            achorB : 0.8,       // 后轮锚点
            carAng : 12,        // 转向的角度
            maxSpeedX : 300,    // 水平的最大速度
            maxSpeed : 1800,    // 最大速度
            maxSpeedN : 2000,   // 氮气加速的最大速度
            addSpeed : 600,
            addSpeedN : 700,
            turnTime : 0.15,    // 转向时间
            recoverTime: 0.1,   // 恢复时间
            ngTimer: 5,  // 氮气加速的时间
            unLockMoney: 0,     // 解锁消耗的金币
        },
        car1 : {
            img: 'img/main_scene/car02',
            name: '急速二号',
            achorF : 0.2,       // 前轮锚点
            achorB : 0.8,       // 后轮锚点
            carAng : 12,        // 转向的角度
            maxSpeedX : 300,    // 水平的最大速度
            maxSpeed : 1800,    // 最大速度
            maxSpeedN : 2000,   // 氮气加速的最大速度
            addSpeed : 600,
            addSpeedN : 700,
            turnTime : 0.15,    // 转向时间
            recoverTime: 0.1,   // 恢复时间
            ngTimer: 5,  // 氮气加速的时间
            unLockMoney: 1000,  // 解锁消耗的金币
        },
        car2 : {
            img: 'img/main_scene/car03',
            name: '急速三号',
            achorF : 0.2,       // 前轮锚点
            achorB : 0.8,       // 后轮锚点
            carAng : 12,        // 转向的角度
            maxSpeedX : 300,    // 水平的最大速度
            maxSpeed : 1800,    // 最大速度
            maxSpeedN : 2000,   // 氮气加速的最大速度
            addSpeed : 600,
            addSpeedN : 700,
            turnTime : 0.15,    // 转向时间
            recoverTime: 0.1,   // 恢复时间
            ngTimer: 5,  // 氮气加速的时间
            unLockMoney: 5000,  // 解锁消耗的金币
        },
        car3 : {
            img: 'img/main_scene/car04',
            name: '清纯一号',
            achorF : 0.2,       // 前轮锚点
            achorB : 0.8,       // 后轮锚点
            carAng : 12,        // 转向的角度
            maxSpeedX : 300,    // 水平的最大速度
            maxSpeed : 1800,    // 最大速度
            maxSpeedN : 2000,   // 氮气加速的最大速度
            addSpeed : 600,
            addSpeedN : 700,
            turnTime : 0.15,    // 转向时间
            recoverTime: 0.1,   // 恢复时间
            ngTimer: 5,  // 氮气加速的时间
            unLockMoney: 20000, // 解锁消耗的金币
        },
        car4 : {
            img: 'img/main_scene/car05',
            name: '清纯二号',
            achorF : 0.2,       // 前轮锚点
            achorB : 0.8,       // 后轮锚点
            carAng : 12,        // 转向的角度
            maxSpeedX : 300,    // 水平的最大速度
            maxSpeed : 1800,    // 最大速度
            maxSpeedN : 2000,   // 氮气加速的最大速度
            addSpeed : 600,
            addSpeedN : 700,
            turnTime : 0.15,    // 转向时间
            recoverTime: 0.1,   // 恢复时间
            ngTimer: 5,  // 氮气加速的时间
            unLockMoney: 50000, // 解锁消耗的金币
        },
        car5 : {
            img: 'img/main_scene/car06',
            name: '热情速吧',
            achorF : 0.2,       // 前轮锚点
            achorB : 0.8,       // 后轮锚点
            carAng : 12,        // 转向的角度
            maxSpeedX : 300,    // 水平的最大速度
            maxSpeed : 1800,    // 最大速度
            maxSpeedN : 2000,   // 氮气加速的最大速度
            addSpeed : 600,
            addSpeedN : 700,
            turnTime : 0.15,    // 转向时间
            recoverTime: 0.1,   // 恢复时间
            ngTimer: 5,  // 氮气加速的时间
            unLockMoney: 80000, // 解锁消耗的金币
        }
    };

    window.carLvUpCfg = {
        car0 : {
            lv: 4,
            lvCost: 10000,
            maxSpeed : 2200,
            maxSpeedN : 2400,
            addSpeed : 800,
            addSpeedN : 900,
            ngTimer: 9
        },
        car1 : {
            lv: 4,
            lvCost: 10000,
            maxSpeed : 2200,
            maxSpeedN : 2400,
            addSpeed : 800,
            addSpeedN : 900,
            ngTimer: 9
        },
        car2 : {
            lv: 4,
            lvCost: 10000,
            maxSpeed : 2200,
            maxSpeedN : 2400,
            addSpeed : 800,
            addSpeedN : 900,
            ngTimer: 9
        },
        car3 : {
            lv: 4,
            lvCost: 10000,
            maxSpeed : 2200,
            maxSpeedN : 2400,
            addSpeed : 800,
            addSpeedN : 900,
            ngTimer: 9
        },
        car4 : {
            lv: 5,
            lvCost: 15000,
            maxSpeed : 2300,
            maxSpeedN : 2500,
            addSpeed : 900,
            addSpeedN : 1000,
            ngTimer: 10
        },
        car5 : {
            lv: 5,
            lvCost: 15000,
            maxSpeed : 2300,
            maxSpeedN : 2500,
            addSpeed : 900,
            addSpeedN : 1000,
            ngTimer: 10
        }
    };

    window.aiCarCfg = {
        car0 : {
            img: 'img/main_scene/ncar01',
            speed : 1000,
            height : 204,
        },
        car1 : {
            img: 'img/main_scene/ncar02',
            speed : 800,
            height : 410,
        },
        car2 : {
            img: 'img/main_scene/ncar03',
            speed : 1200,
            height : 190,
        },
        car3 : {
            img: 'img/main_scene/ncar04',
            speed : 1000,
            height : 199,
        },
        car4 : {
            img: 'img/main_scene/ncar05',
            speed : 1000,
            height : 231,
        },
        car5 : {
            img: 'img/main_scene/ncar06',
            speed : 1000,
            height : 203,
        },
        car6 : {
            img: 'img/main_scene/ncar07',
            speed : 1000,
            height : 186,
        },
        car7 : {
            img: 'img/main_scene/ncar08',
            speed : 1000,
            height : 185,
        },
        car8 : {
            img: 'img/main_scene/ncar09',
            speed : 800,
            height : 270,
        },
        car9 : {
            img: 'img/main_scene/ncar10',
            speed : 1000,
            height : 206,
        },
        car10 : {
            img: 'img/main_scene/ncar11',
            speed : 1000,
            height : 204,
        },
        car11 : {
            img: 'img/main_scene/ncar12',
            speed : 1000,
            height : 187,
        },
        car12 : {
            img: 'img/main_scene/ncar13',
            speed : 1000,
            height : 163,
        },
        car13 : {
            img: 'img/main_scene/ncar14',
            speed : 1000,
            height : 163,
        },
        car14 : {
            img: 'img/main_scene/ncar15',
            speed : 1000,
            height : 203,
        },
        car15 : {
            img: 'img/main_scene/ncar16',
            speed : 1000,
            height : 198,
        }
    };

})();
