import { Component, AfterViewInit, ViewEncapsulation, ViewChild } from '@angular/core';
import { DaterangePickerComponent } from 'ng2-daterangepicker';
import { GlobalService } from './../../../global/global.service';
import { Utils } from "./../../../utils/utils";

@Component({
    selector: '.html-bar-calendar',
    templateUrl: './calendar.component.html',
    styleUrls: ['./calendar.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class CalendarComponent implements AfterViewInit {
    @ViewChild(DaterangePickerComponent) rangepicker: DaterangePickerComponent;
    public daterange: any = {};
    public urlSubmit: any = {};
    public entrada = {
        val: '',
        txt: ''
    };
    public saida = {
        val: '',
        txt: ''
    };
    public vars: any;
    public options: any = {
        locale: {
            format: 'MM/DD/YYYY',
            monthNames: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
            daysOfWeek: ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'],
        },
        alwaysShowCalendars: false,
        autoApply: true,
        autoUpdateInput: true,
        showDropdowns: true,
        minDate: (new Date()),
        dateLimit: {
            days: 28
        },
        parentEl: '#pickMe'
    };
    constructor(private gd: GlobalService) {
        var self = this;
        self.vars = gd.vars;
        self.entrada.val = Utils.cookie('entrada');
        self.entrada.txt = self.entrada.val.replace(/^(\d*?)(.)(\d*?)(.)(\d{2})(\d{2})$/gi, '$3$4$1$2$6');
        self.saida.val = Utils.cookie('saida');
        self.saida.txt = self.saida.val.replace(/^(\d*?)(.)(\d*?)(.)(\d{2})(\d{2})$/gi, '$3$4$1$2$6');

    }

    ngAfterViewInit() {
        var self = this;
        if (self.rangepicker.datePicker.startDate)
            self.urlSubmit.in = Utils.date2str('', self.rangepicker.datePicker.startDate._d);
        if (self.rangepicker.datePicker.endDate)
            self.urlSubmit.out = Utils.date2str('', self.rangepicker.datePicker.endDate._d);
    }
    public nextInput(ev) {
        var self = this,
            tgt = ev.target;
        tgt = tgt ? tgt.parentNode.parentNode.parentNode : document;
        tgt = tgt.querySelector('.room input');
        if (tgt)
            tgt.focus();
    }
    public onKey(e) {
        var self = this,
            el;
        if (e.key === 'Escape') {
            el = < HTMLElement > document.querySelector('#pickMe .daterangepicker');
            if (el && el.style.display !== 'none')
                el.style.display = 'none';
        }
    }
    public onFocus(e) {
        var self = this;
        self.onClick.apply(this, arguments)
    }
    public onClickO = {
        t: < any > 0,
        old: []
    };
    public onClick(e) {
        var self = this,
            tgt = e.target,
            el = document.querySelector('#pickMe'),
            start = false,
            val, date;
        if (!e || !tgt)
            return true;
        if (tgt && tgt.parentNode && tgt.parentNode.parentNode && /check(in|out)/gi.exec(tgt.parentNode.parentNode.className))
            tgt = tgt.parentNode;
        if (e.target.id === 'pickMe' || /check(in|out)/gi.exec(e.target.className))
            tgt = e.target.parentNode.querySelector('.check' + (tgt.id || /in/gi.exec(tgt.className) ? 'in' : 'out') + ' > span');
        if (/check(in|out)/gi.exec(tgt.parentNode.className)) {
            start = !!(/in/gi.exec(tgt.parentNode.className));
            self.vars.show.calendarRight = !start;
            date = el.querySelector('[name="daterangepicker_' + (start ? 'start' : 'end') + '"]');
            if (date) {
                clearTimeout(self.onClickO.t);
                self.onClickO.t = setTimeout(function() {
                    self.onClickO.old = [{
                            txt: self.entrada.txt,
                            val: self.entrada.val
                        },
                        {
                            txt: self.saida.txt,
                            val: self.saida.val
                        }
                    ];
                    if (!start) {
                        self.rangepicker.datePicker.formInputsFocused.call(self.rangepicker.datePicker, {
                            target: date
                        });
                    }
                }, 0);
            }
        } else if (/(start|end)[-]date/.exec(tgt.className)) {
            start = !!(/start/gi.exec(tgt.className));
            self.vars.show.calendarRight = !start;
            val = el.querySelector('[name="daterangepicker_' + (start ? 'start' : 'end') + '"]');
            val = val ? val.value : '';
            val = (val || '/').split('/');
            if (val && val.length && val.length > 2 && (parseInt(val[1], 10) === parseInt(tgt.innerHTML, 10))) {
                date = val.join('/');
                val[2] = val[2].slice(-2);
                clearTimeout(self.onClickO.t);
                self.onClickO.t = setTimeout(function() {
                    if (self.rangepicker.datePicker.startDate)
                        self.blurDates[0] = self.rangepicker.datePicker.startDate.clone();
                    if (!start && self.rangepicker.datePicker.endDate)
                        self.blurDates[1] = self.rangepicker.datePicker.endDate.clone();
                    else
                        self.blurDates[1] = null;
                    self.rangepicker.datePicker['set' + (start ? 'Start' : 'End') + 'Date'](date);
                    self[start ? 'entrada' : 'saida'] = {
                        val: val.join('/'),
                        txt: [val[1], val[0], val[2]].join('/')
                    };
                    if (!start) {
                        self.onClickO.old = [];
                        self.rangepicker.datePicker.hide.call(self.rangepicker.datePicker, {})
                        self.vars.show.calendarRight = null;
                    } else {
                        self.saida = {
                            val: '',
                            txt: ''
                        };
                        self.vars.show.calendarRight = true;
                    }
                }, 0);
            }
        } else if (!self.saida.txt && self.onClickO.old.length) {
            self.entrada.txt = self.onClickO.old[0].txt;
            self.entrada.val = self.onClickO.old[0].val;
            self.saida.txt = self.onClickO.old[1].txt;
            self.saida.val = self.onClickO.old[1].val;
            self.onClickO.old = [];
        }
        return true;
    }

    public blurDates = [];
    public blurDate(value: any) {
        var self = this;
        if (self.blurDates.length >= 2 && self.vars.show.calendarRight !== null && !self.blurDates[1]) {
            // self.selectedDate.call(self, {
            //     start: self.blurDates[0],
            //     end: self.blurDates[1]
            // });
        }
    }
    public selectedDate(value: any) {
        var self = this;
        if (value.start) {
            self.entrada.val = value.start.format('MM/DD/YYYY');
            self.entrada.txt = value.start.format('DD/MM/YY');
            self.urlSubmit.in = Utils.date2str('', value.start._d);
            self.daterange.start = value.start;
        }
        if (value.end) {
            self.saida.val = value.end.format('MM/DD/YYYY');
            self.saida.txt = value.end.format('DD/MM/YY');
            self.urlSubmit.out = Utils.date2str('', value.end._d);
            self.daterange.end = value.end;
        } else {
            self.saida.val = '';
            self.saida.txt = '';
            self.daterange.end = value.start || '';
        }
        if ('label' in value) {
            self.onClick({
                target: self.rangepicker.datePicker.element[0]
            })
            self.daterange.label = '';
        }
    }
}
