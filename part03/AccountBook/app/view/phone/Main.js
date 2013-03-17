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
        'Ab.view.phone.Home',
        'Ab.view.phone.Form',
        'Ab.view.phone.Accounts',
        'Ab.view.phone.Setting'
    ],

    config: {
        tabBarPosition: 'bottom',

        layout: {
            animation: ''      // タブ切り替え時のアニメーションを無効に
        },

        items: [
            {xtype: 'phonehome'},
            {xtype: 'phoneform'},
            {xtype: 'phoneaccounts'},
            {xtype: 'phonesetting'}
        ]
    }

});
