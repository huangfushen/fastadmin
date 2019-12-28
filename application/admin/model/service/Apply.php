<?php

namespace app\admin\model\service;

use think\Model;


class Apply extends Model
{
    // 表名
    protected $name = 'service_applyer';
    
    // 自动写入时间戳字段
    protected $autoWriteTimestamp = false;

    // 定义时间戳字段名
    protected $createTime = false;
    protected $updateTime = false;
    protected $deleteTime = false;

    // 追加属性
    protected $append = [

    ];
    
public function update_status($id){
    $apply = Apply::get($id);
    if ($apply->apply_status =='审核通过'){
        exit();
    }
    $apply->apply_status = '审核通过';
    $apply->save();
}
    public function add_ser_obj($id){
        $apply = Apply::get($id);
        $clientele = new Clientele([
            'name'=> $apply->oldman_name,
             'city'=>$apply->city,
             'local'=>$apply->local,
             'oldman_phone'=>$apply->oldman_phone,
             'apply_phone'=>$apply->apply_phone,
             'living_status'=>$apply->living_status,
        ]);
        return $clientele->save();
    }









}
