define(['jquery', 'bootstrap', 'backend', 'table', 'form'], function ($, undefined, Backend, Table, Form) {

    var Controller = {
        index: function () {
            // 初始化表格参数配置
            Table.api.init({
                extend: {
                    index_url: 'volunteer/allocation/index' + location.search,
                    add_url: 'volunteer/allocation/add',
                    edit_url: 'volunteer/allocation/edit',
                    del_url: 'volunteer/allocation/del',
                    multi_url: 'volunteer/allocation/multi',
                    table: 'activity_allocation',
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
                        {field: 'status', title: __('Status'), formatter: Table.api.formatter.status},
                        {field: 'volunteeractivity.serviceobj_name', title: __('Volunteeractivity.serviceobj_name')},
                        {field: 'volunteeractivity.active_address', title: __('Volunteeractivity.active_address')},
                        {field: 'volunteeractivity.active_time', title: __('Volunteeractivity.active_time'), operate:'RANGE', addclass:'datetimerange'},
                        {field: 'volunteer.name', title: __('Volunteer.name')},
                        {field: 'operate', title: __('Operate'),
                            buttons: [
                                {name: 'detail', text: '活动完成', title: '活动完成', icon: 'fa fa-check', classname: 'btn btn-xs  btn-ajax btn-info btn-size', url: 'volunteer/allocation/activitySuccess'}
                            ],
                            table: table, events: Table.api.events.operate, formatter: Table.api.formatter.operate}
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