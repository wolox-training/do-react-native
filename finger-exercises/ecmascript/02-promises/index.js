// Hint: use setInterval, create a new Promise and measure time with Date.now()

export function delay(time) {
  return new Promise(function (resolve, reject) {
    if (time > 500) {
      reject(new Error("This time is too much !"));
    } else {
      resolve(time);
    }
  });
}

export async function asyncDelay(timeout) {
  return await timeout;
}
