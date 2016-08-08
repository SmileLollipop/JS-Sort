//分割函数
function parition(a,left,right){
	var pivot=a[left];//基准数
	var i=left;
	var j=right;
	while(i!=j){
		//从右往左找比基准小的数
		while(i<j && a[j]>=pivot){
			j--;
		}
		//从左往右找比基准大的数
		while(i<j && a[i]<=pivot){
			i++;
		}
		//交换位置
		if(i<j){
			var temp;
			temp=a[i];
			a[i]=a[j];
			a[j]=temp;
		}
	}
	//确定基准数的位置
    a[left]=a[i]
	a[i]=pivot;
	return i;
}

//优化的分割函数
function parition2(a,left,right){
	//以[left,right]这个范围的随机整数为基准点
	var index=left+Math.floor(Math.random()*(right-left+1));
	var temp;
	temp=a[left];
	a[left]=a[index];
	a[index]=temp;
	return parition(a,left,right);
}


function sort(a,left,right){
	if(left<right){
		var pivot=parition2(a,left,right);
		sort(a,left,pivot-1);
		sort(a,pivot+1,right);
	}
}

var a=[3,5,6,1,2,4,7,9,8];

sort(a,0,8);

for(var i in a){
	console.log(a[i]);
}
