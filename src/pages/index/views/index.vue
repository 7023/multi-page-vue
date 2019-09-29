<template>
    <div class="main">
        <div class="head-section">
            <div class="nameEdit">
                <div class="listCell">
                    <div class="title">姓名:</div>
                    <input v-model="editFrom.name" class="content" type="text" placeholder="请输入姓名" />
                </div>
                <div class="listCell">
                    <div class="title">阳历生日:</div>
                    <input v-model="editFrom.timeYang" class="content" type="text" placeholder="请选择阳历生日" @click="getShengRiTap('yal')" readonly />
                </div>
                <div class="btn">
                    <button class="btn-confirm" @click="confirmTap">提交</button>
                </div>
            </div>
        </div>
        <div class="banner-section">
            <!-- <img src="" /> -->
        </div>
        <div class="con-section">
            <!-- 内容 -->
        </div>
        <div class="banner-section">
            <!-- <img src="" /> -->
        </div>
        <van-popup
            v-model="popupShowSta"
            position="bottom"
            :style="{ width: '100%' }" >
                <van-datetime-picker
                    v-model="currentDate"
                    type="datetime"
                    :min-date="minDate"
                    :max-date="maxDate"
                     @confirm="dateConfirm"
                    @cancel="dateCancel"
                />
        </van-popup>
    </div>
</template>

<script>
import { Toast, Collapse } from 'vant'
export default {
    name: 'fortune',
    components: {
    },
  data () {
    return {
        popupShowSta:false,
        minDate: new Date(1900, 1, 1),
        maxDate: new Date(2100, 1, 1),
        currentDate: new Date(),
        editFrom:{
            name:"",
            timeYang:"",
        },
    }
  },
  mounted(){
    
  },
  methods:{
      dateConfirm(val){
            let dd = this.formatTime(val);
            this.editFrom.timeYang = dd;
            this.dateCancel();
      },
      dateCancel(){
          this.popupShowSta = false;
      },
    
    getShengRiTap(pro){
        this.shengRiPro = pro;
        this.popupShowSta = true;
    },
    getShichenTap(){
        this.popupShowTimeSta = true;
    },
    confirmTap(){
        let data = this.editFrom;
        if(!data.name){
            Toast('请填写名称');
            return;
        }
        if(!data.timeYang){
            Toast('请选择阳历生日');
            return;
        }
        this.geDortunetDatas(data);
    },
    geDortunetDatas(pro){
        Toast.success('提交成功');
    },
    //毫秒转时间
    formatTime: function (date){
        const year = date.getFullYear()
        const month = date.getMonth() + 1
        const day = date.getDate()
        const hour = date.getHours()
        const minute = date.getMinutes()
        const second = date.getSeconds()
        return [year, month, day].map(res=>res.toString().padStart(2, 0)).join('-') + ' ' + [hour, minute, second].map(res=>res.toString().padStart(2, 0)).join(':')
    },
  }
}
</script>
<style lang="scss" scoped>
.main{
    width: 100%;
    height:100%;
    background: #fff;
}
.head-section{
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding: 12px;
    box-shadow: 5px 0 10px #eee; 
}
.nameEdit{
    flex: 1;
    .listCell{
        margin-bottom: 12px;
        max-width: 90%;
       .title{
           font-size: 15px;
           color: #333;
           font-weight: bold;
           text-align: left;
       }
       .content{
           width: 100%;
           height: 38px;
           font-size: 14px;
           color: #333;
           border: 1px solid #eee;
           padding-left: 5px;
           border-radius: 5px;
           margin-top: 6px;
       }
    }
}

.banner-section{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 12px;
}

.conList-box{
    padding: 12px;
    width: 100%;
    .conListcell{
        margin-bottom: 16px;
        .con-title{
            font-size: 15px;
            color: #333;
            font-weight: bold;
            margin-bottom: 6px;
        }
        .con-content{
            font-size: 13px;
            color: #333;
        }
    }
}

.btn-box{
    width: 100%;
    margin-top: 25px;
    display: flex;
    align-items: center;
    justify-content: center;
    button{
        font-size: 13px;
        background: #eee;
        width: 100px;
        height: 30px;
        border: 0;
        border-radius: 6px;
        color: #333;
    }
    .btn-confirm{
        margin-left: 25px;
        background: #ea6151;
        color: #fff;
    }
}
.btn{
    width: 100%;
    .btn-confirm{
        width: 100px;
        height: 30px;
        font-size: 14px;
        color: #333;
        background: #eee;
        border: 0;
        border-radius: 30px;
    }

}
</style>
