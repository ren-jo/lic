/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Pipe } from '@angular/core';
export class TruncateWordsPipe {
    /**
     * @param {?} value
     * @param {?=} limit
     * @param {?=} trail
     * @return {?}
     */
    transform(value, limit = 40, trail = '…') {
        /** @type {?} */
        let result = value || '';
        if (value) {
            /** @type {?} */
            const words = value.split(/\s+/);
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
    }
}
TruncateWordsPipe.decorators = [
    { type: Pipe, args: [{
                name: 'words'
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJ1bmNhdGUtd29yZHMucGlwZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B5ZWxsb3dzcG90L25nLXRydW5jYXRlLyIsInNvdXJjZXMiOlsibGliL3RydW5jYXRlLXdvcmRzLnBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxJQUFJLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBS3BELE1BQU0sT0FBTyxpQkFBaUI7Ozs7Ozs7SUFDNUIsU0FBUyxDQUFDLEtBQWEsRUFBRSxRQUFnQixFQUFFLEVBQUUsUUFBZ0IsR0FBRzs7WUFDMUQsTUFBTSxHQUFHLEtBQUssSUFBSSxFQUFFO1FBRXhCLElBQUksS0FBSyxFQUFFOztrQkFDSCxLQUFLLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUM7WUFDaEMsSUFBSSxLQUFLLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEVBQUU7Z0JBQ2xDLElBQUksS0FBSyxHQUFHLENBQUMsRUFBRTtvQkFDYixLQUFLLElBQUksQ0FBQyxDQUFDLENBQUM7b0JBQ1osTUFBTSxHQUFHLEtBQUssR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsS0FBSyxFQUFFLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7aUJBQzVFO3FCQUFNO29CQUNMLE1BQU0sR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsS0FBSyxDQUFDO2lCQUNsRDthQUNGO1NBQ0Y7UUFFRCxPQUFPLE1BQU0sQ0FBQztJQUNoQixDQUFDOzs7WUFwQkYsSUFBSSxTQUFDO2dCQUNKLElBQUksRUFBRSxPQUFPO2FBQ2QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBQaXBlKHtcbiAgbmFtZTogJ3dvcmRzJ1xufSlcbmV4cG9ydCBjbGFzcyBUcnVuY2F0ZVdvcmRzUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuICB0cmFuc2Zvcm0odmFsdWU6IHN0cmluZywgbGltaXQ6IG51bWJlciA9IDQwLCB0cmFpbDogc3RyaW5nID0gJ+KApicpOiBzdHJpbmcge1xuICAgIGxldCByZXN1bHQgPSB2YWx1ZSB8fCAnJztcblxuICAgIGlmICh2YWx1ZSkge1xuICAgICAgY29uc3Qgd29yZHMgPSB2YWx1ZS5zcGxpdCgvXFxzKy8pO1xuICAgICAgaWYgKHdvcmRzLmxlbmd0aCA+IE1hdGguYWJzKGxpbWl0KSkge1xuICAgICAgICBpZiAobGltaXQgPCAwKSB7XG4gICAgICAgICAgbGltaXQgKj0gLTE7XG4gICAgICAgICAgcmVzdWx0ID0gdHJhaWwgKyB3b3Jkcy5zbGljZSh3b3Jkcy5sZW5ndGggLSBsaW1pdCwgd29yZHMubGVuZ3RoKS5qb2luKCcgJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmVzdWx0ID0gd29yZHMuc2xpY2UoMCwgbGltaXQpLmpvaW4oJyAnKSArIHRyYWlsO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxufVxuIl19