
function generateNavHtml(menuList) {
    var innerhtml = "";
    if (menuList.subMenuList != "undefined" && menuList.subMenuList != null && menuList.subMenuList.length > 0) {
        innerhtml += "<ul>";
        for (var j = 0; j < menuList.subMenuList.length; j++) {
            if (menuList.subMenuList[j].url == "") {
                innerhtml += "<li><a href=\"javascript:void(0);\"><span>" + menuList.subMenuList[j].title + "</span>";
            }
            else {
                innerhtml += "<li><a href=\"" + menuList.subMenuList[j].url + "\" target=\"frameRight\"><span>" + menuList.subMenuList[j].title + "</span>";
            }
            if (menuList.subMenuList[j].subMenuList != "undefined" && menuList.subMenuList[j].subMenuList != null && menuList.subMenuList[j].subMenuList.length > 0) {
                innerhtml+="<i class=\"glyphicon glyphicon-chevron-right\"></i></a>";
            }
            else
            {
                innerhtml += "</a>";
            }
            innerhtml += generateNavHtml(menuList.subMenuList[j]);
            innerhtml += "</li>";
        }

        innerhtml += "</ul>";
    }
    return innerhtml;
}


(function () {
    var menuLiList = "<ul class=\"nav-left\">";
    if (menuList != undefined && menuList != null && menuList.length > 0) {
        for (var i = 0; i < menuList.length; i++) {
            if (menuList[i].subMenuList != "undefined" && menuList[i].subMenuList != null && menuList[i].subMenuList.length > 0) {
                menuLiList += "<li><div class=\"" + menuList[i].iconClass + "\"></div><a href=\"javascript:void(0);\"><span>" + menuList[i].title + "</span><i class=\"glyphicon glyphicon-chevron-right\"></i></a>";

            }
            else {
                menuLiList += "<li><div class=\"" + menuList[i].iconClass + "\"></div><a href=\"" + menuList[i].url + "\" target=\"frameRight\"><span>" + menuList[i].title + "</span></a>";
            }
            menuLiList += generateNavHtml(menuList[i]);
            menuLiList += "</li>";
        }
    }
    else {

    }
    menuLiList += "</ul>"

    if (menuLiList != "") {
        console.log(menuLiList);

        document.getElementById("menu").innerHTML = menuLiList;
    }   
})()







