//底部公共js
// $(".foot-item").each(function (i, v) {
//     $(v).click(function () {
//         $(".foot-p").removeClass("active");
//         var token = getLocal("token");
//         if(token == null) {
//             $(".foot-p").eq(0).addClass("active");
//             $(".foot-img").eq(0).children("img").attr("src", "static/img/index/homepage2@2x.png");
//             $(".foot-img").eq(1).children("img").attr("src", "static/img/index/order@2x.png");
//             $(".foot-img").eq(2).children("img").attr("src", "static/img/index/endorsement@2x.png");
//             $(".foot-img").eq(3).children("img").attr("src", "static/img/index/personal@2x.png");
//             return false
//         }
//         $(".foot-p").eq(i).addClass("active");
//         switch (i) {
//             case 0:
//                 $(".foot-img").eq(0).children("img").attr("src", "static/img/index/homepage2@2x.png");
//                 $(".foot-img").eq(1).children("img").attr("src", "static/img/index/order@2x.png");
//                 $(".foot-img").eq(2).children("img").attr("src", "static/img/index/endorsement@2x.png");
//                 $(".foot-img").eq(3).children("img").attr("src", "static/img/index/personal@2x.png");
//                 break;
//             case 1:
//                 $(".foot-img").eq(0).children("img").attr("src", "static/img/index/homepage@2x.png");
//                 $(".foot-img").eq(1).children("img").attr("src", "static/img/index/order2@2x.png");
//                 $(".foot-img").eq(2).children("img").attr("src", "static/img/index/endorsement@2x.png");
//                 $(".foot-img").eq(3).children("img").attr("src", "static/img/index/personal@2x.png");
//                 break;
//             case 2:
//                 $(".foot-img").eq(0).children("img").attr("src", "static/img/index/homepage@2x.png");
//                 $(".foot-img").eq(1).children("img").attr("src", "static/img/index/order@2x.png");
//                 $(".foot-img").eq(2).children("img").attr("src", "static/img/index/endorsement2@2x.png");
//                 $(".foot-img").eq(3).children("img").attr("src", "static/img/index/personal@2x.png");
//                 break;
//             case 3:
//                 $(".foot-img").eq(0).children("img").attr("src", "static/img/index/homepage@2x.png");
//                 $(".foot-img").eq(1).children("img").attr("src", "static/img/index/order@2x.png");
//                 $(".foot-img").eq(2).children("img").attr("src", "static/img/index/endorsement@2x.png");
//                 $(".foot-img").eq(3).children("img").attr("src", "static/img/index/personal2@2x.png");
//                 break;
//         }
//     })
// });


/*公共返回上一页js*/
function returnBack() {
    // history.go(-1);
    // location.href = document.referrer;
    historyUtils.back();
    // var u = navigator.userAgent;
    // console.log(!!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/) && /(Safari)/i.test(u));
    // //针对ios原生浏览器处理
    // if(!!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/) && /(Safari)/i.test(u)){
    //     window.location.href=document.referrer;
    //     // goBack[0].setAttribute("onclick","javascript:window.location=document.referrer;");
    // }else{
    //     window.history.back(-1);
    // }
}

//公共swiper轮播
function lunbo() {
    var swiper = new Swiper('.swiper-container', {
        loop: true,
        autoplay: {
            delay: 2000,
            disableOnInteraction: false
        }
    });
}

//公共获取地址栏信息
function GetQueryString(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return unescape(r[2]);
    return null;
}

/*封装日期转换相关*/

//转换时间
function timeTransformation(time, type) {
    // new Date('2014-02-18T15:00:48'.replace(/\s/, 'T'))
    var datatime = new Date(time);
    var year = datatime.getFullYear();//取得年
    var month = datatime.getMonth() + 1;    //取得月,js从0开始取,所以+1
    var date1 = datatime.getDate(); //取得天
    var hour = datatime.getHours();//取得小时
    var minutes = datatime.getMinutes();//取得分钟
    var second = datatime.getSeconds();//取得秒
    // alert(month);
    if (hour < 10) {
        hour = "0" + hour;
    }
    if (minutes < 10) {
        minutes = "0" + minutes;
    }
    if (second < 10) {
        second = "0" + second;
    }
    if (month < 10) {
        month = "0" + month;
    }
    if (date1 < 10) {
        date1 = "0" + date1;
    }

    if (type == "time") {
        return hour + ':' + minutes;
    } else if (type == "hour") {
        return hour;
    } else if (type == "minutes") {
        return minutes;
    } else if (type == "year") {
        return year;
    } else if (type == "month") {
        return month;
    } else if (type == "day") {
        return date1;
    } else if (type == "date") {
        return month + '月' + date1 + '日';
    } else if (type == "dateCount") {
        return year + '-' + month + '-' + date1;
    } else if (type == "timeCount") {
        return hour + ':' + minutes + ':' + second;
    } else {
        return year + '-' + month + '-' + date1 + ' ' + hour + ':' + minutes + ':' + second;
    }
}

