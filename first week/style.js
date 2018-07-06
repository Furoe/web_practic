//鼠标悬浮菜单栏
function MouseOverStyle(Obj,str) {
	// body...
	Obj.style.backgroundColor = "#293846";
	var menu = document.getElementById(str);
	menu.style.color = "#fff";
}
//鼠标离开菜单栏
function MouseOutStyle(Obj,str) {
	// body...
	Obj.style.backgroundColor = "#2F4050";
	var menu = document.getElementById(str);
	menu.style.color = "#A7B1C2";
}
//鼠标点击一级菜单展开二级菜单或者关闭二级菜单
function ClickFirstMenu(Obj,str)
{
	var sub_menu = document.getElementById(str);
	var dip_status = sub_menu.style.display;
	if (dip_status == "none") 
	{
		Obj.style.height = "210px";
		Obj.style.backgroundColor = "#293846";
	}
	else
	{
		Obj.style.height = "70px";
		sub_menu.style.display = "none";
	}
}