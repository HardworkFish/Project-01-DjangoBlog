/*-------------------------- +
  留言框字数限制
 +-------------------------- */

   function checkLength(which) {
	var maxChars = 280; //
	if(which.value.length > maxChars){
		alert("您出入的字数超出 280 字节的限制，自动截取 280 字节！");
		// 超过限制的字数了就将 文本框中的内容按规定的字数 截取
		which.value = which.value.substring(0,maxChars);
		return false;
	}else{
		var curr = maxChars - which.value.length; //250 减去 当前输入的
		document.getElementById("conBox").innerHTML = curr.toString();
		return true;
	}
}
