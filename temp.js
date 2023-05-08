let data2

function getDataFromIB20Response(res) {
  return res._msg_._body_
}

function decodeResponse(response) {
  const temp = decodeURIComponent(JSON.stringify(response))
    .replace(/\+/g, ' ')
    .replace(/\n/g, '\\n')
  return getDataFromIB20Response(JSON.parse(temp))
}

fetch('https://m.kbankcorp.co.kr/ib20/act/FPMDPT1300000100A', {
  method: 'GET',
})
  .then((res) => res.json())
  .then((data) => {
    data2 = decodeResponse(data)
    console.log(data2)
  })
  .catch((error) => console.log(error))

function parseObjectProperties(obj) {
  for (let prop in obj) {
    if (obj.hasOwnProperty(prop)) {
      const value = obj[prop]
      if (typeof value === 'string') {
        try {
          obj[prop] = JSON.parse(decodeURIComponent(value))
        } catch (e) {
          // JSON.parse()가 실패한 경우는 값이 JSON 형식이 아니거나 디코딩에 실패한 경우이므로, 그냥 넘어갑니다.
        }
      } else if (typeof value === 'object') {
        parseObjectProperties(value)
      }
    }
  }
  return obj
}
