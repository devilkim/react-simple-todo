module.exports = {
  init: () => {
    this.items = [];
  },
  getList: () => {
    return this.items;
  },
  addItem: (text) => {
    const no = this.items.length === 0 ? 1 : (this.items[this.items.length - 1].no + 1);
    const checked = false;
    this.items.push({no, checked, text});
    return no;
  },
  checkItem: (no) => {
    const item = this.items.filter(item => item.no === no);
    if (item.length === 0) {
      return null;
    } else {
      item[0].checked = !item[0].checked;
      return item[0].checked;
    }
  },
  removeItem: (no) => {
    const items = this.items.filter(item => item.no !== no);
    if (items.length === this.items.length) {
      return false;
    } else {
      this.items = items;
      return true;
    }
  }
};
