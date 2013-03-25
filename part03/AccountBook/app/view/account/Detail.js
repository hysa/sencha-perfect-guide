/**
 * Detail.js
 * User: hysa
 * Url : http://hysa.me/
 * Date: 2013/03/18
 */
Ext.define('Ab.view.account.Detail', {
    extend: 'Ext.form.Panel',
    xtype: 'accountdetail',

    requires: [
        // ボタンのポップアップ (ref. http://docs.sencha.com/touch/2-2/#!/api/Ext.ActionSheet)
        'Ext.ActionSheet',
        'Ab.view.account.FieldSet'
    ],

    config: {
        items: [{
            xtype: 'accountfieldset',
            defaults: {
                disabled: true,
                disabledCls: null,
                component: {
                    disabled: true,
                    disabledCls: null
                }
            }
        }]
    },

    constructor: function(config) {
        var self = this;
        self.callParent(arguments);

        self.actionSheet = Ext.create('Ext.ActionSheet', {
            hidden: true,
            itemId: 'actionSheet',
            items: [
                {
                    text: '編集',
                    handler: function() {
                        self.hideActionSheet();
                        self.fireEvent('showeditform', self.getRecord());
                    }
                },
                {
                    text: '削除',
                    ui: 'decline',
                    handler: function() {
                        self.hideActionSheet();
                        self.fireEvent('showdeleteconfirm', self.getRecord());
                    }
                },
                {
                    text: 'キャンセル',
                    ui: 'confirm',
                    handler: function() {
                        self.hideActionSheet();
                    }
                }
            ]
        });
        Ext.Viewport.add(self.actionSheet);

    },

    showActionSheet: function() {
        this.actionSheet.show();
    },

    hideActionSheet: function() {
        this.actionSheet.hide();
    }
});