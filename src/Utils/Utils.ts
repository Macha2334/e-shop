export const formatNumber=(num:number)=>{
    //format to  2 digits
    return(
        num.toFixed(2)
    )

}
export const saveUser = (uname:string,pswd:string)=>{
    type UserCredT = {
        username:string,
        password:string
    }
    if(localStorage){
        try{
            var oldItems = JSON.parse(localStorage.getItem('creds')||'[]') || [];
            var newItem = {
                'username':uname,
                'password':pswd
            };
            
            if(oldItems.length > 0){
                //check if the user already exist
                const item=oldItems.find( (item:UserCredT)=>item.username === uname)
                if(item){
                    return {status:false,msg:"user already registered"}
                }
            }
            oldItems.push(newItem);
            localStorage.setItem('creds', JSON.stringify(oldItems));
            return {status:true,msg:'Registration is successfull, Please Login'}
        }catch(e){
            console.log(e);
            return {status:false,msg:'Unknown Error '+e};
        }  
    }
}
export const validateUser = (uname:string,pswd:string)=>{
    if(localStorage){
        try{
            /*localStorage.getItem();
            setItem("username",uname);
            localStorage.setItem("password",pswd);*/
            return true;
        }catch(e){
            console.log(e);
            return false;
        }  
    }
}