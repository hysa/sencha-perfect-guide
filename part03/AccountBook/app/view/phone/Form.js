/**
 * Form.js
 * User: hysa
 * Url : http://hysa.me/
 * Date: 2013/03/17
 */
Ext.define('Ab.view.phone.Form', {
    extend: 'Ext.Container',
    xtype: 'phoneform',

    requires: [
        'Ext.TitleBar',
        'Ab.view.account.Form'
    ],

    config: {
        title: '入力する',
        iconCls: 'compose1',
        layout: 'fit',

        items: [
            {
                docked: 'top',
                xtype: 'titlebar',
                title: '入力する'
            },
            {
                xtype: 'accountform'
            }
        ],

        listeners: [{
            event: 'activate',
            fn: function() {
                this.down('accountform').setup();  // this.downは下位コンポーネントを検索するメソッド
            }
        }]
    }
});
