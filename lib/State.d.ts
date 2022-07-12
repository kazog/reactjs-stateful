/**
 * Create By: Meng
 * Desc:
 */
 export abstract class State {
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
  setNavigation(navigation: any): void{};
  setNavigate(navigation: any): void {};
}
