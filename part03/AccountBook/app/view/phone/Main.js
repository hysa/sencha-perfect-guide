/**
 * Main.js
 * User: hysa
 * Date: 2013/03/17
 * Url : http://hysa.me/
 */
Ext.define('Ab.view.phone.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'phonemain',
    requires: [
        'Ext.TitleBar'
    ],

    config: {
        tabBarPosition: 'bottom',

        items: [
            {
                title: 'ホーム',
                iconCls: 'home',
                layout: 'fit',

              items: [{
                   // ホーム画面のタイトルバー
                   docked: 'top',
                   xtype: 'titlebar',
                   title: 'ホーム'
              }]
            },
            {
                title: '入力する',
                iconCls: 'compose1',
                layout: 'fit',

                items: [{
                    docked: 'top',
                    xtype: 'titlebar',
                    title: '入力する'
                }]
            }
        ]
    }

});
