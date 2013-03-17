/**
 * Setting.js
 * User: hysa
 * Url : http://hysa.me/
 * Date: 2013/03/17
 */
Ext.define('Ab.view.phone.Setting', {
    extend: 'Ext.Container',
    xtype: 'phonesetting',

    requires: [
        'Ext.TitleBar'
    ],

    config: {
        title: '設定',
        iconCls: 'settings9',
        layout: 'fit',

        items: [
            {
                docked: 'top',
                xtype: 'titlebar',
                title: '設定'
            }
        ]
    }


});
