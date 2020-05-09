$(document).ready(function () {
    //时间
    var show = document.getElementById("time");
    Number.prototype.getWeekName = function () {
        switch (parseInt(this)) {
            case 0:
                return "周日";
            case 1:
                return "周一";
            case 2:
                return "周二";
            case 3:
                return "周三";
            case 4:
                return "周四";
            case 5:
                return "周五";
            case 6:
                return "周六";
            default:
                return "unknow";
        }
    };
    setInterval(function () {
        var time = new Date();
        // 程序计时的月从0开始取值后+1
        var m = time.getMonth() + 1;
        var t = time.getFullYear() + "年" + m + "月" + time.getDate() + '日</span> <span class="t_hours">' + time.getHours() + ":" + time.getMinutes() + ":" + time.getSeconds() + '</span><span class="t_year"><span style="margin-left: 5px">' + time.getDay().getWeekName() + '</span>';
        show.innerHTML = t;
    }, 1000);
});
