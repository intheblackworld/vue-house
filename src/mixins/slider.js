export default {
  data() {
    return {
      slideIndex: 0,
      toggleTimer: true,
    }
  },

  created() {
    // setInterval(() => {
    //   if(this.toggleTimer) {
    //     if (this.slideList) {
    //       this.addIndex()
    //     }
    //     if (this.slideList1) {
    //       this.addMultiIndex(1)
    //     }
  
    //     if (this.slideList2) {
    //       this.addMultiIndex(2)
    //     }
  
    //     if (this.slideList3) {
    //       this.addMultiIndex(3)
    //     }
  
    //     if (this.slideList4) {
    //       this.addMultiIndex(4)
    //     }
    //   }
      
    // }, 5000)
  },
  methods: {
    goTo(index) {
      this.slideIndex = index
    },
    addIndex() {
      if (this.contentIndex >= 0) {
        this.slideIndex =
        this.slideIndex === this.slideList[this.contentIndex].length - 1 ? 0 : this.slideIndex + 1
      } else {
        this.slideIndex =
        this.slideIndex === this.slideList.length - 1 ? 0 : this.slideIndex + 1
      }
      
    },

    decIndex() {
      if (this.contentIndex >= 0) {
      this.slideIndex =
        this.slideIndex === 0 ? this.slideList[this.contentIndex].length - 1 : this.slideIndex - 1
      } else {
        this.slideIndex =
        this.slideIndex === 0 ? this.slideList.length - 1 : this.slideIndex - 1
      }
    },
    // 一個區塊有多個輪播組件
    addMultiIndex(index) {
      this[`slideIndex${index}`] =
        this[`slideIndex${index}`] === this[`slideList${index}`].length - 1 ? 0 : this[`slideIndex${index}`] + 1
    },

    decMultiIndex(index) {
      this[`slideIndex${index}`] =
        this[`slideIndex${index}`] === 0 ? this[`slideList${index}`].length - 1 : this[`slideIndex${index}`] - 1
    },
  },

  mounted() { }
}
