/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Pipe } from '@angular/core';
export class TruncateCharactersPipe {
    /**
     * @param {?} value
     * @param {?=} limit
     * @param {?=} trail
     * @return {?}
     */
    transform(value, limit = 40, trail = '…') {
        if (!value) {
            value = '';
        }
        if (limit < 0) {
            limit *= -1;
            return value.length > limit ? trail + value.substring(value.length - limit, value.length) : value;
        }
        else {
            return value.length > limit ? value.substring(0, limit) + trail : value;
        }
    }
}
TruncateCharactersPipe.decorators = [
    { type: Pipe, args: [{
                name: 'truncate'
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJ1bmNhdGUtY2hhcmFjdGVycy5waXBlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHllbGxvd3Nwb3QvbmctdHJ1bmNhdGUvIiwic291cmNlcyI6WyJsaWIvdHJ1bmNhdGUtY2hhcmFjdGVycy5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsSUFBSSxFQUFpQixNQUFNLGVBQWUsQ0FBQztBQUtwRCxNQUFNLE9BQU8sc0JBQXNCOzs7Ozs7O0lBQ2pDLFNBQVMsQ0FBQyxLQUFhLEVBQUUsUUFBZ0IsRUFBRSxFQUFFLFFBQWdCLEdBQUc7UUFDOUQsSUFBSSxDQUFDLEtBQUssRUFBRTtZQUFFLEtBQUssR0FBRyxFQUFFLENBQUM7U0FBRTtRQUUzQixJQUFJLEtBQUssR0FBRyxDQUFDLEVBQUU7WUFDYixLQUFLLElBQUksQ0FBQyxDQUFDLENBQUM7WUFDWixPQUFPLEtBQUssQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLEtBQUssRUFBRSxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQztTQUNuRzthQUFNO1lBQ0wsT0FBTyxLQUFLLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUM7U0FDekU7SUFDSCxDQUFDOzs7WUFiRixJQUFJLFNBQUM7Z0JBQ0osSUFBSSxFQUFFLFVBQVU7YUFDakIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBQaXBlKHtcbiAgbmFtZTogJ3RydW5jYXRlJ1xufSlcbmV4cG9ydCBjbGFzcyBUcnVuY2F0ZUNoYXJhY3RlcnNQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG4gIHRyYW5zZm9ybSh2YWx1ZTogc3RyaW5nLCBsaW1pdDogbnVtYmVyID0gNDAsIHRyYWlsOiBzdHJpbmcgPSAn4oCmJyk6IHN0cmluZyB7XG4gICAgaWYgKCF2YWx1ZSkgeyB2YWx1ZSA9ICcnOyB9XG5cbiAgICBpZiAobGltaXQgPCAwKSB7XG4gICAgICBsaW1pdCAqPSAtMTtcbiAgICAgIHJldHVybiB2YWx1ZS5sZW5ndGggPiBsaW1pdCA/IHRyYWlsICsgdmFsdWUuc3Vic3RyaW5nKHZhbHVlLmxlbmd0aCAtIGxpbWl0LCB2YWx1ZS5sZW5ndGgpIDogdmFsdWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB2YWx1ZS5sZW5ndGggPiBsaW1pdCA/IHZhbHVlLnN1YnN0cmluZygwLCBsaW1pdCkgKyB0cmFpbCA6IHZhbHVlO1xuICAgIH1cbiAgfVxufVxuIl19