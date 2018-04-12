import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'stringToArray'
})
export class StringToArrayPipe implements PipeTransform {
  // 문자열을 배열로 바꾸기
  transform(value: string, args?: any): any {
    return JSON.parse(value)
  }

}
