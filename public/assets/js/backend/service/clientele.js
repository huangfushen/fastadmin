define(['jquery', 'bootstrap', 'backend', 'table', 'form'], function ($, undefined, Backend, Table, Form) {

    var Controller = {
        index: function () {
            // 初始化表格参数配置
            Table.api.init({
                extend: {
                    index_url: 'service/clientele/index' + location.search,
                    add_url: 'service/clientele/add',
                    edit_url: 'service/clientele/edit',
                    del_url: 'service/clientele/del',
                    multi_url: 'service/clientele/multi',
                    table: 'service_object',
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
                        {field: 'city', title: __('City')},
                        {field: 'local', title: __('Local')},
                        {field: 'apply_phone', title: __('Apply_phone')},
                        {field: 'living_status', title: __('Living_status'), formatter: Table.api.formatter.status},
                        {field: 'oldman_phone', title: __('Oldman_phone')},
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