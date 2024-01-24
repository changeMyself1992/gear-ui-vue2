/**
 * 获取剩余时间
 * @param {Number} endTime          截止时间
 * @param {Number} deviceTime       设备时间
 * @param {Number} serverTime       服务器时间
 * @return {Object}                 剩余时间对象
 */
export const getRemainderTime = (serverTime, deviceTime, endTime) => {
  let t = endTime - Date.parse(new Date()) - serverTime + deviceTime
  // 当剩余时间小于0的时候 返回0
  if (t <= 0) t = 0

  const seconds = Math.floor((t / 1000) % 60)
  const minutes = Math.floor((t / 1000 / 60) % 60)
  const hours = Math.floor((t / (1000 * 60 * 60)) % 24)
  const days = Math.floor(t / (1000 * 60 * 60 * 24))

  return {
    total: t,
    days,
    hours,
    minutes,
    seconds
  }
}

/**
* 计时器方法
* @param {Number} serverTime       服务器时间
* @param {Number} deviceTime       设备时间
* @param {Number} endTime          截止时间
* @returns 
*/
export const timepiece = ({
  serverTime,
  deviceTime,
  endTime,
  intervalTime,
  timerCb
}) => new Promise(resolve => {

  function timingLogic() {
    // 得到剩余时间
    const remainTime = getRemainderTime(serverTime, deviceTime, endTime)
    if (remainTime.total > 0) {
      // 倒计时过程中
      timerCb && timerCb({
        timeData: remainTime,
        timer: intevalometer,
        status: false
      })
    } else if (remainTime.total <= 0) {
      // 倒计时结束
      clearInterval(intevalometer)
      resolve({
        timeData: remainTime,
        timer: intevalometer,
        status: true
      })
    }
  }
  timingLogic()
  const intevalometer = setInterval(() => {
    timingLogic()
  }, intervalTime || 1000)
})

// 数字前是否加 0
export function fullZero(v) {
  if (Number(v) < 10) {
    return `0${v}`
  }
  return v
}

/**
* 时间戳 换算
* @param {*} mss 
* @returns 
*/
export const handleTime = mss => {
  const day = parseInt((mss / (1000 * 60 * 60 * 24)), 10)
  const hour = parseInt((mss % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60), 10)
  const allHour = parseInt((mss / (1000 * 60 * 60)), 10)
  const min = parseInt((mss % (1000 * 60 * 60)) / (1000 * 60), 10)
  const sec = parseInt((mss % (1000 * 60)) / 1000, 10)
  return {
    day,
    hour: fullZero(hour),
    min: fullZero(min),
    sec: fullZero(sec),
    allHour: fullZero(allHour)
  }
}
