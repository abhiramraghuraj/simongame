  var topleft = document.querySelector('.top-left-red');
  var bottomleft = document.querySelector('.bottom-left-qc');
  var topright = document.querySelector('.top-right-qc');
  var bottomright = document.querySelector('.bottom-right-qc');
  var gamepanel = document.querySelector('.gamepanel');

const getrandpanel = () => {
    const panels = [
        topleft,
        bottomleft,
        bottomright,
        topright
    ];
    return panels[parseInt(Math.random()*panels.length)];
};

// var red = document.querySelector('#red').addEventListener('click', sound);
// var blue = document.querySelector('#blue').addEventListener('click', sound);
// var green = document.querySelector('#green').addEventListener('click', sound);
// var yellow = document.querySelector('#yellow').addEventListener('click', sound);
var audio = false;
function sound(e){
    //alert(e.target.id);
  if(audio){
    switch(e.target.id){
        case 'red':
            var sound1 = new Audio("redaud.mp3");
            sound1.play();
            break;
        case 'blue':
            var sound2 = new Audio("blueaud.mp3");
            sound2.play();
            break;
        case 'green':
            var sound3 = new Audio("greenaud.mp3");
            sound3.play();
            break;
        case 'yellow':
            var sound4 = new Audio("yellowaud.mp3");
            sound4.play();
            break;         
        }
  }
};


  const sequence = [getrandpanel()];
  let seqtoguess = [...sequence];

  const flash = panel => {
      return new Promise((resolve,reject) => {
        panel.className += ' active';
        setTimeout(() => {
            panel.className = panel.className.replace(
                ' active',
                ''
                );
            setTimeout(() => {
                resolve();
            },250);    
        },1000);
      });
  };
let canclick = false;

const panelclicked = panel => {
    if (!canclick) return;
    //console.log(panel);
    audio = true;
    const expectedpanel = seqtoguess.shift();
    console.log(expectedpanel);
    console.log(panelclicked);
    if (expectedpanel == panel) {
        if (seqtoguess.length == 0){
            //start new round
            sequence.push(getrandpanel());
            seqtoguess = [...sequence];
            setTimeout(() =>{startflash()}, 1000);
        }
    } else {
        //end game
        alert('You were wrong! Click on New game to start again :)');
        sequence.splice(0,sequence.length);
    }
};
 const startflash = async () =>{
    audio = false;
    var red = document.querySelector('#red').addEventListener('click', sound);
    var blue = document.querySelector('#blue').addEventListener('click', sound);
    var green = document.querySelector('#green').addEventListener('click', sound);
    var yellow = document.querySelector('#yellow').addEventListener('click', sound);
     canclick = false;
    for(const panel of sequence) {
        await flash(panel);
    }
    canclick = true;
 }

const main = async () => {
    var start = new Audio("startaud.mp3");
    start.play();
    var vanish = document.querySelector('h3');
    vanish.style.display = 'none';
    setTimeout(() => {
        startflash()},1500)
};

 // main();


 var startgame = document.querySelector('#start').addEventListener('click' , main);

//  function blink(i){
//     var topleft = document.querySelector('.top-left-red');
//     var bottomleft = document.querySelector('.bottom-left-qc');
//     var topright = document.querySelector('.top-right-qc');
//     var bottomright = document.querySelector('.bottom-right-qc');
//     const sequence = {
//       topleft,
//       bottomleft,
//       bottomright,
//       topright
//     }
//     sequence[i].className += ' active';
//     setTimeout(() => {
//         sequence[i].className = sequence.className.replace(
//             ' active',
//             ''
//             );
            
//         },500);


//  }

//  function startgame(){
  
//      console.log(13)
//      var count = 0;
//      var order = [];
//      for(var i = 0;i<3;i++){
//          var a = Math.floor(Math.random()*4);
//         order.push(a);
//         console.log(order[0]);
//         var j = 0; 
//         while(j<order.length){
//             const abhi = [
//                 topleft,
//                 bottomleft,
//                 bottomright,
//                 topright
//             ]
//             console.log(abhi[a]);
//             abhi[order[j]].className += ' active';
//             setTimeout(() => {
//                 abhi[order[j]].className = abhi[order[j]].className.replace(' active', '');                      
//                 },500);
//                 j++;  
           
//         };
//       }
//  };
var menu = document.querySelector('.smallscreen').addEventListener('click',optionsfunc);
function optionsfunc(){
    console.log("123");
    var vanish1 = document.querySelector('.look');
    var x = document.querySelector('.instruction');
    //var show = document.querySelector('#list');
    if(x.className === 'instruction'){
        var vanish1 = document.querySelector('.look');
        vanish1.style.display = 'none';
        x.className += ' active';
    }
    else{
        vanish1.style.display = '';
        x.className = 'instruction';
    }

}
        
