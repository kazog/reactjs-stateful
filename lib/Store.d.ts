/**
 * Author: Meng
 * Create Date: 2022-01-09
 * Desc:
 */
 export abstract class Store {
  public onCreate?(): void;
  public onShow?(): void;
  public onUpdate?(): void;
  public onDestroy?(): void;
  public init?(): void;

  public push?(): void;
  public back?(): void;
  public navigate?(): void;
  public replace?(): void;
  public params?(): any;
  public route?(): string;
  public setNavigate?(navigation: any): void;
}
