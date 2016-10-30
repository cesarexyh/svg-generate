$(document).ready(function() {
	$(".dropdown-menu a").click(function(event) {
		var ID = $(this).attr("id"); //获取选中的id值
		var boardStr = ID.slice(0, ID.indexOf('-')); //查看选中的是哪一个组件也是对应存放的文件夹名字
		var boardUrl = boardStr + ' iframe'; //在界面显示部位
		console.log(boardUrl);
		var svgUrl = "svg/" + boardStr + "/" + ID + ".svg";
		$("#" + boardUrl).attr("src", svgUrl);
	});
	// $("#to-svg").click(function(event) {
	// 	/* Act on the event */
	// });
});