 
function sleep (time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}

module.exports =async (req, res, next) => {
  await sleep(10000)
  next()
}
