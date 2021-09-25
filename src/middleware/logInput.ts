
const logInput = async (resolve, root, args, context, info) => {
  console.log(
    `%c 🤡 logInput Info: ${(new Date()).toLocaleTimeString()} - ${JSON.stringify(args)}, ${JSON.stringify(context)}`,
    'background: #3CBD2B; color: #fff; font-size: 30px;')
  const result = await resolve(root, args, context, info)
  return result
}

export { logInput }
