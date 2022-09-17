// pages/edit/edit.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    roomid: '',
    sceneid: '',
    noteid: '',
    note: [],
    title: '',
    notes: '',
    date: '',
  },

  changeTitle: function(e){
    this.setData({
      title: e.detail.value
    })
    console.log(e.detail.value)
  },

  changeNotes: function (e) {
    this.setData({
      notes: e.detail.value
    })
    console.log(e.detail.value)
  },


  tapToSave: function(e){
    var date = new Date()
    var myDate = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate()
    console.log("save")

    console.log(e.detail.value._TITLE)
    console.log(e.detail.value._NOTES)
    console.log(this.data.sceneid)
    console.log(this.data.roomid)
    console.log(this.data.noteid)

    const db = wx.cloud.database({
      env: 'mp-release-b1hvc'
    })

    db.collection('notes').doc(this.data.noteid).update({
      data: {
        title: e.detail.value._TITLE,
        notes: e.detail.value._NOTES,
        date: myDate,
      },
      success: function (res) {
        console.log("Change OK")
        wx.navigateBack()
        wx.showToast({
          title: '修改成功！',
        })
      }
    })
  },


  tapToReset: function (e) {
    console.log("DELETE")
    const db = wx.cloud.database({
      env: 'mp-release-b1hvc'
    })
    db.collection('notes').doc(this.data.noteid).remove({
      success: function (res) {
        console.log(res.data)


        wx.navigateBack()
        wx.showToast({
          title: '删除成功！',
        })
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      roomid: options.roomid,
      sceneid: options.sceneid,
      noteid: options.noteid,
    })
    
    const db = wx.cloud.database({
      env: 'mp-release-b1hvc'
    })

    db.collection('notes').where({
      roomid: options.roomid,
      sceneid: options.sceneid,
      _id:options.noteid, 
    }).get({
      success: res => {
        console.log(res)
        console.log("A")
        this.setData({
          notes: res.data[0].notes,
          title: res.data[0].title,
        })
        console.log("A")
      }
    })

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})