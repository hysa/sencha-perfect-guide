/**
 * Accounts.js
 * User: hysa
 * Url : http://hysa.me/
 * Date: 2013/03/18
 */
Ext.define('Ab.controller.phone.Accounts', {
    extend: 'Ab.controller.Accounts',

    config: {
        refs: {
            'page': 'phonemain #accountPage',
            'main': 'phonemain',
            'viewPanel': 'phoneaccounts',
            'editPanel': 'phoneform'
        },
        control: {
            'phonemain #accountDetail': {
                'backtolist': 'showList'
            }

        }
    },

    showList: function() {
        console.log('show list in phone');
        var self = this;
        self.getMain().setActiveItem(self.getViewPanel());
        self.getPage().setActiveItem(0);
    },

    showDetail: function(record) {
        console.log('show detail');
        var self = this;
        self.getDetail().setRecord(record);
        self.getDetail().up('#accountPage').setActiveItem(1);
        self.getMain().setActiveItem(self.getViewPanel());

    },

    showEditForm: function(record) {
        console.log('show edit form');
        var self = this;
        self.getForm().setRecord(record);
        self.getForm().editMode = true;
        self.getMain().setActiveItem(self.getEditPanel());
    },

    //called when the Application is launched, remove if not needed
    launch: function(app) {

    }
});