//将中文日期替换成——
function DayReg(day,packageYear) {
    var firstPo = day.indexOf("月");
    var lastPo = day.indexOf("日");
    var m = day.substring(0, firstPo);
    var d = day.substring(firstPo + 1, lastPo);
    if (m.length == 1) {
        m = "0" + m;
    }
    if (d.length == 1) {
        d = "0" + d;
    }
    // var y = new Date().getFullYear();
    return (packageYear + '-' + m + '-' + d);
}

//将——替换成中文日期
function replaceSeparator(day, type) {
    type = type || "MD";
    var dayArr = day.split("-");
    var result = '';
    if (dayArr.length == 3) {
        if (type == "YMD") {
            result = dayArr[0] + "年" + dayArr[1] + "月" + dayArr[2] + "日";
        } else {
            result = dayArr[1] + "月" + dayArr[2] + "日";
        }
    }
    return result;
}

//封装统一弹框
function layMessage(msg, type) {
    type = type || 0;
    layer.open({
        type: type,
        content: msg
        , skin: 'msg'
        , time: 2 //2秒后自动关闭
    });
}


/*封装统一正则验证*/

//手机号码验证
function mobileReg(phone) {
    var reg = /^1[34578][0-9]{9}$/;
    return reg.test(phone);
}

//验证邮箱
function emailReg(mail) {
    // var szReg = /^[A-Za-zd]+([-_.][A-Za-zd]+)*@([A-Za-zd]+[-.])+[A-Za-zd]{2,5}$/;
    var szReg = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
    return szReg.test(mail);
}

//验证身份证
function IDcardReg(card) {
// 身份证号码为15位或者18位，15位时全为数字，18位前17位为数字，最后一位是校验位，可能为数字或字符X
    var reg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
    return reg.test(card);
}

/*此方法用来解决，微信H5图片点击放大*/

/*imgObj接收图片的合集*/
function funcReadImgInfo(imgObj) {
    var imgs = [];
    for (var i = 0; i < imgObj.length; i++) {
        imgs.push(imgObj.eq(i).attr('src'));
        imgObj.eq(i).click(function () {
            var nowImgurl = $(this).attr('src');
            WeixinJSBridge.invoke("imagePreview", {
                "urls": imgs,
                "current": nowImgurl
            });
        });

    }
}


//微信支付相关的配置
function wxConfigFn(orderNo, orderId, orderType) {
    orderType = orderType ? orderType : "other";
    var payUrl;
    if (orderType == "hotel") {
        payUrl = "/ty_api/wechatPay/mallPayHotel";
    } else {
        payUrl = "/ty_api/wechatPay/mallPay";
    }
    $.ajax({
        url: baseAjaxUrl + "/wechatController/getSignature",
        type: "POST",
        data: {requestUrl: window.location.href},
        success: function (e) {
            if (e.errorCode == 200) {
                var data = e.data;
                wx.config({
                    debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
                    appId: data.appId, // 必填，公众号的唯一标识
                    timestamp: data.timestamp, // 必填，生成签名的时间戳
                    nonceStr: data.noncestr, // 必填，生成签名的随机串
                    signature: data.signature,// 必填，签名
                    jsApiList: [
                        // 所有要调用的 API 都要加到这个列表中
                        'chooseWXPay'
                    ]
                });

            }
        }
    });
    wx.ready(function () {
        var token = getLocal("token");

        $("#htmlMask").hide();
        $.ajax({
            beforeSend: function (xhr) {
                //发送ajax请求之前向http的head里面加入验证信息
                xhr.setRequestHeader("token", token); // 请求发起前在头部附加token
            },
            url: baseAjaxUrl + payUrl,
            type: "POST",
            data: {"orderNo": orderNo},
            success: function (res) {
                if (res.errorCode == 200) {
                    wx.chooseWXPay({
                        timestamp: res.data.timeStamp,  // 支付签名时间戳，注意微信jssdk中的所有使用timestamp字段均为小写。但最新版的支付后台生成签名使用的timeStamp字段名需大写其中的S字符
                        nonceStr: res.data.nonceStr,    // 支付签名随机串，不长于 32 位
                        package: res.data.package,      // 统一支付接口返回的prepay_id参数值，提交格式如：prepay_id=\*\*\*）
                        signType: res.data.signType,    // 签名方式，默认为'SHA1'，使用新版支付需传入'MD5'
                        paySign: res.data.paySign,      // 支付签名
                        success: function (res) {
                            // 支付成功后的回调函数
                            console.log(res);
                            if (res.errMsg == "chooseWXPay:ok") {
                                location.href = oneselfUrl+"paySuccess.html?orderId=" + orderId+"&orderNo="+orderNo+"&orderType="+orderType;
                            }
                            // alert(JSON.stringify(res));
                        }
                    });
                }
            }
        });

    });
    wx.error(function (res) {
        alert("config,配置失败")
    });
}

