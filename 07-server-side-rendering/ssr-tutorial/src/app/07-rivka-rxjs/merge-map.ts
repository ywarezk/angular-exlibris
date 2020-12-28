// Update RECORDS tab
updateFeatureTabRecords(): void {
  this.draftService.getDraftsFromAlma()
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
} 
