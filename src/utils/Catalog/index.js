module.exports.isAutenticatedMethod = method => {
  const methods = [
    'POST',
    'PUT',
    'PATCH',
    'DELETE'
  ]
  return !!methods.filter(item => method === item).length
}