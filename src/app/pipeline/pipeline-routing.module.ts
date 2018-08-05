import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PipelineLeadDetailsComponent } from './pipeline-lead-details/pipeline-lead-details.component';

const routes: Routes = [{
  path:'',
  component: PipelineLeadDetailsComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PipelineRoutingModule { }
