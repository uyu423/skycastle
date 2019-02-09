import { isDefine } from './isDefine';

/** *value* 가 정의되지 않은 값인지 검사한다. *null*, *undefined*, *NaN* 을 체크하고 정의되지 않은 값일 경우 *true* 를 리턴한다 */
export default function isNotDefine<T>(value: T | null | undefined): value is null {
  return !isDefine<T>(value);
}
