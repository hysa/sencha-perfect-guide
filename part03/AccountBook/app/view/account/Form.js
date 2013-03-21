/**
 * Form.js
 * User: hysa
 * Url : http://hysa.me/
 * Date: 2013/03/20
 */
Ext.define('Ab.view.account.Form', {
    extend: 'Ext.form.Panel',
    xtype: 'accountform',

    requires: [
        'Ext.form.FieldSet',
        'Ext.field.Number',
        'Ext.field.Select',
        'Ext.field.DatePicker'
    ],

    config: {
        items: [
            {
                xtype: 'fieldset',
                items: [
                    {
                        xtype: 'numberfield',
                        name: 'account',
                        label: '金額'
                    },
                    {
                        xtype: 'selectfield',
                        name: 'category',
                        label: 'カテゴリ',
                        options: [
                            {text: '食費', value: '10'},
                            {text: '交通', value: '20'},
                            {text: '交際費', value: '30'},
                            {text: 'エンタメ', value: '40'},
                            {text: '水道・光熱', value: '50'}
                        ]
                    },
                    {
                        xtype: 'datepickerfield',
                        name: 'recorded',
                        label: '日付',
                        value: new Date()
                    },
                    {
                        xtype: 'textareafield',
                        name: 'memo',
                        label: 'メモ'
                    }
                ]
            },
            {
                layout: {
                    type: 'vbox',
                    pick: 'center',
                    align: 'center'
                },
                items: {
                    xtype: 'button',
                    ui: 'action',
                    text: '記録する',
                    width: '80%',
                    minWidth: '200px',
                    handler: function () {
                        var form = this.up('accountform'); // this.upは上位コンポーネントを検索するメソッド
                        form.fireEvent('saverecord', form.getRecord(), form.getValues());
                    }
                }
            }

        ]
    },

    setup: function() {
        var now = new Date();
        var record = Ext.create('Ab.model.Account', {
            account: '0',
            category: '10',
            recorded: now,
            memo: ''
        });
        this.setRecord(record);
    }
});
