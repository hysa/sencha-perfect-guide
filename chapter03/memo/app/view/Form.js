/**
 * Form.js
 * User: hysa
 * Date: 2013/03/16
 */
Ext.define('Memo.view.Form', {
    extend: 'Ext.form.Panel',
    xtype: 'memoform',
    config: {
        items: [
            {
                xtype: 'titlebar',
                title: 'Memo',
                docked: 'top',
                items: [
                    {
                        xtype: 'button',
                        align: 'left',
                        text: '消去',
                        ui: 'decline',
                        action: 'erase'
                    },
                    {
                        xtype: 'button',
                        align: 'right',
                        text: '保存',
                        ui: 'action',
                        action: 'save'
                    }
                ]
            },
            {
                xtype: 'fieldset',
                title: 'Please write here!',
                items: [
                    {
                        xtype: 'textfield',
                        name: 'title'
                    },
                    {
                        xtype: 'textareafield',
                        name: 'detail'
                    }
                ]
            }
        ]
    }

});