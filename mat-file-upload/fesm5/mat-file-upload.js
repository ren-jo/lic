import { Injectable, ɵɵdefineInjectable, EventEmitter, Component, Input, Output, ViewChild, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var MatFileUploadService = /** @class */ (function () {
    function MatFileUploadService() {
    }
    MatFileUploadService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    MatFileUploadService.ctorParameters = function () { return []; };
    /** @nocollapse */ MatFileUploadService.ngInjectableDef = ɵɵdefineInjectable({ factory: function MatFileUploadService_Factory() { return new MatFileUploadService(); }, token: MatFileUploadService, providedIn: "root" });
    return MatFileUploadService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var MatFileUploadComponent = /** @class */ (function () {
    function MatFileUploadComponent() {
        this.labelText = 'Select File(s)';
        this.selectButtonText = 'Select File(s)';
        this.uploadButtonText = 'Upload File(s)';
        this.allowMultipleFiles = false;
        this.showUploadButton = true;
        this.acceptedTypes = '*.*';
        this.customSvgIcon = null;
        this.uploadClicked = new EventEmitter();
        this.selectedFilesChanged = new EventEmitter();
        this.selectedFileText = '';
    }
    /**
     * @return {?}
     */
    MatFileUploadComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () { };
    /**
     * @param {?=} files
     * @return {?}
     */
    MatFileUploadComponent.prototype.filesChanged = /**
     * @param {?=} files
     * @return {?}
     */
    function (files) {
        this.selectedFiles = files;
        this.selectedFilesChanged.emit(this.selectedFiles);
        if (this.selectedFiles) {
            /** @type {?} */
            var numSelectedFiles = this.selectedFiles.length;
            this.selectedFileText =
                numSelectedFiles === 1
                    ? this.selectedFiles[0].name
                    : numSelectedFiles + " files selected";
        }
        else {
            this.selectedFileText = '';
            this.resetFileInput();
        }
    };
    /**
     * @return {?}
     */
    MatFileUploadComponent.prototype.uploadFiles = /**
     * @return {?}
     */
    function () {
        this.uploadClicked.emit(this.selectedFiles);
        this.resetFileInput();
    };
    /**
     * @return {?}
     */
    MatFileUploadComponent.prototype.resetFileInput = /**
     * @return {?}
     */
    function () {
        this.fileInputRef.nativeElement.value = '';
    };
    MatFileUploadComponent.decorators = [
        { type: Component, args: [{
                    selector: 'mat-file-upload',
                    template: "\n    <span class=\"file-input-text\">{{ labelText }}</span>\n    <button\n      mat-button\n      color=\"primary\"\n      class=\"file-input-button\"\n      (click)=\"fileInput.click()\"\n      [attr.aria-label]=\"selectButtonText\"\n    >\n      <span>{{ selectButtonText }}</span>\n      <input\n        #fileInput\n        type=\"file\"\n        style=\"display: none\"\n        [accept]=\"acceptedTypes\"\n        [multiple]=\"allowMultipleFiles\"\n        (change)=\"filesChanged($event.target.files)\"\n      />\n    </button>\n    <button\n      mat-raised-button\n      color=\"primary\"\n      class=\"file-input-button\"\n      [disabled]=\"!selectedFiles\"\n      (click)=\"uploadFiles()\"\n      *ngIf=\"showUploadButton\"\n      [attr.aria-label]=\"uploadButtonText\"\n    >\n      {{ uploadButtonText }}\n    </button>\n    <span class=\"file-input-text\">{{ selectedFileText }}</span>\n    <button\n      mat-icon-button\n      (click)=\"filesChanged(null)\"\n      aria-label=\"Remove Selected File(s)\"\n    >\n      <mat-icon *ngIf=\"!customSvgIcon\">close</mat-icon>\n      <mat-icon *ngIf=\"customSvgIcon\" [svgIcon]=\"customSvgIcon\"></mat-icon>\n    </button>\n  ",
                    styles: ['.file-input-button { margin-right: 8px !important }',
                        '.file-input-text { font-size: 14px !important; margin-right: 8px !important }']
                }] }
    ];
    /** @nocollapse */
    MatFileUploadComponent.ctorParameters = function () { return []; };
    MatFileUploadComponent.propDecorators = {
        labelText: [{ type: Input }],
        selectButtonText: [{ type: Input }],
        uploadButtonText: [{ type: Input }],
        allowMultipleFiles: [{ type: Input }],
        showUploadButton: [{ type: Input }],
        acceptedTypes: [{ type: Input }],
        customSvgIcon: [{ type: Input }],
        uploadClicked: [{ type: Output }],
        selectedFilesChanged: [{ type: Output }],
        fileInputRef: [{ type: ViewChild, args: ['fileInput', { static: false },] }]
    };
    return MatFileUploadComponent;
}());
if (false) {
    /** @type {?} */
    MatFileUploadComponent.prototype.labelText;
    /** @type {?} */
    MatFileUploadComponent.prototype.selectButtonText;
    /** @type {?} */
    MatFileUploadComponent.prototype.uploadButtonText;
    /** @type {?} */
    MatFileUploadComponent.prototype.allowMultipleFiles;
    /** @type {?} */
    MatFileUploadComponent.prototype.showUploadButton;
    /** @type {?} */
    MatFileUploadComponent.prototype.acceptedTypes;
    /** @type {?} */
    MatFileUploadComponent.prototype.customSvgIcon;
    /** @type {?} */
    MatFileUploadComponent.prototype.uploadClicked;
    /** @type {?} */
    MatFileUploadComponent.prototype.selectedFilesChanged;
    /** @type {?} */
    MatFileUploadComponent.prototype.fileInputRef;
    /** @type {?} */
    MatFileUploadComponent.prototype.selectedFiles;
    /** @type {?} */
    MatFileUploadComponent.prototype.selectedFileText;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var MatFileUploadModule = /** @class */ (function () {
    function MatFileUploadModule() {
    }
    MatFileUploadModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [MatFileUploadComponent],
                    imports: [
                        CommonModule,
                        MatButtonModule,
                        MatIconModule,
                        MatInputModule,
                        MatSelectModule,
                        FormsModule,
                    ],
                    exports: [MatFileUploadComponent],
                },] }
    ];
    return MatFileUploadModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { MatFileUploadComponent, MatFileUploadModule, MatFileUploadService };
//# sourceMappingURL=mat-file-upload.js.map
