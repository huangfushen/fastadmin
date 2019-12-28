define(['jquery', 'bootstrap', 'backend', 'table', 'form'], function ($, undefined, Backend, Table, Form) {

    var Controller = {
        index: function () {
            // 初始化表格参数配置
            Table.api.init({
                extend: {
                    index_url: 'item/index' + location.search,
                    add_url: 'item/add',
                    edit_url: 'item/edit',
                    del_url: 'item/del',
                    multi_url: 'item/multi',
                    table: 'item',
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
                        {field: 'name', title: __('Name')},
                        {field: 'price', title: __('Price'), operate:'BETWEEN'},
                        {field: 'required_points', title: __('Required_points')},
                        {field: 'item_num', title: __('Item_num')},
                        {field: 'operate', title: __('Operate'),
                            buttons: [
                                {name: 'detail', text: '兑换', title: '兑换', icon: 'fa fa-check', classname: 'btn btn-xs  btn-ajax btn-info btn-size', url: 'Item/ExchangeItem'}
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