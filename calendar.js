(function ($, window) {
    $.fn.calendar = function (config) {
        var opt  = $.extend({
            date: '',  //yyyy-MM || yyyy/MM
            isWeekend: true, //周末是否变色
            curDayClass: 'current',
            onChanged: function () {}
        }, config);

        function getDays(year, month) {
            // 年  月少一个月 上一天0 = 上一个月
            return new Date(year, month, 0).getDate();
        }

        var self = this,
            yearSelect = 0,
            monthSelect = 0;

        self.goToNextMonth = function () {
            if (monthSelect++ >= 12) {
                yearSelect += 1;
                monthSelect = 1;
            }
            renderTbody(yearSelect, monthSelect);
            console.log(yearSelect, monthSelect);
        }

        self.goToPrevMonth = function () {
            if (monthSelect-- <= 1) {
                yearSelect -= 1;
                monthSelect = 12;
            }
            renderTbody(yearSelect, monthSelect);
            console.log(yearSelect, monthSelect);
        }

        function renderTbody (year, month) {
            var today = new Date(),
                curYear = today.getFullYear(),
                curMonth = today.getMonth() + 1,
                curDate = today.getDate();

            // 获取默认的选中时间
            var _date = opt.date ? opt.date.split(/[-||\/]/) : [new Date().getFullYear(), new Date().getMonth() + 1];

            // 当有选中的时间后,修改默认的时间
            var _year = +year || +_date[0],
                _month = +month || +_date[1],
                // 当前星期几
                _firstDay = new Date(_year, _month -1, 1).getDay(),
                _weeks = ['日', '一', '二', '三', '四', '五', '六'];

            var thead = '',
                tbody = '',
                result = '',
                isThisMonth = _year === curYear && _month === curMonth ? true : false;
                yearSelect = _year;
                monthSelect = _month;

                // 渲染星期
                for (var i = 0; i < 7; i++) {
                    thead += '<th>' + _weeks[i] + '</th>';
                }
                thead = '<tr>' + thead + '</tr>';

                //渲染天
                for (var j = 0, len = _firstDay + getDays(_year, _month); j < len; j++) {
                    if (j % 7 === 0) {
                        tbody += '<tr>';
                    }
                    tbody += '<td' + (isThisMonth && j - _firstDay + 1 === curDate ? ' class="' + opt.curDayClass + '"' : '') + ' data-id="' + (j - _firstDay + 1) + '"><div><span>' + (j < _firstDay ? '&nbsp;' : j - _firstDay + 1) + '</span></div></td>';
                    if ((j !== 0 && (j + 1) % 7 === 0) || j === len - 1) {
                        tbody += '<tr>';
                    }
                }
                result = thead + tbody;

                self.html('<table>' + result + '</table>');
                if (opt.isWeekend) {
                    $('tr', self).find('td:first, td:eq(6), th:first, th:eq(6)').addClass('weekend');
                }
                opt.onChanged(yearSelect, monthSelect, getDays(yearSelect, monthSelect));

        }
        // each() 方法规定为每个匹配元素规定运行的函数
        return self.each(renderTbody);
    }
})(window.jQuery || window.Zepto, window)
