const nums=[1,2,3,4,5,6,7,8,9,10]

function filter(nums){
let filtered=[]
for(i=0;i<10;i++){
if(nums[i]%2===0){
filtered.push(nums[i])}}
return(filtered)}
console.log(filter(nums))
