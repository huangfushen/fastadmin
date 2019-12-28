<?php

namespace app\admin\model\volunteer;

use think\Model;


class Apply extends Model
{

    

    

    // 表名
    protected $name = 'volunteer_apply';
    
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


    public function add_volun($id){
        $apply = Apply::get($id);
        $clientele = new Volunte([
            'name'=> $apply->username,
            'sex'=>$apply->sex,
            'city'=>$apply->city,
            'local'=>$apply->local,
            'phone'=>$apply->phone,
            'id_card'=>$apply->id_card,
            'service_times'=>0,
            'integral'=>0
        ]);
        return $clientele->save();
    }







}
