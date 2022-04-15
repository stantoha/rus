window.addEventListener('DOMContentLoaded', () => {
    const tabs = document.querySelectorAll('.tabheader__item'),
        tabsContent = document.querySelectorAll('.tabcontent'),
        tabParent = document.querySelector('.tabheader__items');

    function hideTabContent() {
        tabsContent.forEach(item => {
            item.classList.add('hide');
            item.classList.remove('show', 'fade','active');
        });
        /* tabs.forEach(item => {
            item.classList.remove('active');
        }); */
    }

    function showTabContent(i = 0) {
        tabsContent[i].classList.add('show', 'fade','active');
        tabsContent[i].classList.remove('hide');
        /* tabs[i].classList.add('active'); */
    }

    hideTabContent();
    showTabContent();

    tabParent.addEventListener('click', (event) => {
        const target = event.target;
        if (target && target.classList.contains('tabheader__item')) {
            tabs.forEach((item, i) => {
                if (target == item) {
                    hideTabContent();
                    showTabContent(i);
                }
            });
        }
    });



let heroes = document.querySelectorAll('.hero'),
    backgrounds = ["","img/Новая папка/s72.png" , "img/Новая папка/s2.png", "img/Новая папка/s3.png", "img/Новая папка/s4.png", "img/Новая папка/s5.png", "img/Новая папка/s6.png","img/Новая папка/s1.png" ];

heroes.forEach((item, i) => {
    item.style.cssText = `background:url("${backgrounds[i]}") no-repeat 50% 50%;
        background-size:cover;`;
});

let mainBackground = document.querySelectorAll('.wrapper'),
mainBackgrounds = [  "img/backgrounds/bg (3).jpg","img/backgrounds/bg4.jpg" ,"img/backgrounds/bg5.jfif","img/backgrounds/bg6.jfif","img/backgrounds/bg7.jfif","img/backgrounds/bg8.jfif","img/backgrounds/bg (1).png","img/backgrounds/bg (2).png","img/backgrounds/bg (3).png","img/backgrounds/bg (4).png","img/backgrounds/bg (5).png","img/backgrounds/bg (6).png"];

mainBackground.forEach((item, i) => {
    
        let timerId=setTimeout(function log(){
           
            item.style.cssText = `
            background:url("${mainBackgrounds[i]}") no-repeat 50% 50%;
            background-size:cover;`;
            
            if(i<mainBackgrounds.length-1){
                i++;
                timerId=setTimeout(log,10000);
            }
            else if(i=mainBackgrounds.length-1){
                i=0;
                timerId=setTimeout(log,10000);
            }
           
        },2000);
    
   
});





const soldier = document.querySelector('.soldier'),
    hand = document.querySelectorAll('.hand__container'),
    leg = document.querySelectorAll('.leg__container'),
    bodyPart = document.querySelectorAll('.body__part'),
    handPart = document.querySelectorAll('.hand__part'),
    legPart = document.querySelectorAll('.leg__part'),
    foot = document.querySelectorAll('.foot'),
    buttonMove = document.querySelector('.butt'),
    buttonShoot = document.querySelector('.butt__shoot'),
    soldierCont = document.querySelector('.soldier__container'),
    tank = document.querySelector('.tank__container')

tankCont = document.querySelector('.tank__container'),

rocket=document.querySelector('.rocket'),
tanktop=document.querySelector('.tanktop'),
rpg=document.querySelector('.rpg');

let soldierMove = function () {
    soldierCont.classList.add('soldier__move');
}


let bodyMove = function (i) {
    soldier.classList.add('body__move');
}

let kneeBodyMove = function () {
    soldierCont.classList.remove('soldier__move');
    soldierCont.classList.add('knee__body__move');
}

let bodyPartMove = function () {
    bodyPart.forEach(item => {
        if (item.classList.contains('chest') || item.classList.contains('pelvis')) {
            item.classList.add('chest__move');
        } else if (item.classList.contains('stomach') || item.classList.contains('head')) {
            item.classList.add('stomach__move');
        }
    })
}


let shinMove = function () {
    legPart.forEach(item => {
        if (item.classList.contains('left__shin')) {
            item.classList.add('left__shin__move');
        } else if (item.classList.contains('right__shin')) {
            item.classList.add('right__shin__move');
        }
    })
}

let footMove = function () {
    foot.forEach(item => {
        if (item.classList.contains('left__foot')) {
            item.classList.add('left__foot__move');
        } else if (item.classList.contains('right__foot')) {
            item.classList.add('right__foot__move');
        }
    })
}


let handMove = function () {
    handPart.forEach(item => {
        if (item.classList.contains('left__arm')) {
            item.classList.add('left__arm__move');
        } else if (item.classList.contains('right__arm')) {
            item.classList.add('right__arm__move');
        } else if (item.classList.contains('left__wirst')) {
            item.classList.add('left__arm__move');
        } else if (item.classList.contains('right__wirst')) {
            item.classList.add('right__arm__move');
        }
    })
}


let addHandMove = function () {

    hand.forEach(item => {
        if (item.classList.contains('right')) {
            item.classList.add('left__hand__move');
        } else if (item.classList.contains('left')) {
            item.classList.add('right__hand__move');
        }
    });
}

let addLegMove = function () {

    leg.forEach(item => {
        if (item.classList.contains('right')) {
            item.classList.add('left__leg__move');

        } else if (item.classList.contains('left')) {
            item.classList.add('right__leg__move');
        }
    });
}

let tankMove = function () {
    tank.classList.add('tank__move');
}



let rpgLaunchBodyPosition=function(){
    bodyPart.forEach(item=>{
        item.classList.remove('stomach__move');
        item.classList.remove('chest__move');
    })
    leg.forEach((item)=>{
        if( item.classList.contains('right__leg__move')){
            item.classList.remove('right__leg__move');
            
        }
        else if( item.classList.contains('left__leg__move')){
            item.classList.remove('left__leg__move');
            item.classList.add('rpg__leg__skew');
        }
    });
    legPart.forEach(item=>{
        if(item.classList.contains('shin')){
            item.classList.remove('left__shin');
            item.classList.remove('left__shin__move');
           item.classList.add('rpg__shin__skew');
        }
    })

    foot.forEach(item=>{
        
            item.classList.remove('left__foot__move');
            item.classList.remove('right__foot__move');
            item.classList.remove('left__foot');
            item.classList.remove('right__foot');
        
    })
    hand.forEach(item=>{
        item.classList.remove('right__hand__move');
        item.classList.remove('left__hand__move');
        item.classList.add('rpg__hand__skew');
    });
    handPart.forEach(item=>{
        if(item.classList.contains('arm')){
            if(item.classList.contains('left__arm')){
              /*   item.classList.remove('left__arm'); */
                item.classList.remove('left__arm__move');
                item.classList.add('rpg__arm__skew');
            }
            else if(item.classList.contains('right__arm')){
              /*   item.classList.remove('right__arm'); */
                item.classList.remove('right__arm__move');
                item.classList.add('rpg__arm__skew');
            }           
        }
        else if(item.classList.contains('wirst')){
            if(item.classList.contains('left__arm')){
              /*   item.classList.remove('left__arm'); */
                item.classList.remove('left__arm__move');
                item.classList.add('rpg__arm__skew');
            }
            else if(item.classList.contains('right__arm')){
              /*   item.classList.remove('right__arm'); */
                item.classList.remove('right__arm__move');
                item.classList.add('rpg__arm__skew');
            } 
        }
    })
    rpg.classList.add('rpg__skew');
}

let rocketLaunch=function(){
    rocket.classList.add('rocket__launch');
}

let tanktopBlow=function(){
    tankCont.classList.add('flames');
    tanktop.classList.add('tanktop__move');
  setTimeout(()=>{
    tankCont.classList.remove('flames');
    tankCont.classList.add('smoke');
  },500);
  


}


let addMove = function () {
    soldierMove();
    tankMove();
    addHandMove();
    addLegMove();
    handMove();
    shinMove();
    footMove();
    bodyPartMove();
    bodyMove(0);
    setTimeout(rpgLaunchBodyPosition,8000);
  /*   setTimeout(rocketLaunch,10000);
    setTimeout(tanktopBlow,10500); */
};
function buttonChange(){
    
        buttonMove.style.cssText=`display:none;`;
        buttonShoot.style.cssText=`display:block;`;
    
}

buttonMove.addEventListener(('click'), () => {
    addMove();
    setTimeout(buttonChange,8000);
});



buttonShoot.addEventListener('click',function shoot(){
  
        setTimeout(rocketLaunch,1000);
    setTimeout(tanktopBlow,1500);
    
})

});

document.querySelector('iframe').autoplay=true;
