define(['jquery', 'bootstrap', 'backend', 'table', 'form'], function ($, undefined, Backend, Table, Form) {

    var Controller = {
        index: function () {
            // 初始化表格参数配置
            Table.api.init({
                extend: {
                    index_url: 'volunteer/volunte/index' + location.search,
                    add_url: 'volunteer/volunte/add',
                    edit_url: 'volunteer/volunte/edit',
                    del_url: 'volunteer/volunte/del',
                    multi_url: 'volunteer/volunte/multi',
                    table: 'volunteer',
                }
            });

            var table = $("#table");

            // 初始化表格
            table.bootstrapTable({
                url: $.fn.bootstrapTable.defaults.extend.index_url,
                pk: 'id',
                sortName: 'id',
                columns: [
                    [
                        {checkbox: true},
                        {field: 'id', title: __('Id')},
                        {field: 'name', title: __('Name')},
                        {field: 'sex', title: __('Sex')},
                        {field: 'city', title: __('City')},
                        {field: 'local', title: __('Local')},
                        {field: 'id_card', title: __('Id_card')},
                        {field: 'phone', title: __('Phone')},
                        {field: 'service_times', title: __('Service_times')},
                        {field: 'integral', title: __('Integral')},
                        {field: 'operate', title: __('Operate'), table: table, events: Table.api.events.operate, formatter: Table.api.formatter.operate}
                    ]
                ]
            });

            // 为表格绑定事件
            Table.api.bindevent(table);
        },
        add: function () {
            Controller.api.bindevent();
        },
        edit: function () {
            Controller.api.bindevent();
        },
        api: {
            bindevent: function () {
                Form.api.bindevent($("form[role=form]"));
            }
        }
    };
    return Controller;
});