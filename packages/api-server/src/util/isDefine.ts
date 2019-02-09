/** *value* 가 정의된 값인지 검사한다. *null*, *undefined*, *NaN* 을 체크하고 정의된 값일 경우 *true* 를 리턴한다 */
export function isDefine<T>(value?: T | undefined | null): value is T {
  if (value === undefined || value === null) {
    return false;
  }
  if (typeof value === 'number' && isNaN(value)) {
    return false;
  }
  return true;
}
