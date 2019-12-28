<?php

namespace app\admin\model\volunteer;

use think\Model;


class Allocation extends Model
{

    

    

    // 表名
    protected $name = 'activity_allocation';
    
    // 自动写入时间戳字段
    protected $autoWriteTimestamp = false;

    // 定义时间戳字段名
    protected $createTime = false;
    protected $updateTime = false;
    protected $deleteTime = false;

    // 追加属性
    protected $append = [

    ];
    public function changeStatus($id){
        $allocation = Allocation::get($id);
        if ($allocation->status =='已完成'){
            exit();
        }
        $allocation->status = '已完成';
        $allocation->save();
    }

    public function addIntegral($id){
        $allocation = Allocation::get($id);
        $activity = Activity::get($allocation->activity_id);
        $volunte = Volunte::get($allocation->volunte_id);
        $volunte->integral = $volunte->integral+$activity->active_points;
        $volunte->save();
    }


    

    







    public function volunteeractivity()
    {
        return $this->belongsTo('app\admin\model\VolunteerActivity', 'activity_id', 'id', [], 'LEFT')->setEagerlyType(0);
    }


    public function volunteer()
    {
        return $this->belongsTo('app\admin\model\Volunteer', 'volunte_id', 'id', [], 'LEFT')->setEagerlyType(0);
    }
}
