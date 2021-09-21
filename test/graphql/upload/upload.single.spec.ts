/**
 * 测试单文件上传，暂时不用框架，因为不会用哈哈
 */

import { createReadStream } from 'fs'
import { createClient, gql } from '@urql/core'
import { multipartFetchExchange } from '@urql/exchange-multipart-fetch'
import { config } from '../../../src/config'
import 'isomorphic-unfetch'

const UploadFile = gql`
  mutation UploadFile($file: Upload!) {
    singleUpload(file: $file) {
      _id
      path
      filename
      mimetype
    }
  }
`
const client = createClient({
  url: `http://localhost:${config.port}${config.GRAPHQL_PATH}`,
  exchanges: [multipartFetchExchange],
})
async function main() {
  const data = await client.mutation(UploadFile, {
    file: createReadStream( './budda.png' )
  }).toPromise()
  console.log(JSON.stringify(data, undefined, 2))
}

main().catch((error) => console.error(error))
