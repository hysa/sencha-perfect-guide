Ext.define('Ab.model.Account', {
    extend: 'Ext.data.Model',

    config: {
        identifier: {
            type: 'uuid'
        },

        fields: [
            {name: 'id', type: 'auto'},
            {name: 'account', type: 'int'},
            {name: 'category', type: 'string'},
            {name: 'recorded', type: 'date'},
            {name: 'memo', type: 'string'}
        ]
    },

    setValues: function(values) {
        var self = this;
        self.getFields().each(function(field) {
            var fid = field.getName();
            if (!Ext.isEmpty(values[fid])) {
                self.set(fid, values[fid]);
            }
        });
    }
});