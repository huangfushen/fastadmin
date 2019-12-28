<?php

namespace app\admin\model;

use think\Model;


class Item extends Model
{

    

    

    // 表名
    protected $name = 'item';
    
    // 自动写入时间戳字段
    protected $autoWriteTimestamp = false;

    // 定义时间戳字段名
    protected $createTime = false;
    protected $updateTime = false;
    protected $deleteTime = false;

    // 追加属性
    protected $append = [

    ];
    
    public function lessNum($id){
        $item = Item::get($id);
        $item->item_num = $item->item_num-1;
        $item->save();
    }
    public function lessIntegral($uid,$vid){
        $item = Item::get($vid);
        $voluntter = volunteer\Volunte::get($uid);
        $voluntter->integral = $voluntter->integral-$item->required_points;
        $voluntter->save();
    }
    public function addExchange($id,$username){
        $exchange = new Exchange([
            'username'=>$username ,
            'item_id'=>$id,
            'ex_time'=>date("Y-m-d H:i:s")
        ]);
        $exchange->save();
    }








}
