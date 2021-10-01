// @ts-check

import { config as globalConfig } from '@src/config';
import COS from 'cos-nodejs-sdk-v5';

const config = globalConfig.ossConfig

const cos = new COS({
  // 必选参数
  SecretId: config.SecretId,
  SecretKey: config.SecretKey,
  // 可选参数
  FileParallelLimit: 3,    // 控制文件上传并发数
  ChunkParallelLimit: 8,   // 控制单个文件下分片上传并发数，在同园区上传可以设置较大的并发数
  ChunkSize: 1024 * 1024 * 8,  // 控制分片大小，单位 B，在同园区上传可以设置较大的分片大小
  Proxy: '',
  Protocol: 'https:',
  FollowRedirect: false,
});

export function camSafeUrlEncode(str) {
  return encodeURIComponent(str)
    .replace(/!/g, '%21')
    .replace(/'/g, '%27')
    .replace(/\(/g, '%28')
    .replace(/\)/g, '%29')
    .replace(/\*/g, '%2A');
}

export function getAuth(key: string) {
  var auth = cos.getAuth({
    Method: 'get',
    Key: key,
    Expires: 60,
  });
  // 注意：这里的 Bucket 格式是 test-1250000000
  var url = 'https://' + config.Bucket + '.cos.' + config.Region + '.myqcloud.com' + '/' + camSafeUrlEncode(key).replace(/%2F/g, '/') + '?sign=' + encodeURIComponent(auth);
  return url
}

export function getObjectUrl(key: string) {
  return new Promise((resolve, reject) => {
    cos.getObjectUrl({
      Bucket: config.Bucket,
      Region: config.Region,
      Key: key,
      Expires: 60,
      Sign: true,
    } , function (err, data) {
      err ? reject(err) : resolve(data)
    });
  })
}

