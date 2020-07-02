var obj = {
  uuid: "9b70b4ea-a223-42d1-99e3-ba225ff8bc2d",
  path: "https://course-ec-api.hexschool.io/",
  products: [],
};

function getData() {
  var vm = this;
  var path = `${obj.path}api/${obj.uuid}/ec/products`;
  axios.get(path).then(function (res) {
    vm.obj.products = res.data.data;
    //得到資料後，render在網頁上
    console.log(obj.products);
  });
}
getData();