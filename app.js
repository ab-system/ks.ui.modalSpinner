angular
    .module("app", ["ks.ui.modalSpinner"])
    .run(["longOperationService",
        function (longOperationService) {
            longOperationService.beginLoad();
    }]);