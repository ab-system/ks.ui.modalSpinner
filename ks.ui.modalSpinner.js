angular
    .module("ks.ui.modalSpinner", [])
    .directive("modalSpinner", [
        "$compile", "longOperationService",
        function($compile, longOperationService) {
            return {
                restrict: "EA",
                scope: true,

                link: function(scope) {
                    scope.isLoading = longOperationService.isLoading;
                }
            };
        }
    ])
    .factory("longOperationService", [
        function() {
            var api = {
                _loadCounter: 0,
                isLoading: function() { return api._loadCounter > 0; },
                doSpinner: function (delta) {
                    this._loadCounter += delta;
                    if (this._loadCounter < 0)
                        this._loadCounter = 0;
                },
                beginLoad: function () {
                    api.doSpinner(1);
                },

                endLoad: function () {
                    api.doSpinner(-1);
                }
            };

            return api;
        }
    ]);