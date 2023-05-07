import { UserDetailT } from "../Login/loginSlice"

export type UserCredT = {
    username:string,
    password:string
}
export const formatNumber=(num:number)=>{
    //format to  2 digits
    return(
        num.toFixed(2)
    )

}
export const saveUser = (uname:string,pswd:string)=>{
    
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
export const validateUser = (uname:string,pswd:string) =>{
    if(localStorage){
        try{
            let creds=localStorage.getItem("creds") ||'';
            let credObj=JSON.parse(creds);
            let userObj : UserCredT=credObj.find( (item:UserCredT) => item.username===uname && item.password===pswd)
            console.log(userObj)
            //update logged in user Detail
            return userObj ?  {isLoggedIn:true ,userName:userObj.username,isAuthFailed:false} : {isLoggedIn : false ,userName:uname,isAuthFailed:true};
        }catch(e){
            console.log(e);
        }  
        return {isLoggedIn: false,userName:uname,isAuthFailed:true}
    }
}