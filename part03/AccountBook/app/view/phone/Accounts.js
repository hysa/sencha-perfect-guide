/**
 * Accounts.js
 * User: hysa
 * Url : http://hysa.me/
 * Date: 2013/03/17
 */
Ext.define('Ab.view.phone.Accounts', {
    extend: 'Ext.Container',
    xtype: 'phoneaccounts',

    requires: [
        'Ext.TitleBar'
    ],

    config: {
        title: '履歴',
        iconCls: 'list',
        layout: 'fit',

        items: [
            {
                docked: 'top',
                xtype: 'titlebar',
                title: '履歴'
            }
        ]
    }
});
