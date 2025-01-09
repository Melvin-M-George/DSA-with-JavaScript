function isvalid(string){
    let stack = [];

    for(let i of string){
        if(i === "(" || i==="{" || i==="["){
            stack.push(i);
        }else{
            if(stack.length === 0) return false;
            let top = stack.pop();
            if(i === ")" && top !=="(" || i==="}" && top != "{" || i==="]" && top !== "["){
                return false;
            }
        }
    }
    return stack.length === 0;
}

console.log(isvalid("([{({[()]})}])"));