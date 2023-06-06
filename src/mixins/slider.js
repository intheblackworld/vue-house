export default {
  data() {
    return {
      slideIndex: 0,
      toggleTimer: false,
      stopAutoPlay: false,
    }
  },

  mounted() {
    setInterval(() => {
      if (this.toggleTimer) {
        if (this.slideList && !this.stopAutoPlay) {
          this.addIndex()
        }
        if (this.slideList1) {
          this.addMultiIndex(1)
        }

        if (this.slideList2) {
          this.addMultiIndex(2)
        }

        if (this.slideList3) {
          this.addMultiIndex(3)
        }

        if (this.slideList4) {
          this.addMultiIndex(4)
        }
      }

    }, 5000)
  },
  methods: {
    goTo(index) {
      this.slideIndex = index
    },
    goToMul(listIndex, index) {
      this[`slideIndex${listIndex}`] = index
    },
    addIndex(index) {
      const slideList = typeof index === 'number'?this[`slideList${index}`]:this.slideList;
      this.slideIndex =
      this.slideIndex === slideList.length - 1 ? 0 : this.slideIndex + 1;
      /* const slideList = this[`slideList${index}`];
      const slideIndex = this[`slideIndex${index}`];
      this[`slideIndex${index}`] = slideIndex === slideList.length - 1 ? 0 : slideIndex + 1;
      console.log(slideList.length);
      */
    },

    decIndex(index) {
      const slideList = typeof index === 'number'?this[`slideList${index}`]:this.slideList;
      this.slideIndex =
        this.slideIndex === 0 ? slideList.length - 1 : this.slideIndex - 1;
    },
    // 一個區塊有多個輪播組件
    addMultiIndex(index) {
      this[`slideIndex${index}`] =
        this[`slideIndex${index}`] === this[`slideList${index}`].length - 1 ? 0 : this[`slideIndex${index}`] + 1;
        console.log(slideList.length);
    },

    decMultiIndex(index) {
      this[`slideIndex${index}`] =
        this[`slideIndex${index}`] === 0 ? this[`slideList${index}`].length - 1 : this[`slideIndex${index}`] - 1;
    },
  },
}
