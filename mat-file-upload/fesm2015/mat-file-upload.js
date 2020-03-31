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
class MatFileUploadService {
    constructor() { }
}
MatFileUploadService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
MatFileUploadService.ctorParameters = () => [];
/** @nocollapse */ MatFileUploadService.ngInjectableDef = ɵɵdefineInjectable({ factory: function MatFileUploadService_Factory() { return new MatFileUploadService(); }, token: MatFileUploadService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class MatFileUploadComponent {
    constructor() {
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
    ngOnInit() { }
    /**
     * @param {?=} files
     * @return {?}
     */
    filesChanged(files) {
        this.selectedFiles = files;
        this.selectedFilesChanged.emit(this.selectedFiles);
        if (this.selectedFiles) {
            /** @type {?} */
            const numSelectedFiles = this.selectedFiles.length;
            this.selectedFileText =
                numSelectedFiles === 1
                    ? this.selectedFiles[0].name
                    : `${numSelectedFiles} files selected`;
        }
        else {
            this.selectedFileText = '';
            this.resetFileInput();
        }
    }
    /**
     * @return {?}
     */
    uploadFiles() {
        this.uploadClicked.emit(this.selectedFiles);
        this.resetFileInput();
    }
    /**
     * @return {?}
     */
    resetFileInput() {
        this.fileInputRef.nativeElement.value = '';
    }
}
MatFileUploadComponent.decorators = [
    { type: Component, args: [{
                selector: 'mat-file-upload',
                template: `
    <span class="file-input-text">{{ labelText }}</span>
    <button
      mat-button
      color="primary"
      class="file-input-button"
      (click)="fileInput.click()"
      [attr.aria-label]="selectButtonText"
    >
      <span>{{ selectButtonText }}</span>
      <input
        #fileInput
        type="file"
        style="display: none"
        [accept]="acceptedTypes"
        [multiple]="allowMultipleFiles"
        (change)="filesChanged($event.target.files)"
      />
    </button>
    <button
      mat-raised-button
      color="primary"
      class="file-input-button"
      [disabled]="!selectedFiles"
      (click)="uploadFiles()"
      *ngIf="showUploadButton"
      [attr.aria-label]="uploadButtonText"
    >
      {{ uploadButtonText }}
    </button>
    <span class="file-input-text">{{ selectedFileText }}</span>
    <button
      mat-icon-button
      (click)="filesChanged(null)"
      aria-label="Remove Selected File(s)"
    >
      <mat-icon *ngIf="!customSvgIcon">close</mat-icon>
      <mat-icon *ngIf="customSvgIcon" [svgIcon]="customSvgIcon"></mat-icon>
    </button>
  `,
                styles: ['.file-input-button { margin-right: 8px !important }',
                    '.file-input-text { font-size: 14px !important; margin-right: 8px !important }']
            }] }
];
/** @nocollapse */
MatFileUploadComponent.ctorParameters = () => [];
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
class MatFileUploadModule {
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
