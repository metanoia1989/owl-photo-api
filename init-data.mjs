/**
 * 初始化用户和群组数据，从微澜的数据库那里查询，然后插入到 Mongodb 中
 */
import knex from 'knex'
import { MongoClient } from 'mongodb'
import dotenv from 'dotenv'

dotenv.config({ path: '.env' })


const dbQuery = knex({
  client: 'mysql',
  connection: {
    host: process.env.DATABASE_HOST,
    port: parseInt(process.env.DATABASE_PORT),
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
  },
})

const mongoDB = new MongoClient(process.env.DATABASE_URL)
var monDB;

async function syncGroupsData() {
  // SELECT * FROM ts_group WHERE `isplace` = 2  // 有实际地点的，就是线下的分馆了
  let groups = await dbQuery('ts_group')
    .where({
      isplace: 2
    })
    .select('*')

  let groupPhotoPrefix = 'http://park.sanzhi.org.cn/uploadfile/group/'
  await Promise.all(
    groups.map(async group => {
      var result = await monDB.collection('group').updateOne({
        _id: group.groupid
      }, {
        $set: {
          groupname: group.groupname,
          avatar: groupPhotoPrefix + group.photo,
          description: group.groupdesc,
          donateUrl: group.donateurl
        }
      },{
        upsert: true,
      })
    })
  )
}


async function syncUsersData() {
  // SELECT * FROM ts_user WHERE   // 有实际地点的，就是线下的分馆了
  let users = await dbQuery('ts_user_info')
    .where({
      isrenzheng: 1
    })
    .select('*')

  let userPhotoPrefix = 'http://park.sanzhi.org.cn/uploadfile/user/'
  let sexs = {
    "男": "male",
    "女": "female",
    "保密": "unknown",
  }
  await Promise.all(
    users.map(async user => {
      var result = await monDB.collection('user').updateOne({
        _id: user.userid
      }, {
        $set: {
          nickname: user.username,
          avatar: userPhotoPrefix + user.face,
          sex: sexs[user.sex],
          description: user.about,
        }
      },{
        upsert: true,
      })
    })
  )
}



async function main() {
  await mongoDB.connect()
  monDB = mongoDB.db('wavelib_photo')

  await syncGroupsData()
  await syncUsersData()

  return "执行完毕了"
}

main()
  .then(console.log)
  .catch(error => console.error("出错了", error))
  .finally(async () => {
    await dbQuery.destroy()
    await mongoDB.close()
  })
