import { BaseContext } from 'koa'
import fs from 'fs'
import os from 'os'

/**
 * Applies the status code and message on ctx body and returns
 *
 * @param  {BaseContext} context Koa context object for error handling
 * @param  {number} status the statusCode to respond with
 * @param  {any} body the body of the response
 */
export const response = (
    context: BaseContext,
    status: number,
    body?: Record<string, any> | string | Array<Record<string, any>>,
): void => {
    context.status = status
    context.body = body
}

const platform: NodeJS.Platform = os.platform()

export function createFile (filepath: string, size: number, callback?: (err: Error) => void ) {
  var cb = function (err) {
      callback && callback(err);
  };
  if (fs.existsSync(filepath)) {
      cb('file existed.');
  } else {
      var cmd;
      switch (platform) {
          case 'win32':
              cmd = 'fsutil file createnew ' + filepath + ' ' + size;
              break;
          case 'darwin':
          case 'linux':
              cmd = 'dd if=/dev/zero of=' + filepath + ' count=1 bs=' + size;
              break;
      }
      var exec = require('child_process').exec;
      exec(cmd, function (err, _stdout, _stderr) {
          cb(err);
      });
  }
};
