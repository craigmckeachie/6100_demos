import { Component } from '@angular/core';

//========================================================
@Component({
  selector: 'template-demos',
  template: `
      <template-inline></template-inline>
      <template-multiline></template-multiline>
      <template-external></template-external>

  `,
})
export class TemplateDemosComponent {}

//========================================================
@Component({
  selector: 'template-inline',
  template: '<h5>Inline Template</h5>',
})
export class TemplateInlineComponent {}

//========================================================
@Component({
  selector: 'template-multiline',
  template: `
  <h5>
      Multiline Template
  </h5>
  `,
})
export class TemplateMultilineComponent {}

//========================================================
@Component({
  selector: 'template-external',
  templateUrl: './external-template.html',
})
export class TemplateExternalComponent {}

//========================================================
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [CommonModule],
  declarations: [
    TemplateDemosComponent,
    TemplateInlineComponent,
    TemplateMultilineComponent,
    TemplateExternalComponent,
  ],
})
export class TemplatesModule {}
