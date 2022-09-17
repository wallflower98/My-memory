//app.js
App({

  data: {
    // name: "Spencer",
    // time: (new Date()).toString(),
    // numberIsTen: 10,
    // array: [{ message: 'foo' }, { message: 'bar' }, { message: 'tar' }],
    moot: "记忆宫殿法的使用可上溯至古罗马时期，一些令人难以置信的记忆绝活也可归因于它。8次世界记忆冠军Dominic O’ Brien，他能记住54张桌子上的所有牌的顺序，每张牌只看一次。 ",
    file: {
      f_1: [
        "f_1_1",
        "f_1_2",
      ],
      f_2: [
        "f_2_1",
        "f_2_2",
      ],
      f_3: [
        "f_3_1",
        "f_4_2",
      ],
    },


    images: {
      room1: [
        'cloud://mp-release-b1hvc.6d70-mp-release-b1hvc/images/room1/1_0.JPG',
        'cloud://mp-release-b1hvc.6d70-mp-release-b1hvc/images/room1/1_1.JPG',
        'cloud://mp-release-b1hvc.6d70-mp-release-b1hvc/images/room1/1_2.JPG',
        'cloud://mp-release-b1hvc.6d70-mp-release-b1hvc/images/room1/1_3.JPG',
        'cloud://mp-release-b1hvc.6d70-mp-release-b1hvc/images/room1/1_4.JPG',
        'cloud://mp-release-b1hvc.6d70-mp-release-b1hvc/images/room1/1_5.JPG',
        'cloud://mp-release-b1hvc.6d70-mp-release-b1hvc/images/room1/1_6.JPG',
        'cloud://mp-release-b1hvc.6d70-mp-release-b1hvc/images/room1/1_7.JPG',
        'cloud://mp-release-b1hvc.6d70-mp-release-b1hvc/images/room1/1_8.JPG',],
      room2: [
        'cloud://mp-release-b1hvc.6d70-mp-release-b1hvc/images/room2/2_0.JPG',
        'cloud://mp-release-b1hvc.6d70-mp-release-b1hvc/images/room2/2_1.JPG',
        'cloud://mp-release-b1hvc.6d70-mp-release-b1hvc/images/room2/2_2.JPG',
        'cloud://mp-release-b1hvc.6d70-mp-release-b1hvc/images/room2/2_3.JPG',
        'cloud://mp-release-b1hvc.6d70-mp-release-b1hvc/images/room2/2_4.JPG',
        'cloud://mp-release-b1hvc.6d70-mp-release-b1hvc/images/room2/2_5.JPG',
        'cloud://mp-release-b1hvc.6d70-mp-release-b1hvc/images/room2/2_6.JPG',
        'cloud://mp-release-b1hvc.6d70-mp-release-b1hvc/images/room2/2_7.JPG',
        'cloud://mp-release-b1hvc.6d70-mp-release-b1hvc/images/room2/2_8.JPG',],
      room3: [
        'cloud://mp-release-b1hvc.6d70-mp-release-b1hvc/images/room3/3_0.JPG',
        'cloud://mp-release-b1hvc.6d70-mp-release-b1hvc/images/room3/3_1.JPG',
        'cloud://mp-release-b1hvc.6d70-mp-release-b1hvc/images/room3/3_2.JPG',
        'cloud://mp-release-b1hvc.6d70-mp-release-b1hvc/images/room3/3_3.JPG',
        'cloud://mp-release-b1hvc.6d70-mp-release-b1hvc/images/room3/3_4.JPG',
        'cloud://mp-release-b1hvc.6d70-mp-release-b1hvc/images/room3/3_5.JPG',
        'cloud://mp-release-b1hvc.6d70-mp-release-b1hvc/images/room3/3_6.JPG',
        'cloud://mp-release-b1hvc.6d70-mp-release-b1hvc/images/room3/3_7.JPG',
        'cloud://mp-release-b1hvc.6d70-mp-release-b1hvc/images/room3/3_8.JPG',],
      room4: [
        'cloud://mp-release-b1hvc.6d70-mp-release-b1hvc/images/room4/4_0.JPG',
        'cloud://mp-release-b1hvc.6d70-mp-release-b1hvc/images/room4/4_1.JPG',
        'cloud://mp-release-b1hvc.6d70-mp-release-b1hvc/images/room4/4_2.JPG',
        'cloud://mp-release-b1hvc.6d70-mp-release-b1hvc/images/room4/4_3.JPG',
        'cloud://mp-release-b1hvc.6d70-mp-release-b1hvc/images/room4/4_4.JPG',
        'cloud://mp-release-b1hvc.6d70-mp-release-b1hvc/images/room4/4_5.JPG',
        'cloud://mp-release-b1hvc.6d70-mp-release-b1hvc/images/room4/4_6.JPG',
        'cloud://mp-release-b1hvc.6d70-mp-release-b1hvc/images/room4/4_7.JPG',
        'cloud://mp-release-b1hvc.6d70-mp-release-b1hvc/images/room4/4_8.JPG',],
      room5: [
        'cloud://mp-release-b1hvc.6d70-mp-release-b1hvc/images/room5/5_0.JPG',
        'cloud://mp-release-b1hvc.6d70-mp-release-b1hvc/images/room5/5_1.JPG',
        'cloud://mp-release-b1hvc.6d70-mp-release-b1hvc/images/room5/5_2.JPG',
        'cloud://mp-release-b1hvc.6d70-mp-release-b1hvc/images/room5/5_3.JPG',
        'cloud://mp-release-b1hvc.6d70-mp-release-b1hvc/images/room5/5_4.JPG',
        'cloud://mp-release-b1hvc.6d70-mp-release-b1hvc/images/room5/5_5.JPG',
        'cloud://mp-release-b1hvc.6d70-mp-release-b1hvc/images/room5/5_6.JPG',
        'cloud://mp-release-b1hvc.6d70-mp-release-b1hvc/images/room5/5_7.JPG',
        'cloud://mp-release-b1hvc.6d70-mp-release-b1hvc/images/room5/5_8.JPG',
            ],
      },

      space: "  ",
  },


  onLaunch: function () {
    if (!wx.cloud) {
      console.error('请使用 2.2.3 或以上的基础库以使用云能力')
    } else {
      wx.cloud.init({
        traceUser: true,
      })
    }

    this.globalData = {}
  }
})
