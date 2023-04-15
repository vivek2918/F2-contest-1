let arr = [
    { id: 1, name: "john", age: "18", profession: "developer" },
    { id: 2, name: "jack", age: "20", profession: "developer" },
    { id: 3, name: "karen", age: "19", profession: "admin" },
  ];
  
  function PrintDeveloperbyMap() {
    //Write your code here , just console.log
    const temp = arr.map((obj) => {
        return obj.profession === 'developer' && console.log(obj);
    });
  }
  
  function PrintDeveloperbyForEach() {
    //Write your code here , just console.log
    const temp = arr.forEach(obj => {
        return obj.profession === 'developer' && console.log(obj);
    });
  }
  
  function addData() {
    //Write your code here, just console.log
    const newObj =  {id: 4, name: "Tej", age: "17", profession: "Fresher"};
    arr.push(newObj);

    console.log(arr);
  }
  
  function removeAdmin() {
    //Write your code here, just console.log
    arr = arr.filter(obj => {
        return obj.profession != 'admin';
    });
    
    console.log(arr);

  }
  
  function concatenateArray() {
    //Write your code here, just console.log
    let anotherArr = [
        { id: 5, name: "Vivek", age: "23", profession: "softwere enginee" },
        { id: 6, name: "Shyam", age: "15", profession: "Student" },
        { id: 7, name: "Darshak", age: "24", profession: "Bussiness" }
    ];
    
    mergedArr = [...arr, ...anotherArr];
    console.log(mergedArr);
  }