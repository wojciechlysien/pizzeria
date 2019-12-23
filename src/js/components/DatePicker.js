/* eslint-disable linebreak-style */
/* eslint-disable no-undef */

import { select, settings } from '../settings.js';
import BaseWidget from './BaseWidget.js';
import utils from '../utils.js';

class DatePicker extends BaseWidget {
  constructor(wrapper) {
    super(wrapper, utils.dateToStr(new Date()));

    const thisWidget = this;

    thisWidget.dom.input = thisWidget.dom.wrapper.querySelector(select.widgets.datePicker.input);

    thisWidget.initPlugin();
  }

  initPlugin() {
    const thisWidget = this;

    thisWidget.minDate = new Date(thisWidget.value);
    thisWidget.maxDate = utils.addDays(thisWidget.minDate, settings.datePicker.maxDaysInFuture);

    const options = {
      defaultDate: thisWidget.minDate,
      minDate: thisWidget.minDate,
      maxDate: thisWidget.maxDate,
      locale: {
        firstDayOfWeek: 1,
      },
      disable: [
        function (date) {
          return (date.getDay() === 1);
        }
      ],
      onChange: function (selectedDates, dateStr) {
        thisWidget.value = dateStr;
      },
    };

    flatpickr(thisWidget.dom.input, options);
  }

  parseValue(value) {
    return value;
  }

  isValid() {
    return true;
  }

  renderValue() {
  }

}

export default DatePicker;