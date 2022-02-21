/**
 * Create By: Meng
 * Desc:
 */
 export class StateSource<T> {
  public data?: T; // 数据
  private _func?: (data: any) => void | undefined;
  private _error?: (data: any, error: Error) => void | undefined;

  // 更新数据
  public add(e: any): void;

  // 更新数据-强制(跳过校验)
  public next(e: T): void;

  // 赋值
  private _setData(e: any): void;

  // 数据校验规则-可拓展
  private _check(e: T): void;

  // 克隆原始对象自身的值 是浅拷贝，而不是深拷贝 org2的值会覆盖org1
  public clone(org: any, org2: any): void;

  // 保持继承链的克隆 是浅拷贝
  public clone2(origin: any): void;

  // 订阅
  public subscribe(func: (data: any) => void, error: (data: any, error: any) => void): void;

  // 解绑
  public unsubscribe(): void;
}
