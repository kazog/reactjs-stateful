/**
 * Author: Meng
 * Create Date: 2022-01-09
 * Desc: 
 */

export function add(key, listener) {
  
  return function(target, name, descriptor) {
    const fn = descriptor.value;
    descriptor.value = function() {
      let value = fn.apply(this, arguments);
      msgChannel.publish(topic, value);
    };
  };
}

export function remove({key = null, listener = null}={}) {
  
}

export function single(key='', data={}) {
  
}

export function send(key='', data={}) {
  
}

export function clear() {
  
}