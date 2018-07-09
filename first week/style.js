//鼠标悬浮菜单栏
function MouseOverStyle(Obj,str) {
	// body...
	Obj.style.backgroundColor = "#293846";
	var menu = document.getElementById(str);
	menu.style.color = "#fff";
}
//鼠标离开菜单栏
function MouseOutStyle(Obj,str1,str2) {
	// body...
	var menu = document.getElementById(str1);
	if (str2 == '') 
	{
		menu.style.color = "#A7B1C2";
		Obj.style.backgroundColor = "#2F4050";
	}
	else
	{
		//检测二级菜单是否处于展开状态，若展开，鼠标移开样式不变
		var sub_menu = document.getElementById(str2);
		var disp_status = sub_menu.style.display;
		//alert(disp_status);
		if(disp_status == "none")
		{
			menu.style.color = "#A7B1C2";
			Obj.style.backgroundColor = "#2F4050";
		}
	}
}
//鼠标点击一级菜单展开二级菜单或者关闭二级菜单
function ClickFirstMenu(str1,str2)
{
	var menu = document.getElementById(str1);
	var sub_menu = document.getElementById(str2);
	var dip_status = sub_menu.style.display;
	//alert("status:"+dip_status);
	if (dip_status == "none") 
	{
		menu.style.height = "200px";
		menu.style.width = "197px";
		menu.style.backgroundColor = "#293846";
		sub_menu.style.display = "block";
		menu.style.borderLeft = "3px solid #19AA8D";
		//alert("执行结束");
	}
	else
	{
		menu.style.height = "70px";
		menu.style.borderLeft = "none";
		sub_menu.style.display = "none";
	}
}