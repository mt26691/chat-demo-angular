import { FormGroup, FormBuilder } from '@angular/forms';

export class FormBase {
    constructor(protected fb: FormBuilder) {

    }

    form: FormGroup;

    sucessMessage = '';
    errorMessage = '';
    isError = false;
    isRequesting = false;
    protected formErrors = {

    };

    protected validationMessages = {
        // tslint:disable-next-line:semicolon
    }

    onValueChanged(_data?: any) {
        if (!this.form) { return; }
        const form = this.form;
        for (const field in this.formErrors) {
            // clear previous error message (if any)
            this.formErrors[field] = '';
            const control = form.get(field);
            if (control && control.dirty && !control.valid) {
                const messages = this.validationMessages[field];
                // tslint:disable-next-line:forin
                for (const key in control.errors) {
                    this.formErrors[field] = messages[key];
                }
            }
        }
    }
}
