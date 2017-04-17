var start = document.querySelector('#start')
var times = document.querySelector('b')
var main = document.querySelector('main')
var char = document.querySelector('#char')
var sec = document.querySelector('section')
var span = document.querySelector('span')
var counterStarting
var resetTime = 0
var randomChar
var total = 0
var right = 0
start.onclick = function(){
    this.className = 'bounceOutLeft animated'
    setTimeout(function(){
        this.hidden = true
    }.bind(this),500)
    setTimeout(function(){
        char.style.display = 'block'
        changeChar()
        char.className = "bounceInRight animated"
    },600)
    setTimeout(removeClass,1100)
    setTimeout(function(){
        main.style.display = 'block'
        counterStarting = setInterval(counter,10)
    },1000)
    setTimeout(function(){
        gameOver()
    },100000)
    char.className = 'bounceInRight animated'
    setTimeout(removeClass,500)
    window.onkeyup = function(event){
        if(total >= 30){
           gameOver()
        }
        else{
            sec.style.display = 'block'
            if(randomChar === event.key.toUpperCase()){
                char.className = 'bounceInRight animated'
                changeChar()
                setTimeout(removeClass,500)
                right++
                total++
                span.innerHTML = (right / total * 100).toFixed(2)
            }
            else{
                char.className = 'wobble animated'
                setTimeout(removeClass,500)
                total++
                span.innerHTML = (right / total * 100).toFixed(2)
            }
        }
        
    }
}
// 切换字母的函数
function changeChar(){
    var randomNum = Math.floor(Math.random() * 26) + 65
    randomChar = String.fromCharCode(randomNum)
    char.innerHTML = randomChar
}
// 计时器函数
function counter(){
    resetTime++
    times.innerHTML = resetTime  / 100
}
function removeClass(){
    char.className = ''
}
function gameOver(){
    clearInterval(counterStarting)
    char.innerHTML = 'Game Over'
}<hr>
<p><strong>版权声明</strong></p>
<p>![](http://ohaveqo1g.bkt.clouddn.com/image/copyright.png)</p>
<p><a href="http://manpusha.github.io" target="_blank" rel="external">Forward's Notes</a> by <a href="http://manpusha.github.io/about" target="_blank" rel="external">Forward Step</a> is licensed under a <a href="http://creativecommons.org/licenses/by-nc-nd/4.0/" target="_blank" rel="external">Creative Commons BY-NC-ND 4.0 International License</a>.<br>由<a href="http://manpusha.github.io/about" target="_blank" rel="external">Forward Step</a>创作并维护的<a href="http://manpusha.github.io" target="_blank" rel="external">Forward's Notes</a>博客采用<a href="http://creativecommons.org/licenses/by-nc-nd/4.0/" target="_blank" rel="external">创作共用保留署名-非商业-禁止演绎4.0国际许可证</a>。</p>
<p>本文首发于<a href="http://manpusha.github.io" target="_blank" rel="external">Forward's  Notes</a>博客（ <a href="http://stepforward.top">http://stepforward.top</a> ），版权所有，侵权必究。</p>
本文永久链接：http://stepforward.top/image/type/typegame.js