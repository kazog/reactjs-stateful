/**
 * Author: Meng
 * Create Date: 2022-01-09
 * Desc: 事件
 */

class Bus {
  static _bus3 = []; // 事件集合{ key, event, mode: 1:单次订阅, tag:标签, time: 消息保存多久及多久内再次订阅依旧可以收到消息}
  // 添加事件
  static add(key, event) {
    Bus._bus3.push({ key, event, mode: 9 });
  }

  // 发送事件
  static send(key, data, delay = 0) {
    if (delay > 0) {
      const timer = setTimeout(() => {
        clearTimeout(timer);
        Bus._sendMsg(key, data);
      }, delay);
    } else {
      Bus._sendMsg(key, data);
    }
  }

  static _sendMsg(key, data) {
    const event = Bus._bus3.filter((e) => e.key == key);
    event.forEach((e) => {
      if (e.event) {
        e.event(data);
      }
    });
    // 移除一次性事件
    Bus._bus3 = Bus._bus3.filter((e) => e.key != key || (e.key == key && e.mode != 1));
    // console.log(Bus._bus3);
  }

  // 一次性事件 - 不用单独移除
  static single(key, event, tag = "") {
    Bus._bus3 = Bus._bus3.filter((e) => e.key == key && e.tag == tag);
    Bus._bus3.push({ key, event, mode: 1, tag });
  }

  // 移除事件
  static remove(param = { key: "", event: null }) {
    if (param.key) {
      Bus._bus3 = Bus._bus3.filter((e) => e.key != param.key);
    } else if (param.event) {
      Bus._bus3 = Bus._bus3.filter((e) => e.event != param.event);
    }
  }

  // 清除事件
  static clear() {
    Bus._bus3 = [];
  }
}

export default Bus;
