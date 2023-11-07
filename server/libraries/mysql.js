require('../../server/config/config');
const mysql = require('../../server/config/config.mysql');
const { camelCase } = require('./data');

module.exports = {
    // Funcion para ejecutar SPs de forma dinamica
    executeSP: (query, params) => {
        return new Promise((resolve, reject) => {
            try {
                const conn = mysql();
                let paramList = '';
                paramList +='(';
                if(params){
                    params.forEach(element => {
                        paramList += '?,';
                    });
                    paramList = paramList.substring(0, paramList.length-1)
                }
                paramList +=');';
                

                let schema = '`' + process.env.MYSQL_DATABASE + '`';
                let sp = '`' + query + '`';
                const strQuery = `CALL ${schema}.${sp} ${paramList}`;
                let q = conn.query(strQuery, params, function (err, results, fields) {
                    if (err !== null) {
                        reject({
                            messageError: err
                        });
                        return;
                    }

                    if (results.length === undefined || results.length === 1) {
                        resolve({
                            result: []
                        });
                        return;
                    }
                    if (results.length === 2) {
                        resolve({
                            result: camelCase(results[0])
                        });
                        return;
                    }
                    if (results.length > 2) {
                        let formatResult = results.recordsets.map(function(x) {
                            return camelCase(x);
                        });
                        resolve({
                            result: formatResult
                        });
                        return;
                    }
                });
                conn.end();
            } catch (err) {
                reject({
                    messageError: err
                });
            }
        });
    }
};