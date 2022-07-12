/**
 * Author: Meng
 * Desc:
 */
export interface State {
  onCreate?(): void;
  onShow?(): void;
  onUpdate?(): void;
  onDestroy?(): void;
  init?(): void;

  push?(): void;
  back?(): void;
  navigate?(): void;
  replace?(): void;
  params?(): any;
  route?(): string;
  setNavigation?(): void;
  setNavigate?(): void;
}
