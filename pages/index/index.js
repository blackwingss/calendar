//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    userInfo: {},
    dates: [
      {
        _id: 0,
        year: 2017,
        month: 9,
        date: 29
      },
      {
        _id: 1,
        year: 2017,
        month: 9,
        date: 30
      },
      {
        _id: 2,
        year: 2017,
        month: 9,
        date: 31
      },{
        _id: 3,
        active: false,
        year: 2017,
        month: 9,
        date: 1
      },{
        _id: 4,
        active: false,
        year: 2017,
        month: 9,
        date: 2
      },{
        _id: 5,
        active: false,
        year: 2017,
        month: 9,
        date: 3
      },{
        _id: 6,
        active: false,
        year: 2017,
        month: 9,
        date: 4
      },{
        _id: 7,
        active: false,
        year: 2017,
        month: 9,
        date: 5
      },{
        _id: 8,
        active: false,
        year: 2017,
        month: 9,
        date: 6
      },{
        _id: 9,
        active: false,
        year: 2017,
        month: 9,
        date: 7
      },{
        _id: 10,
        active: false,
        year: 2017,
        month: 9,
        date: 8
      },{
        _id: 11,
        active: false,
        year: 2017,
        month: 9,
        date: 9
      },{
        _id: 12,
        active: false,
        year: 2017,
        month: 9,
        date: 10
      },{
        _id: 13,
        active: false,
        year: 2017,
        month: 9,
        date: 11
      },{
        _id: 14,
        active: false,
        year: 2017,
        month: 9,
        date: 12
      },{
        _id: 15,
        active: false,
        year: 2017,
        month: 9,
        date: 13
      },{
        _id: 16,
        active: false,
        year: 2017,
        month: 9,
        date: 14
      },{
        _id: 17,
        active: false,
        year: 2017,
        month: 9,
        date: 15
      },{
        _id: 18,
        active: false,
        year: 2017,
        month: 9,
        date: 16
      },{
        _id: 19,
        active: false,
        year: 2017,
        month: 9,
        date: 17
      },{
        _id: 20,
        active: false,
        year: 2017,
        month: 9,
        date: 18
      },{
        _id: 21,
        active: false,
        year: 2017,
        month: 9,
        date: 19
      },{
        _id: 22,
        active: false,
        year: 2017,
        month: 9,
        date: 20
      },{
        _id: 23,
        active: false,
        year: 2017,
        month: 9,
        date: 21
      },{
        _id: 24,
        active: false,
        year: 2017,
        month: 9,
        date: 22
      },{
        _id: 25,
        active: false,
        year: 2017,
        month: 9,
        date: 23
      },{
        _id: 26,
        active: false,
        year: 2017,
        month: 9,
        date: 24
      },{
        _id: 27,
        active: false,
        year: 2017,
        month: 9,
        date: 25
      },{
        _id: 28,
        active: false,
        year: 2017,
        month: 9,
        date: 26
      },{
        _id: 29,
        active: false,
        year: 2017,
        month: 9,
        date: 27
      },{
        _id: 30,
        active: false,
        year: 2017,
        month: 9,
        date: 28
      },{
        _id: 31,
        active: false,
        year: 2017,
        month: 9,
        date: 29
      },{
        _id: 32,
        active: false,
        year: 2017,
        month: 9,
        date: 30
      },{
        _id: 33,
        year: 2017,
        month: 9,
        date: 1
      },{
        _id: 34,
        year: 2017,
        month: 9,
        date: 2
      }
    ],
    itemList: [
      {
        imgSrc: "../../images/icon-music.png",
        title: "Music lesson",
        time: "3:00 pm",
        content: "There is a music lesson at 3:00 this afternoon",
        date: 1
      },
      {
        imgSrc: "../../images/icon-music.png",
        title: "Music lesson",
        time: "3:00 pm",
        content: "There is a music lesson at 3:00 this afternoon",
        date: 22
      },
      {
        imgSrc: "../../images/icon-draw.png",
        title: "Music lesson",
        time: "3:00 pm",
        content: "There is a music lesson at 3:00 this afternoon",
        date: 22
      },
      {
        imgSrc: "../../images/icon-present.png",
        title: "Music lesson",
        time: "3:00 pm",
        content: "There is a music lesson at 3:00 this afternoon",
        date: 22
      },
      {
        imgSrc: "../../images/icon-book.png",
        title: "Music lesson",
        time: "3:00 pm",
        content: "There is a music lesson at 3:00 this afternoon",
        date: 22
      }
    ],
    currentItemList: [],
    selected: {},
    isSelected: false
  },
  onLoad: function () {
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
  },
  dateClickEvent(e) {
    // console.log(e);
    // console.log(this);
    Object.assign(this.data.selected, e.currentTarget.dataset);
    // console.log(this.data.selected.active);
    if(this.data.selected.active == false) {
      this.setData({
        isSelected: true,
        active: true
      })
    } else if(this.data.selected.active == true){
      this.setData({
        isSelected: true,
        active: false
      })
    }
    var tempCurrentItemList = [];
    for(let i=0; i < this.data.itemList.length; i++) {
      // console.log(this);
      if(this.data.itemList[i].date === this.data.selected.date) {
        tempCurrentItemList.push(this.data.itemList[i]);
      }
    }
    this.setData({
      currentItemList: tempCurrentItemList
    })
  }
})
