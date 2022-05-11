
import Player from '@vimeo/player';
import _ from 'lodash';
const vimeo = document.querySelector('#vimeo-player');
const player = new Player(vimeo);


var throt_fun = _.throttle(function (data) {
    console.log(data);
    localStorage.setItem("videoplayer-current-time", data.seconds);
}, 1000);


player.on('timeupdate', function(data) {
   
    throt_fun(data);
    
});



const time = localStorage.getItem("videoplayer-current-time");
if(time){
    player.setCurrentTime(time);
}
