export const withdrawSync = (val)=>{
    return {type:"WITHDRAW",value:val}
};
export const depositSync = (val)=>{
    return {type:"DEPOSIT",value:val}
};
export const withdrawAsync = (val)=>{
    return (dispatch)=>{
        setTimeout(()=>{
            dispatch(withdrawSync(val));
        },5000);
    }
};
export const depositAsync = (val)=>{
    return (dispatch)=>{
        setTimeout(()=>{
            dispatch(depositSync(val));
        },5000);
    }
};