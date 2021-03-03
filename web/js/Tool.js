function MaxPrices(strArray){
    console.info('MaxPrices start')
    console.info('args',strArray)
    console.info(strArray.length)
    let ans
    strArray.forEach(item=>{
        if(getZNPrice(item)){
            console.info(item)
            ans=item;
        }
    });
    
    let num=Nzh.decodeB(ans)
    return [ans,num];
}
function getZNPrice(str){

    var DXLibrary="壹贰叁肆伍陆柒捌玖零拾佰仟万亿兆貳陸億萬圓圆元角分整";
 
    let wordArray=str.split('')
    let ans=true
    wordArray.forEach(word=>{
        if(DXLibrary.indexOf(word)<0){
            ans=false
            
        }
    })
    return ans
    
}

function getCompany(strArray){
    let ansArray=new Array();
    strArray.forEach(item=>{
        if(item.indexOf('公司')>0){
            ansArray.push(item);
        }
    })
    return ansArray;
}


function getCode_Date(strArray){
    let ansArray=new Array();
for(let i=0;i<strArray.length;i++){
    
    if(
        strArray[i].trim().length==12&&
        isAllNumber(strArray[i].trim())&&
        strArray[i+1].trim().length==8&&
        isAllNumber(strArray[i+1].trim())
        ){
            ansArray.push(strArray[i]);
            ansArray.push(strArray[i+1]);
            let date='';
            for(let j=i+2;j<strArray.length;j++){
                if(isAllNumber(trimMax(strArray[j]))){
                    date+=trimMax(strArray[j]);
                    if(date.length>=8){
                        ansArray.push(date);
                        break;
                    }
                }
            }
            console.info('i+2',strArray[i+2])
            console.info('i+3',strArray[i+3])
            console.info('i+4',strArray[i+4])
            console.info('i+5',strArray[i+5])
        }
}
return ansArray;
}
function trimMax(str){
    return str.replace(/\s+/g,"");
}
function isAllNumber(str){
    let numberLib="0123456789"
    let arr=str.split('')
    let ans=true;
    arr.forEach(item=>{
        if(numberLib.indexOf(item)<0){
            ans=false;
        }
    })
    return ans
}

