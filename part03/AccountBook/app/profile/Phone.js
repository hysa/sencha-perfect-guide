Ext.define('Ab.profile.Phone', {
    extend: 'Ext.app.Profile',

    //define any additional classes your Profile needs here
    config: {
        views: ['Main'],    // app/view/phone以下を参照
        models: [],
        stores: [],
        controllers: ['Accounts']
    },

    //this profile will be activated if we detect we're running on a Phone
    isActive: function(app) {
        return Ext.os.is.Phone;
    },

    launch: function() {
        Ext.fly('appLoadingIndicator').destroy();

        Ext.Viewport.add(Ext.create('Ab.view.phone.Main'));
    }
});