define(['jquery', 'bootstrap', 'backend', 'table', 'form'], function ($, undefined, Backend, Table, Form) {

    var Controller = {
        index: function () {
            // 初始化表格参数配置
            Table.api.init({
                extend: {
                    index_url: 'advisory/index' + location.search,
                    add_url: 'advisory/add',
                    edit_url: 'advisory/edit',
                    del_url: 'advisory/del',
                    multi_url: 'advisory/multi',
                    table: 'advisory',
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
                        {field: 'advisory_name', title: __('Advisory_name')},
                        {field: 'advisory_time', title: __('Advisory_time'), operate:'RANGE', addclass:'datetimerange'},
                        {field: 'advisory_phone', title: __('Advisory_phone')},
                        {field: 'advisory_intention', title: __('Advisory_intention')},
                        {field: 'reception', title: __('Reception')},
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