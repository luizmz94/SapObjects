sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("lz.zlzpsapobject.controller.Index", {
            onInit: function () {

            },


            onRefreshSmartTable: function (oEvent) {
                var oSmartTable = oEvent.getSource().getParent().getParent().getParent();
                oSmartTable.rebindTable()
            },


            onBeforeRebindSmartTable: function (oEvent) {
                var oBindingParams = oEvent.getParameter("bindingParams");
                if (!oBindingParams.sorter.length) {
                    oBindingParams.sorter.push(new sap.ui.model.Sorter("CreatedOn", true))
                }
            },

        });
    });
