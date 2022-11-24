export const parsIcon = (icon: String) => {
    return icon==="BTC"?'Group1': icon==="ETH"?'Group3':'Group2'
};

export const parsStatus =(status: boolean)=>{
    return status?'Confirmed':'Time Out'
}

export const filterAll= (arr:[], search:string) =>{
    const newArr = arr.filter(item=>{
        let triger = false;
        for (let key in item as any) {
            const value: string = String(item[key]);
            if (value.toLowerCase().includes(search.toLowerCase())){
                triger=true
            }
        }
        return triger
    })
    return newArr
}
