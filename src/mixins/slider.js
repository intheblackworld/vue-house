export default {
  data() {
    return {
      slideIndex: 0,
    }
  },

  methods: {
    addIndex() {
      this.slideIndex =
        this.slideIndex === this.slideList.length - 1 ? 0 : this.slideIndex + 1
    },

    decIndex() {
      this.slideIndex =
        this.slideIndex === 0 ? this.slideList.length - 1 : this.slideIndex - 1
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

  mounted() {}
}
