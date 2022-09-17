// pages/room/room.js
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    roomid: '',
    roomfile: [],
    images: app.data.images,

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      this.setData({
        roomid: options.roomid,
        roomfile: [
          // options.roomid+"hello",
          'cloud://mp-release-b1hvc.6d70-mp-release-b1hvc/images/room' + options.roomid + '/' + options.roomid + '_0.JPG',
          'cloud://mp-release-b1hvc.6d70-mp-release-b1hvc/images/room' + options.roomid + '/' + options.roomid + '_1.JPG',
          'cloud://mp-release-b1hvc.6d70-mp-release-b1hvc/images/room' + options.roomid + '/' + options.roomid + '_2.JPG',
          'cloud://mp-release-b1hvc.6d70-mp-release-b1hvc/images/room' + options.roomid + '/' + options.roomid + '_3.JPG',
          'cloud://mp-release-b1hvc.6d70-mp-release-b1hvc/images/room' + options.roomid + '/' + options.roomid + '_4.JPG',
          'cloud://mp-release-b1hvc.6d70-mp-release-b1hvc/images/room' + options.roomid + '/' + options.roomid + '_5.JPG',
          'cloud://mp-release-b1hvc.6d70-mp-release-b1hvc/images/room' + options.roomid + '/' + options.roomid + '_6.JPG',
          'cloud://mp-release-b1hvc.6d70-mp-release-b1hvc/images/room' + options.roomid + '/' + options.roomid + '_7.JPG',
          'cloud://mp-release-b1hvc.6d70-mp-release-b1hvc/images/room' + options.roomid + '/' + options.roomid + '_8.JPG',
                  ],
        roomfiletwoinline: [
          [
            'cloud://mp-release-b1hvc.6d70-mp-release-b1hvc/images/room' + options.roomid + '/' + options.roomid + '_1.JPG',
            'cloud://mp-release-b1hvc.6d70-mp-release-b1hvc/images/room' + options.roomid + '/' + options.roomid + '_2.JPG',
          ],
          [
            'cloud://mp-release-b1hvc.6d70-mp-release-b1hvc/images/room' + options.roomid + '/' + options.roomid + '_3.JPG',
            'cloud://mp-release-b1hvc.6d70-mp-release-b1hvc/images/room' + options.roomid + '/' + options.roomid + '_4.JPG',
          ],
          [
            'cloud://mp-release-b1hvc.6d70-mp-release-b1hvc/images/room' + options.roomid + '/' + options.roomid + '_5.JPG',
            'cloud://mp-release-b1hvc.6d70-mp-release-b1hvc/images/room' + options.roomid + '/' + options.roomid + '_6.JPG',
          ],
        ],

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