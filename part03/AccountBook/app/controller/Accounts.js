/**
 * Accounts.js
 * User: hysa
 * Url : http://hysa.me/
 * Date: 2013/03/18
 */
Ext.define('Ab.controller.Accounts', {
    extend: 'Ext.app.Controller',

    config: {
        refs: {
            'detail' : 'accountdetail',
            'form': 'accountform',
            'list': 'accountlist'
        },
        control: {
            'accountlist' : {
                'recordtap' : 'showDetail'
            },
            'form': {
                'saverecord': 'saveRecord'
            },
            'detail': {
                'showeditform': 'showEditForm',
                'showaction' : 'showAction',
                'showdeleteconfirm': 'showDeleteConfirm'
            }

        }
    },

    saveRecord: function(record, values) {
        console.log('save record in controller', record, values);
        record.setValues(values);
        var store = Ext.getStore('Accounts');
        var id = record.get('id');
        if (Ext.isEmpty(store.findRecord('id', id))) {
            store.add(record);
        }
        store.sync();
        this.showDetail(record);
    },

    showAction: function() {
        console.log('show action');
        this.getDetail().showActionSheet();
    },

    showDeleteConfirm: function(record) {
        Ext.Msg.confirm('確認', '削除してもいいですか？', function(btn) {
            if (btn === 'yes') {
                this.deleteRecord(record);
            }
        }, this);
    },

    deleteRecord: function(record) {
        console.log('delete record', record);
        var store = Ext.getStore('Accounts');
        store.remove(record);
        store.sync();
        this.showList();
    }

});