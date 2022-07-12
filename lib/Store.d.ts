/**
 * Author: Meng
 * Create Date: 2022-01-09
 * Desc:
 */
 export abstract class Store {
  onCreate(): void;
  onShow(): void;
  onUpdate(): void;
  onDestroy(): void;
  init(): void;

  push(): void;
  back(): void;
  navigate(): void;
  replace(): void;
  params(): any;
  route(): string;
  setNavigate(navigation: any): void;
}
