export const formatNumber=(num:number)=>{
    //format to  2 digits
    return(
        num.toFixed(2)
    )

}
export const getOrderNum = ()=>{
    if(localStorage){
        localStorage.setItem("1","test");
        localStorage.setItem("2","test3");
    }
}