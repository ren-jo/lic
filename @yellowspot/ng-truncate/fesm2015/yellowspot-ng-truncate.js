import { Pipe, NgModule } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class TruncateCharactersPipe {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class TruncateWordsPipe {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const TRUNCATE_PIPES = [TruncateCharactersPipe, TruncateWordsPipe];
class TruncateModule {
}
TruncateModule.decorators = [
    { type: NgModule, args: [{
                declarations: [TRUNCATE_PIPES],
                exports: [TRUNCATE_PIPES]
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { TRUNCATE_PIPES, TruncateModule, TruncateCharactersPipe as ɵa, TruncateWordsPipe as ɵb };
//# sourceMappingURL=yellowspot-ng-truncate.js.map
