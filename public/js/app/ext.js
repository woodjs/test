Ext.define('CRM.view.user.organizationManagement.Edit', {
  extend: 'Ext.ux.component.edit.Edit',
  requires: [
    'Ext.ux.component.combo.BaseCombo',
    'Ext.ux.component.field.SelectorField',
    'Ext.ux.component.field.AddressField'
  ],
  title: '组织管理',
  closabe: true,
  modal: true,
  resizable: false,
  constrainHeader: true,
  layout: 'fit',
  closeAction: 'destroy',
  width: 580,
  createDisableItems: [],
  updateDisableItems: ['code', 'delearType', 'oeCode'],
  setRecord: function (record) {
    var me = this,
      data = record.getData();

    me.setAddress(data);
    this.callParent(arguments);
  },
  setAddress: function (data) {
    var me = this,
      form = me.down('form').getForm(),
      pcaField = me.down('[itemId=pca]');

    if (me.editMode == 'update') {
      pcaField.selectionAddress = {
        province: {
          code: data.provinceCode,
          name: data.provinceName
        },
        city: {
          code: data.cityCode,
          name: data.cityName
        },
        area: {
          code: data.areaCode,
          name: data.areaName
        }
      };

      pcaField.setValue(data.provinceName + '/' + data.cityName + '/' + data.areaName);
    }
  },
  initEvents: function () {
    var me = this,
      pcaField = me.down('[itemId=pca]');

    pcaField.on('selectionchange', function () {
      me.setPCA(this);
    });

    me.callParent(arguments);
  },
  setPCA: function (that) {
    var me = this,
      form = me.down('form').getForm(),
      values = that.getSelectionValues();

    form.setValues({
      provinceCode: values.province,
      cityCode: values.city,
      areaCode: values.area
    });
  },
  items: [{
    xtype: 'form',
    layout: {
      type: 'vbox'
    },
    plugins: ['formlabelrequired'],
    bodyPadding: '10 0 5 10',
    defaults: {
      width: '100%',
      margin: '0 0 5 0',
      layout: {
        type: 'hbox'
      },
      border: false,
      defaults: {
        xtype: 'textfield',
        margin: '0 10 0 0',
        flex: 1,
        labelWidth: 75,
        allowBlank: false,
        labelAlign: 'left'
      }
    },
    items: [{
      items: [{
        allowBlank: true,
        xtype: 'displayfield',
        fieldLabel: '组织ID',
        name: 'organizationId',
        value: ''
      }, {
        fieldLabel: '组织编码',
        name: 'code',
        value: ''
      }]
    }, {
      items: [{
        fieldLabel: '组织名称',
        name: 'name',
        value: ''
      }, {
        xtype: 'basecombo',
        name: 'delearType',
        fieldLabel: '组织类型',
        storeAutoLoad: true,
        url: CRM.globalConfig.restpath + '/organization-type',
        value: ''
      }]
    }, {
      items: [{
        fieldLabel: '主机厂',
        name: 'oeCode',
        value: '',
        xtype: 'basecombo',
        storeAutoLoad: true,
        url: CRM.globalConfig.restpath + '/oem',
        noCache: true,
        queryCaching: false
      }, {
        fieldLabel: '联系人',
        name: 'contactName'
      }]
    }, {
      items: [{
        fieldLabel: '联系电话',
        name: 'phone',
        regex: /^1[3|5|8]\d{9}|0\d{2,3}-?\d{7,8}$/,
        regexText: '联系电话格式有误',
        allowBlank: true
      }, {
        fieldLabel: '邮箱',
        vtype: 'email',
        name: 'email',
        allowBlank: true
      }]
    }, {
      items: [{
        fieldLabel: 'QQ',
        name: 'qq',
        regex: /^\d{5,}$/,
        regexText: 'QQ号码格式有误',
        allowBlank: true
      }, {
        fieldLabel: '微信',
        name: 'wechat',
        value: '',
        allowBlank: true
      }]
    }, {
      items: [{
        fieldLabel: '部门',
        name: 'department',
        allowBlank: true
      }, {
        fieldLabel: '职位',
        name: 'job',
        allowBlank: true
      }]
    }, {
      items: [{
        fieldLabel: '传真',
        name: 'fax',
        allowBlank: true
      }, {
        fieldLabel: '邮编',
        width: 1000,
        name: 'postCode',
        regex: /^[0-9]{6}$/,
        regexText: '邮编格式有误',
        allowBlank: true
      }]
    }, {
      items: [{
        fieldLabel: '省市区',
        itemId: 'pca',
        xtype: 'addressfield',
        value: ''
      }, {
        xtype: 'hiddenfield',
        name: 'provinceCode'
      }, {
        xtype: 'hiddenfield',
        name: 'cityCode'
      }, {
        xtype: 'hiddenfield',
        name: 'areaCode'
      }]
    }, {
      items: [{
        fieldLabel: '详细地址',
        name: 'address',
        allowBlank: true
      }]
    }, {
      items: [{
        fieldLabel: '备注',
        name: 'remark',
        allowBlank: true
      }]
    }]
  }]
});