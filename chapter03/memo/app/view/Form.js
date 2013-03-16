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
                docked: 'top'
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