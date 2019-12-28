define(['jquery', 'bootstrap', 'backend', 'table', 'form'], function ($, undefined, Backend, Table, Form) {

    var Controller = {
        index: function () {
            // 初始化表格参数配置
            Table.api.init({
                extend: {
                    index_url: 'service/apply/index' + location.search,
                    add_url: 'service/apply/add',
                    edit_url: 'service/apply/edit',
                    del_url: 'service/apply/del',
                    multi_url: 'service/apply/multi',
                    table: 'service_applyer',
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
                        {field: 'applyer', title: __('Applyer')},
                        {field: 'apply_phone', title: __('Apply_phone')},
                        {field: 'relationship', title: __('Relationship')},
                        {field: 'oldman_name', title: __('Oldman_name')},
                        {field: 'city', title: __('City')},
                        {field: 'local', title: __('Local')},
                        {field: 'living_status', title: __('Living_status'), formatter: Table.api.formatter.status},
                        {field: 'oldman_phone', title: __('Oldman_phone')},
                        {field: 'apply_time', title: __('Apply_time'), operate:'RANGE', addclass:'datetimerange'},
                        {field: 'apply_status', title: __('Apply_status'), formatter: Table.api.formatter.status},
                        {field: 'operate', title: __('Operate'), table: table,
                            buttons: [
                                {name: 'detail', text: '通过审核', title: '通过审核', icon: 'fa fa-check', classname: 'btn btn-xs  btn-ajax btn-info btn-size', url: 'service/apply/getoldmaninfo'}
                            ],
                            events: Table.api.events.operate, formatter: Table.api.formatter.operate}
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
        getoldmaninfo: function(){
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