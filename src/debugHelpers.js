import io from 'socket.io-client'

/* When stuff is logged to the console, send them to the shell on the computer.
 * This is usefull if you use PhoneGap Developer App, since you can not inspect
 * the console on smart devices. PhoneGap actually adds this code for us for
 * free, but at the end of the code. If our own code contains errors, that code
 * won't be executed. By adding it ourself at the begining, we make sure that
 * this funcitonality always work. */
var socket = io('http://' + document.location.host)
var oldLog = console.log
console.log = function(){
	oldLog.apply(console, arguments)
	socket.emit('console','log', Array.prototype.slice.call(arguments).join(' '))
}

/* When errors occur, write them to the console.
 * This is usefull if you use PhoneGap Developer App, since you can not
 * open the console on your smart device to inspect the error. */
window.onerror = function(msg, url, line, col, error){
	console.log("Error in "+url+" on line "+line+" (column "+col+"):")
	console.log(msg)
}
