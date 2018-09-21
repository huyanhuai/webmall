/*封装通用ajax*/
function publicAjax(url, type, data, callback) {
    $.ajax({
        url: url,
        type: type,
        data: data,
        success: callback,
    })
}

//带token的ajax
function publicAjaxToken(url, type, data, callback, async) {
    async = async || true;
    var token = getLocal("token");
    $.ajax({
        contentType: "application/x-www-form-urlencoded; charset=utf-8",
        beforeSend: function (xhr) {
            //发送ajax请求之前向http的head里面加入验证信息
            xhr.setRequestHeader("token", token); // 请求发起前在头部附加token
        },
        url: url,
        type: type,
        data: data,
        async: async,
        success: callback,
    })
}

//formdata传递的ajax
function publicAjaxFormdata(url, type, data, callback) {
    var token = getLocal("token");
    $.ajax({
        beforeSend: function (xhr) {
            //发送ajax请求之前向http的head里面加入验证信息
            xhr.setRequestHeader("token", token); // 请求发起前在头部附加token
        },
        url: url,
        type: type,
        data: data,
        processData: false,  // 不处理数据
        contentType: false,  // 不设置内容类型
        success: callback,
    })
}

/*定义ajax的基本路径*/
//海报的前缀
// var posterUrl="http://nwx.tongyoutrip.com/";
// var oneselfUrl="http://nwx.tongyoutrip.com/"
// var posterUrl="http://2y0640281b.imwork.net:48474/";
// var oneselfUrl="http://2y0640281b.imwork.net:48474/";
var posterUrl="http://web.tongyoutrip.com/";
var oneselfUrl="http://web.tongyoutrip.com/";
/*正式服务器*/
var baseAjaxUrl = "http://api.tongyoutrip.com";          //接口
var baseImgUrl="http://image.tongyoutrip.com";           //图片服务器
/*线上先下测试服务器*/
// var baseAjaxUrl="http://192.168.0.16:8060";                 //小许
// var baseAjaxUrl="http://192.168.0.148:8060";                 //小许
// var baseAjaxUrl="http://2y0640281b.imwork.net:35024";    //本地测试
// var baseImgUrl="http://192.168.0.148:80";
// var baseImgUrl="http://192.168.0.16:9000";                  //小马

// var baseAjaxUrl="http://192.168.0.192:8060";

//获取token
function getToken() {
    // delLocal("token");
    // alert(getLocal("token"));
    var token = getLocal("token");
    console.log("dsdffd" + token);
    // alert(token)
    //用于判断获取微信的code

}

// var cnzz_protocol = (("https:" == document.location.protocol) ? " https://" : " http://");
var cnzz_protocol = " https://";
document.write(unescape("%3Cspan id='cnzz_stat_icon_1274589946'%3E%3C/span%3E%3Cscript src='" + cnzz_protocol + "s19.cnzz.com/z_stat.php%3Fid%3D1274589946%26show%3Dpic1' type='text/javascript'%3E%3C/script%3E"));
