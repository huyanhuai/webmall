var countSeconds=60;//验证码倒计时
var aa;             //延迟变量
$("#checkCode").click(function () {
    var phone=$("#phone").val();
    if(phone==''){
        layMessage("请输入手机号！");
        return false;
    }
    if(!mobileReg(phone)){
        layMessage("手机格式不正确");
        return false;
    }

    clearTimeout(aa);//清除延迟
    settime();
    $(".mask").show();

    var code=$.md5(phone+"APP_20!$_TY_HZ");
    console.log(code);
    //向手机发送验证码
    publicAjax(baseAjaxUrl+"/ty_api/user/sendMessage","POST",{"code":code,"mobile":phone},sendInfoCall);

});

//验证码倒计时
function settime() {
    if(countSeconds==0){
        $(".mask").hide();
        $("#checkCode").html("获取验证码");
        countSeconds=60;
        return;
    }else{
        $("#checkCode").html("剩余"+countSeconds+"s");
        countSeconds--;
    }
    aa=setTimeout(function () {
        settime()
    },1000)
}
//发送短信的回调
function sendInfoCall(res) {
    if(res.errorCode==200){
        layMessage(res.message,1);
    }else{
        layMessage(res.message,1);
    }
}


//绑定手机号的回调
function bindingMobileCall(res) {
    console.log(res);
    if(res.errorCode==200){
        getUser();
        layMessage(res.message);
        setTimeout("historyUtils.back();",1000);
    }else{
        layMessage(res.message);
        // setTimeout("WeixinJSBridge.call('closeWindow');",2000);
    }
}