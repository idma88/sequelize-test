const USE_DB = !false;
const tz = require('../tz');

module.exports = (models) => {
  var modelObj = models.Timezones;

  class Timezones {
    static OffsetToTime(offset) {
      let _minute = offset % 60;
      let _hour   = (offset - _minute) / 60;

      return { hour: _hour, minute: _minute };
    }

    static TimeToOffset(hour, minute) {
      return hour * 60 + (minute % 60);
    }


    static async GetById(id) {
      if (USE_DB) {
        return modelObj.findOne({
          where: { id: id }
        });
      } else {
        var _p = new Promise((resolve, reject) => {
          let res = tz.find((item) => (item.id === id));
          if (res !== undefined)
            resolve(res);
          else
            reject(undefined);
        });

        return _p;
      }
    }

    static async GetByOffset(offset) {
      if (USE_DB) {
        return modelObj.findAll({
          where: { offset: offset }
        });
      } else {
        return new Promise((resolve, reject) => {
          let res = tz.find((item) => (item.offset === offset));
          if (res !== undefined)
            resolve(res);
          else
            reject(undefined);
        });
      }
    }

    static async GetByTime(hour, minute) {
      if (USE_DB) {
        return modelObj.findAll({
          where: { offset: this.TimeToOffset(hour, minute) }
        });
      } else {
        return new Promise((resolve, reject) => {
          let _offset = this.TimeToOffset(hour, minute);

          let res = tz.find((item) => (item.offset === _offset), );
          if (res !== undefined)
            resolve(res);
          else
            reject(undefined);
        });
      }
    }
  }

  return Timezones;
}
