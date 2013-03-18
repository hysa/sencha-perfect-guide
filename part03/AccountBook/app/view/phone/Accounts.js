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
        'Ext.TitleBar',
        'Ab.view.account.List',
        'Ab.view.account.Detail'
    ],

    config: {
        title: '履歴',
        iconCls: 'list',
        layout: 'fit',

        items: {
            xtype: 'container',
            itemId: 'accountPage',
            layout: 'card',
            items: [
                {
                    itemId: 'accountList',
                    layout: 'fit',
                    items: [
                        {
                            docked: 'top',
                            xtype: 'titlebar',
                            title: '一覧'
                        },
                        {
                            xtype: 'accountlist'
                        }
                    ]
                },
                {
                    itemId: 'accountdetail',
                    layout: 'fit',
                    items: [
                        {
                            docked: 'top',
                            xtype: 'titlebar',
                            title: '履歴'
                        },
                        {
                            xtype: 'accountdetail'
                        }
                    ]
                }
            ]
        }
    }
});
