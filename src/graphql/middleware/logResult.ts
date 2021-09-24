
const logResult = async (resolve, root, args, context, info) => {
  const result = await resolve(root, args, context, info)
  console.log(`%c 🤡 logResult info ${JSON.stringify(result)}`, 'background: #3CBD2B; color: #fff; font-size: 30px;')
  return result
}

export { logResult }
