Ext.define('Memo.model.Memo', {
    extend: 'Ext.data.Model',

    config: {
        fields: [
            {name: 'id', type: 'int'},
            {name: 'title', type: 'string'},
            {name: 'detail', type: 'string'}
        ],
        proxy : {
            type: 'localstorage',
            id: 'memo-store'
        }
    }
});