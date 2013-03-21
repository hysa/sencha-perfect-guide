/**
 * Accounts.js
 * User: hysa
 * Url : http://hysa.me/
 * Date: 2013/03/17
 */
Ext.define('Ab.store.Accounts', {
    extend: 'Ext.data.Store',

    requires : ['Ext.data.proxy.LocalStorage'],

    config: {
        model: 'Ab.model.Account',
        proxy: {
            type: 'localstorage',
            id: 'accounts-store'
        },
        autoLoad: true
    }
});
