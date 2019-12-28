define(['jquery', 'bootstrap', 'backend', 'table', 'form'], function ($, undefined, Backend, Table, Form) {

    var Controller = {
        index: function () {
            // 初始化表格参数配置
            Table.api.init({
                extend: {
                    index_url: 'volunteer/activity/index' + location.search,
                    add_url: 'volunteer/activity/add',
                    edit_url: 'volunteer/activity/edit',
                    del_url: 'volunteer/activity/del',
                    multi_url: 'volunteer/activity/multi',
                    table: 'volunteer_activity',
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
                        {field: 'serviceobj_name', title: __('Serviceobj_name')},
                        {field: 'active_address', title: __('Active_address')},
                        {field: 'active_time', title: __('Active_time'), operate:'RANGE', addclass:'datetimerange'},
                        {field: 'people_num', title: __('People_num')},
                        {field: 'active_points', title: __('Active_points')},
                        {field: 'announcer', title: __('Announcer')},
                        {field: 'remark', title: __('Remark')},
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