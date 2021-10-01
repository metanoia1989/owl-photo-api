// @ts-check

import { config as globalConfig } from '@src/config';
import COS from 'cos-nodejs-sdk-v5';
import fs from 'fs'
import * as stream from 'stream';

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

/**
 * 获取文件下载链接
 *
 * @param key string
 * @param expires number
 * @returns 文件下载链接
 */
export function getObjectUrl(key: string, expires: number = 3600) {
  return new Promise((resolve, reject) => {
    cos.getObjectUrl({
      Bucket: config.Bucket,
      Region: config.Region,
      Key: key,
      Expires: expires,
      Sign: true,
    } , function (err, data) {
      err ? reject(err) : resolve(data)
    });
  })
}

/**
 * 批量获取对象下载链接
 *
 * @param keys string[] 键数组
 * @param expires 过期时间
 * @returns 链接列表
 */
export function getMultipleObjectUrl(keys: string[], expires: number = 3600) {
  return Promise.all(keys.map(key => {
    return new Promise((resolve, reject) => {
      cos.getObjectUrl({
        Bucket: config.Bucket,
        Region: config.Region,
        Key: key,
        Expires: expires,
        Sign: true,
      } , function (err, data) {
        err ? reject(err) : resolve(data)
      });
    })
  }))
}

/**
 * 获取文件永久下载链接
 *
 * @param key string
 * @returns 文件下载链接
 */
export function getForeverObjectUrl(key: string) {
  return new Promise((resolve, reject) => {
    cos.getObjectUrl({
      Bucket: config.Bucket,
      Region: config.Region,
      Key: key,
      Sign: false,
    }, function (err, data) {
      err ? reject(err) : resolve(data)
    });
  })
}

/**
 * 上传文件
 * @param key string
 * @param path string
 * @returns {Object} 文件上传后的信息
 */
export function putObject(filename: string, file: string | stream.Readable) {
  let stream: stream.Readable
  if (typeof file === "string") {
    stream = fs.createReadStream(file)
  } else {
    stream = file
  }
  return cos.putObject({
    Bucket: config.Bucket,
    Region: config.Region,
    Key: filename,
    Body: file,
  })
}

/**
 * 删除对象
 * @param key string
 * @returns cos响应通用对象
 */
export function deleteObject(key: string) {
  return cos.deleteObject({
    Bucket: config.Bucket, /* 必须 */
    Region: config.Region,    /* 必须 */
    Key: key,       /* 必须 */
  });
}

/**
 * 删除多个对象
 * @param keys string[] 键数组
 * @returns cos响应通用对象
 */
export function deleteMultiObject(keys: string[]) {
  return cos.deleteMultipleObject({
    Bucket: config.Bucket, /* 必须 */
    Region: config.Region,    /* 必须 */
    Objects: keys.map(item => ({ Key: item })),
  });
}
