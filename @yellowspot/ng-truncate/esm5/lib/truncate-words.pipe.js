/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Pipe } from '@angular/core';
var TruncateWordsPipe = /** @class */ (function () {
    function TruncateWordsPipe() {
    }
    /**
     * @param {?} value
     * @param {?=} limit
     * @param {?=} trail
     * @return {?}
     */
    TruncateWordsPipe.prototype.transform = /**
     * @param {?} value
     * @param {?=} limit
     * @param {?=} trail
     * @return {?}
     */
    function (value, limit, trail) {
        if (limit === void 0) { limit = 40; }
        if (trail === void 0) { trail = '…'; }
        /** @type {?} */
        var result = value || '';
        if (value) {
            /** @type {?} */
            var words = value.split(/\s+/);
            if (words.length > Math.abs(limit)) {
                if (limit < 0) {
                    limit *= -1;
                    result = trail + words.slice(words.length - limit, words.length).join(' ');
                }
                else {
                    result = words.slice(0, limit).join(' ') + trail;
                }
            }
        }
        return result;
    };
    TruncateWordsPipe.decorators = [
        { type: Pipe, args: [{
                    name: 'words'
                },] }
    ];
    return TruncateWordsPipe;
}());
export { TruncateWordsPipe };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJ1bmNhdGUtd29yZHMucGlwZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B5ZWxsb3dzcG90L25nLXRydW5jYXRlLyIsInNvdXJjZXMiOlsibGliL3RydW5jYXRlLXdvcmRzLnBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxJQUFJLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBRXBEO0lBQUE7SUFxQkEsQ0FBQzs7Ozs7OztJQWpCQyxxQ0FBUzs7Ozs7O0lBQVQsVUFBVSxLQUFhLEVBQUUsS0FBa0IsRUFBRSxLQUFtQjtRQUF2QyxzQkFBQSxFQUFBLFVBQWtCO1FBQUUsc0JBQUEsRUFBQSxXQUFtQjs7WUFDMUQsTUFBTSxHQUFHLEtBQUssSUFBSSxFQUFFO1FBRXhCLElBQUksS0FBSyxFQUFFOztnQkFDSCxLQUFLLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUM7WUFDaEMsSUFBSSxLQUFLLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEVBQUU7Z0JBQ2xDLElBQUksS0FBSyxHQUFHLENBQUMsRUFBRTtvQkFDYixLQUFLLElBQUksQ0FBQyxDQUFDLENBQUM7b0JBQ1osTUFBTSxHQUFHLEtBQUssR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsS0FBSyxFQUFFLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7aUJBQzVFO3FCQUFNO29CQUNMLE1BQU0sR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsS0FBSyxDQUFDO2lCQUNsRDthQUNGO1NBQ0Y7UUFFRCxPQUFPLE1BQU0sQ0FBQztJQUNoQixDQUFDOztnQkFwQkYsSUFBSSxTQUFDO29CQUNKLElBQUksRUFBRSxPQUFPO2lCQUNkOztJQW1CRCx3QkFBQztDQUFBLEFBckJELElBcUJDO1NBbEJZLGlCQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQFBpcGUoe1xuICBuYW1lOiAnd29yZHMnXG59KVxuZXhwb3J0IGNsYXNzIFRydW5jYXRlV29yZHNQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG4gIHRyYW5zZm9ybSh2YWx1ZTogc3RyaW5nLCBsaW1pdDogbnVtYmVyID0gNDAsIHRyYWlsOiBzdHJpbmcgPSAn4oCmJyk6IHN0cmluZyB7XG4gICAgbGV0IHJlc3VsdCA9IHZhbHVlIHx8ICcnO1xuXG4gICAgaWYgKHZhbHVlKSB7XG4gICAgICBjb25zdCB3b3JkcyA9IHZhbHVlLnNwbGl0KC9cXHMrLyk7XG4gICAgICBpZiAod29yZHMubGVuZ3RoID4gTWF0aC5hYnMobGltaXQpKSB7XG4gICAgICAgIGlmIChsaW1pdCA8IDApIHtcbiAgICAgICAgICBsaW1pdCAqPSAtMTtcbiAgICAgICAgICByZXN1bHQgPSB0cmFpbCArIHdvcmRzLnNsaWNlKHdvcmRzLmxlbmd0aCAtIGxpbWl0LCB3b3Jkcy5sZW5ndGgpLmpvaW4oJyAnKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXN1bHQgPSB3b3Jkcy5zbGljZSgwLCBsaW1pdCkuam9pbignICcpICsgdHJhaWw7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG59XG4iXX0=