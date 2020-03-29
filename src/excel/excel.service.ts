import { Injectable } from '@nestjs/common';
import xlsx from 'node-xlsx';
var path = require('path');
const fs = require('fs');
@Injectable()
export class ExcelService {
  async writeEcxcel() {
    console.log('调用到写excel方法啦');
    const data = [
      [1, 2, 3],
      [true, false, null, 'sheetjs'],
      ['foo', 'bar', new Date('2014-02-19T14:30Z'), '0.3'],
      ['baz', null, 'qux'],
    ];
    var buffer = xlsx.build([{ name: 'mySheetName', data: data }]);
    fs.writeFile('test.xlsx', buffer, err => {
      if (err) throw err;
      console.log('The file has been saved!');
    });
  }
}
