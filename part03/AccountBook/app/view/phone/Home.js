/**
 * Home.js
 * User: hysa
 * Url : http://hysa.me/
 * Date: 2013/03/17
 */
Ext.define('Ab.view.phone.Home', {
    extend: 'Ext.Container',
    xtype: 'phonehome',

    requires: [
        'Ext.TitleBar'
    ],

    config: {
        title: 'ホーム',
        iconCls: 'home',
        layout: 'fit',

        items: [
            {
                // ホーム画面のタイトルバー
                docked: 'top',
                xtype: 'titlebar',
                title: 'ホーム'
            }
        ]
    }
});
