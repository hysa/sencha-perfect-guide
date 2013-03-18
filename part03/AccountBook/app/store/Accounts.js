/**
 * Accounts.js
 * User: hysa
 * Url : http://hysa.me/
 * Date: 2013/03/17
 */
Ext.define('Ab.store.Accounts', {
    extend: 'Ext.data.Store',
    config: {
        model: 'Ab.model.Account',
        data: [
            {
                id: '1',
                account: '1000',
                category: '10',
                recorded: '2013-03-17 11:33:00',
                memo: '新宿までの交通費'
            },
            {
                id: '2',
                account: '500',
                category: '10',
                recorded: '2013-03-17 11:33:00',
                memo: 'ケーキ'
            }
        ],
        autoLoad: true
    }
});
