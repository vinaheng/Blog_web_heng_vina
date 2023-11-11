export default defineEventHandler(async(event) => {
    var id = getRouterParam(event,'id')
    return {
      hello: id
    }
  })