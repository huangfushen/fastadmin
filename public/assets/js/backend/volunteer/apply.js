define(['jquery', 'bootstrap', 'backend', 'table', 'form'], function ($, undefined, Backend, Table, Form) {

    var Controller = {
        index: function () {
            // 初始化表格参数配置
            Table.api.init({
                extend: {
                    index_url: 'volunteer/apply/index' + location.search,
                    add_url: 'volunteer/apply/add',
                    edit_url: 'volunteer/apply/edit',
                    del_url: 'volunteer/apply/del',
                    multi_url: 'volunteer/apply/multi',
                    table: 'volunteer_apply',
                }
            });

            var table = $("#table");
/*            table.on('post-body.bs.table',function(e,settings,json,xhr){
                $(".btn-size").data("area",["200px","100px"]);
            });*/
            // 初始化表格
            table.bootstrapTable({
                url: $.fn.bootstrapTable.defaults.extend.index_url,
                pk: 'id',
                sortName: 'id',
                columns: [
                    [
                        {checkbox: true},
                        {field: 'id', title: __('Id')},
                        {field: 'username', title: __('Username')},
                        {field: 'sex', title: __('Sex')},
                        {field: 'city', title: __('City')},
                        {field: 'local', title: __('Local')},
                        {field: 'id_card', title: __('Id_card')},
                        {field: 'phone', title: __('Phone')},
                        {field: 'apply_time', title: __('Apply_time'), operate:'RANGE', addclass:'datetimerange'},
                        {field: 'apply_status', title: __('Apply_status'), formatter: Table.api.formatter.status},
                        {field: 'operate', title: __('Operate'),
                            buttons: [
                                {name: 'detail', text: '通过审核', title: '通过审核', icon: 'fa fa-check', classname: 'btn btn-xs  btn-ajax btn-info btn-size', url: 'volunteer/apply/getvolunteerinfo'}
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