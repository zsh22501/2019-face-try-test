// 1. 查找数组中不重复的元素
function test(arr){
	return arr.filter((item)=>{
		return arr.indexOf(item)==arr.lastIndexOf(item);
	});
}
// 一个数组中有一个不重复的数，查找出来
function test(arr){
	return arr.find(item=>{
		return arr.indexOf(item)==arr.lastIndexOf(item);
	})
}
// 2. 数组去重 [...new Set(arr)]
function test(arr){
	var tempArr = [];
	arr.forEach((item)=>{
		// if(tempArr.indexOf(item)==-1)
		if(!tempArr.includes(item)){
			tempArr.push(item)
		}
	});
	arr = tempArr;
	return arr;
}
// 3. 保留数组中的重复元素
function test(arr){
	return arr.filter((item)=>{
		return arr.indexOf(item)!=arr.lastIndexOf(item)
	})
}
// 4. 查找数组中重复的元素
function test(arr){
	var tempArr = [];
	arr.sort();
	arr.forEach((item,index,arr)=>{
		if(arr[index]==arr[index+1]&&!tempArr.includes(item)){
			tempArr.push(item);
		}
	});
	return tempArr;
}
var arr = [1,2,2,1,3];
console.log(test(arr));