const jwt = require('jsonwebtoken');

module.exports = {
    formatData: (dataResult) => {
        try {
            var string = JSON.stringify(dataResult[0]);
            var json = JSON.parse(string);
            return json;
        } catch (error) {
            return null;
        }
    },
    camelCase: (dataResult) => {
        var camelCased = dataResult.map(function(item) {
        var mapped = {};
          for (var key in item) {
            mapped[`${key.charAt(0).toLowerCase()}${key.slice(1)}`] = item[key];
          }
          return mapped;
        });
        return camelCased;
    },
    getBool: (val) => {
        try
        {
            if (val === null || val === undefined)
                return null;
        
            return !!JSON.parse(String(val).toLowerCase());
        } catch (err) {
            return null;
        }
    },
    getDateStringFromISO: (val) => {
        try
        {
            if (val === null || val === undefined)
                return null;
        
            val = val.replace('T' , ' ');
            val = val.replace('Z' , '');
  
            return val;
        } catch (err) {
            return null;
        }
    }
};