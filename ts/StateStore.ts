/**
 * Create By: Meng
 * Desc:
 */
export class StateStore<T> {
  public data?: T;
  private _func?: (data: any) => void | undefined;
  private _error?: (data: any, error: Error) => void | undefined;

  constructor(e: T) {
    this.data = e;
  }

  // 更新数据
  public add(e: any): void {
    if (e) {
      if (this._check(e)) {
        if (this._func) {
          this._func(e);
        }
      }
    } else {
      if (this._error) {
        // 此处返回上一次的值
        this._error(this.data, new Error("数据更新失败！"));
      }
      return;
    }
    this._setData(e);
  }

  // 更新数据-强制(跳过校验)
  public next(e: T): void {
    if (e) {
      if (this._func) {
        this._func(e);
      }
    } else {
      if (this._error) {
        // 此处返回上一次的值
        this._error(this.data, new Error("数据更新失败！"));
      }
      return;
    }
    this._setData(e);
  }

  // 赋值
  private _setData(e: any) {
    if (typeof e == "object") {
      this.data = Object.create(e);
    } else {
      this.data = e;
    }
  }

  // 数据校验规则-可拓展
  private _check(e: T) {
    let data: any = this.data;
    if (typeof e == "object") {
      return !Object.is(e, data);
    } else {
      return data !== e;
    }
  }

  // 克隆原始对象自身的值 是浅拷贝，而不是深拷贝 org2的值会覆盖org1
  public clone(org: any, org2: any) {
    return Object.assign(org, org2);
  }

  // 保持继承链的克隆 是浅拷贝
  public clone2(origin: any) {
    let originProto = Object.getPrototypeOf(origin);
    return Object.assign(Object.create(originProto), origin);
  }

  // 订阅
  public subscribe(
    func: (data: any) => void,
    error: (data: any, error: any) => void
  ): StateStore<T> {
    this._func = func;
    this._error = error;
    return this;
  }

  // 解绑
  public unsubscribe() {
    this.data = undefined;
    this._func = undefined;
    this._error = undefined;
  }
}