function getUser() {

    /*获取用户的详细信息，并且存储起来*/
    publicAjaxToken(baseAjaxUrl + "/ty_api/user/getDetail", "POST", {}, getUserDetailCall);

    //用户信息的回调
    function getUserDetailCall(res) {
        if (res.errorCode == 200) {
            var userInfo = {
                "headImg": res.data.headImg,
                "nickName": res.data.nickName,
                "userName": res.data.userName,
                "userId": res.data.userId,
                "mobile": res.data.mobile,
                "sex": res.data.sex,
                "isAgent": res.data.isAgent,
                "isSale": res.data.isSale
            };
            setSess("userInfo", JSON.stringify(userInfo));
        }
    }

}

/*微信的大前提配置*/
function wxInitConfigFn(callback) {
    //微信相关设置
    $.ajax({
        url: baseAjaxUrl + "/wechatController/getSignature",
        type: "POST",
        data: {requestUrl: window.location.href},
        success: function (e) {
            if (e.errorCode == 200) {

                var data = e.data;
                wx.config({
                    debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
                    appId: data.appId, // 必填，公众号的唯一标识
                    timestamp: data.timestamp, // 必填，生成签名的时间戳
                    nonceStr: data.noncestr, // 必填，生成签名的随机串
                    signature: data.signature,// 必填，签名
                    jsApiList: [
                        // 所有要调用的 API 都要加到这个列表中
                        'checkJsApi',
                        'onMenuShareTimeline',       // 分享到朋友圈接口
                        'onMenuShareAppMessage',  //  分享到朋友接口
                        'onMenuShareQQ',         // 分享到QQ接口
                        'onMenuShareWeibo',      // 分享到微博接口
                        'onMenuShareQZone',     //分享到QQ空间] // 必填，需要使用的JS接口列表
                        'getLocation',
                        'openLocation'
                    ]
                });
            }
        }
    });
    wx.ready(function () {
        wx.checkJsApi({
            jsApiList: [
                'checkJsApi',
                'onMenuShareTimeline',       // 分享到朋友圈接口
                'onMenuShareAppMessage',  //  分享到朋友接口
                'onMenuShareQQ',         // 分享到QQ接口
                'onMenuShareWeibo',      // 分享到微博接口
                'onMenuShareQZone',     //分享到QQ空间] // 必填，需要使用的JS接口列表
                'getLocation',
                'openLocation'
            ], // 需要检测的JS接口列表，所有JS接口列表见附录2,
            success: function (res) {
                // 以键值对的形式返回，可用的api值true，不可用为false
                // 如：{"checkResult":{"chooseImage":true},"errMsg":"checkJsApi:ok"}
            }
        });

        callback();
    });
    wx.error(function (res) {
        alert("config,配置失败")
    });
}

$('.forbidScrollIos').on('touchmove', function (event) {
    event.preventDefault();
});

//利用插件将html代码绘制成一张图
function htmlCanvas() {
    $("#loading").css("display", "-webkit-flex");
    $("#loading").css("display", "flex");

    //此处用到html2canvas插件
    var canvas2 = document.createElement("canvas");
    var _canvas = document.querySelector('#shareImgBox');
    var w = parseInt(window.getComputedStyle(_canvas).width);
    var h = parseInt(window.getComputedStyle(_canvas).height);
    console.log(w, h);
    //将canvas画布放大若干倍，然后盛放在较小的容器内，就显得不模糊了
    canvas2.width = w * 2;
    canvas2.height = h * 2;
    canvas2.style.width = w + "px";
    canvas2.style.height = h + "px";

    //可以按照自己的需求，对context的参数修改,translate指的是偏移量
    var context = canvas2.getContext("2d");
    context.scale(2, 2);
    context.translate(0, 0);
    html2canvas(document.querySelector('#shareImgBox'), {
        canvas: canvas2,
        taintTest: true, //在渲染前测试图片(没整明白有啥用)
        useCORS: true, //使用跨域(当allowTaint为true时这段代码没什么用,下面解释)
        background: "#fff",
        onclone: function (document) {
            hiddenDiv = document.getElementById('shareImgBox');
            hiddenDiv.style.display = 'block'; //  这里，设置display为block
        }
    }).then(function (canvas) {
        imgBlob = canvas.toDataURL('image/png', 1.0);
        layer.open({
            className: "share-laybox",
            content: '<img src="' + imgBlob + '" alt="" id="posters">',
            success: function () {
                $("#loading").css("display", "none");
            }
        });
    });
}