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
                    itemId: 'accountDetail',
                    layout: 'fit',
                    items: [
                        {
                            docked: 'top',
                            xtype: 'titlebar',
                            title: '履歴',
                            items: [
                                {
                                    xtype: 'button',
                                    ui: 'back',
                                    text: '戻る',
                                    itemId: 'backToListButton'
                                },
                                {
                                    xtype: 'button',
                                    align: 'right',
                                    ui: 'flat',
                                    itemId: 'actionButton',
                                    iconCls: 'action',
                                    iconMask: true
                                }
                            ]
                        },
                        {
                            xtype: 'accountdetail'
                        }
                    ],
                    listeners: [
                        {
                            delegate: '#backToListButton',
                            event: 'tap',
                            fn: function() {
                                console.log('back to list listeners');
                                this.fireEvent('backtolist');
                            }
                        },
                        {
                            delegate: '#actionButton',
                            event: 'tap',
                            fn: function() {
                                console.log('action button');
                                this.down('accountdetail').fireEvent('showaction');
                            }
                        }
                    ]
                }
            ]
        }
    }
});
