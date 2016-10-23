
//        这个属性直接取这个form
        var form = document.forms[0];
//         账号
        form.uid.onfocus = function () {
            var tips = this.nextElementSibling;
            tips.innerHTML = "请输入字母开头的字母、数字、6-18位";
            tips.parentNode.className = "";
        };
        form.uid.onblur = Vuid;
        function Vuid(e) {
            var key = false;
            var tips = form.uid.nextElementSibling;
            var txt = form.uid.value;
            if(txt == ""){
                if(e != undefined){
                    tips.innerHTML = "";
                }else{
                    tips.innerHTML = "用户名必须填写";
                    tips.parentNode.className = "err";
                }
            }else{
                if(
                        /^[a-z][a-z0-9]{5,17}$/i.test(txt)
                ){
                    tips.innerHTML = "填写正确";
                    tips.parentNode.className = "suc";
                    key = true;
                }else{
                    tips.innerHTML = "填写错误";
                    tips.parentNode.className = "err";
                }
            }
            return key;
        }
//         密码
        form.pwd.onfocus = function () {
            var tips = this.nextElementSibling;
            tips.innerHTML = "请填写6-20位字母、数字和特殊字符";
            tips.parentNode.className = "";
        };
        form.pwd.onblur = Vpwd;
        function Vpwd(e) {
            var key = false;
            var level = -1;
            var tips = form.pwd.nextElementSibling;
            var txt = form.pwd.value;
            if (txt == "") {
                if (e == undefined) {
                    tips.innerHTML = "密码必须填写";
                    tips.parentNode.className = "err";
                } else {
                    tips.innerHTML = "";
                }
            } else {
                if (txt.length < 6 || txt.length > 20) {
                    tips.innerHTML = "填写错误";
                    tips.parentNode.className = "err";
                } else {
                    if (/[a-z]/i.test(txt)) {
                        level++;
                    }
                    if (/[0-9]/i.test(txt)) {
                        level++;
                    }
                    if (/[^a-z0-9]/i.test(txt)) {
                        level++;
                    }{
                        tips.innerHTML = "填写正确";
                        tips.parentNode.className = "suc";
                        key = true;
                    }
                }
            }
        }
