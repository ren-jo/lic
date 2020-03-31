/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Pipe } from '@angular/core';
var TruncateCharactersPipe = /** @class */ (function () {
    function TruncateCharactersPipe() {
    }
    /**
     * @param {?} value
     * @param {?=} limit
     * @param {?=} trail
     * @return {?}
     */
    TruncateCharactersPipe.prototype.transform = /**
     * @param {?} value
     * @param {?=} limit
     * @param {?=} trail
     * @return {?}
     */
    function (value, limit, trail) {
        if (limit === void 0) { limit = 40; }
        if (trail === void 0) { trail = '…'; }
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
    };
    TruncateCharactersPipe.decorators = [
        { type: Pipe, args: [{
                    name: 'truncate'
                },] }
    ];
    return TruncateCharactersPipe;
}());
export { TruncateCharactersPipe };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJ1bmNhdGUtY2hhcmFjdGVycy5waXBlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHllbGxvd3Nwb3QvbmctdHJ1bmNhdGUvIiwic291cmNlcyI6WyJsaWIvdHJ1bmNhdGUtY2hhcmFjdGVycy5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsSUFBSSxFQUFpQixNQUFNLGVBQWUsQ0FBQztBQUVwRDtJQUFBO0lBY0EsQ0FBQzs7Ozs7OztJQVZDLDBDQUFTOzs7Ozs7SUFBVCxVQUFVLEtBQWEsRUFBRSxLQUFrQixFQUFFLEtBQW1CO1FBQXZDLHNCQUFBLEVBQUEsVUFBa0I7UUFBRSxzQkFBQSxFQUFBLFdBQW1CO1FBQzlELElBQUksQ0FBQyxLQUFLLEVBQUU7WUFBRSxLQUFLLEdBQUcsRUFBRSxDQUFDO1NBQUU7UUFFM0IsSUFBSSxLQUFLLEdBQUcsQ0FBQyxFQUFFO1lBQ2IsS0FBSyxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQ1osT0FBTyxLQUFLLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxLQUFLLEVBQUUsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUM7U0FDbkc7YUFBTTtZQUNMLE9BQU8sS0FBSyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDO1NBQ3pFO0lBQ0gsQ0FBQzs7Z0JBYkYsSUFBSSxTQUFDO29CQUNKLElBQUksRUFBRSxVQUFVO2lCQUNqQjs7SUFZRCw2QkFBQztDQUFBLEFBZEQsSUFjQztTQVhZLHNCQUFzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQFBpcGUoe1xuICBuYW1lOiAndHJ1bmNhdGUnXG59KVxuZXhwb3J0IGNsYXNzIFRydW5jYXRlQ2hhcmFjdGVyc1BpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcbiAgdHJhbnNmb3JtKHZhbHVlOiBzdHJpbmcsIGxpbWl0OiBudW1iZXIgPSA0MCwgdHJhaWw6IHN0cmluZyA9ICfigKYnKTogc3RyaW5nIHtcbiAgICBpZiAoIXZhbHVlKSB7IHZhbHVlID0gJyc7IH1cblxuICAgIGlmIChsaW1pdCA8IDApIHtcbiAgICAgIGxpbWl0ICo9IC0xO1xuICAgICAgcmV0dXJuIHZhbHVlLmxlbmd0aCA+IGxpbWl0ID8gdHJhaWwgKyB2YWx1ZS5zdWJzdHJpbmcodmFsdWUubGVuZ3RoIC0gbGltaXQsIHZhbHVlLmxlbmd0aCkgOiB2YWx1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHZhbHVlLmxlbmd0aCA+IGxpbWl0ID8gdmFsdWUuc3Vic3RyaW5nKDAsIGxpbWl0KSArIHRyYWlsIDogdmFsdWU7XG4gICAgfVxuICB9XG59XG4iXX0=