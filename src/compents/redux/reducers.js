export let reducer02 = (state ="all" ,action)=> { 
    
    switch (action.type) { 
           // input 
    case "done02" :
      return  state="done02";
    case "undone02": 
       return state="undone02"
    case "all": 
       return state="all"
    default : return state
    }
}