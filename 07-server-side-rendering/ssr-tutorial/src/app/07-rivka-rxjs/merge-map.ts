import {delay, mergeMap} from 'rxjs/operators';
import { forkJoin, of } from 'rxjs';

// Update RECORDS tab
updateFeatureTabRecords(): void {
  this.draftService.getDraftsFromAlma().pipe(
    mergeMap((data) => {
      this.loadDraftsFromAlma();
      this.eventBus.sendNgEvent(NgEvent.REFRESH_ITEMS, '');
      return this.templateService.getSpecialCzAuthDefaultTemplates();
    })
  ).subscribe(() => {
    this.templateService.templatesListFromAlma.defaultCzAuthTemplateBeanList = defaultTemplates.templateBean;
    // will trigger populating records menu - only after templates data was fully loaded for NEW menu
    this.featureTabRecords.menuItemList = this.menuActionService.getMenuActionsByFeatureTab(0, this.features);
    this.featureTabTemplates.menuItemList = this.menuActionService.getMenuActionsByFeatureTab(1, this.features);
  })


    /*
    .subscribe(data => {
      this.draftListFromAlma = data;
      // Convert to FeatureTab
      this.loadDraftsFromAlma();
      this.eventBus.sendNgEvent(NgEvent.REFRESH_ITEMS, '');
      this.templateService.getSpecialCzAuthDefaultTemplates().subscribe(defaultTemplates => {
        this.templateService.templatesListFromAlma.defaultCzAuthTemplateBeanList = defaultTemplates.templateBean;
        // will trigger populating records menu - only after templates data was fully loaded for NEW menu
        this.featureTabRecords.menuItemList = this.menuActionService.getMenuActionsByFeatureTab(0, this.features);
        this.featureTabTemplates.menuItemList = this.menuActionService.getMenuActionsByFeatureTab(1, this.features);
      }
      );
      this.eventBus.sendNgEvent(NgEvent.REFRESH_GWT_HEADER, '');
    });
    */
}

const first = of('hello').pipe(delay(500)); //this._http.get('...');
const second = of('foo-bar').pipe(delay(1000)); //this._http.get('...');

forkJoin([first, second]).pipe(
  mergeMap(([firstResponse, secondResponse]) => )
)

// .subscribe(
//   ([firstResponse, secondResponse]) => {

//   }
// )

