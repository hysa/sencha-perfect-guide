/**
 * Detail.js
 * User: hysa
 * Url : http://hysa.me/
 * Date: 2013/03/18
 */
Ext.define('Ab.view.account.Detail', {
    extend: 'Ext.Container',
    xtype: 'accountdetail',

    config: {
        tpl: [
            '<div>{recorded}</div>',
            '<div>{category}</div>',
            '<div>{account}</div>',
            '<div>{memo}</div>'
        ]
    }
});