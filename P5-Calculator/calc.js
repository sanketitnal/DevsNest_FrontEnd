window.addEventListener("load", () => {
    let ans = document.getElementById("ans");
    let inputlist = document.getElementsByClassName("in-num");
    let oplist = document.getElementsByClassName("op");
    let expr_status = "complete";

    // numbers
    for(let item of inputlist) {
        item.addEventListener("click", (event) => {
            console.log(item.innerHTML)
            if(expr_status === "ans")
                ans.innerHTML = item.innerHTML;
            else
                ans.innerHTML += item.innerHTML;
            expr_status = "complete";
        })
    }

    // operators
    for(let item of oplist) {
        item.addEventListener("click", () => {
            if(expr_status !== "op") {
                ans.innerHTML += item.innerHTML;
                expr_status = "op";
            }
        })
    }

    // back button
    let back_item = document.getElementsByClassName("back")[0];
    back_item.addEventListener("click", (event) => {
        let len = ans.innerHTML.length;
        if(len > 0)
            ans.innerHTML = ans.innerHTML.slice(0, len-1);

        len = ans.innerHTML.length;
        if(len == 0) {
            ans.innerHTML = "0";
            expr_status = "ans";
        } else if(ans.innerHTML.charCodeAt(len-1) >= "0".charCodeAt(0) && ans.innerHTML.charCodeAt(len-1) <= "9".charCodeAt(0)) {
            expr_status = "complete";
        } else if(ans.innerHTML[len-1] === ".") {
            ans.innerHTML = ans.innerHTML.slice(0, len-1);
            expr_status = "complete";
        } else {
            expr_status = "op";
        }
    })

    // cancel button
    let cancel_item = document.getElementsByClassName("cancel")[0];
    cancel_item.addEventListener("click", () => {
        ans.innerHTML = "0";
        expr_status = "ans";
    })

    let priority = {
        "x": 0,
        "+": 1,
        "-": 1,
        "*": 2,
        "/": 2
    };

    let solve = (left, right, op) => {
        if(op === "+")
            return (left + right);
        else if(op === "-")
            return (left - right);
        else if(op === "*")
            return (left * right);
        else if(right !== 0)
            return (left / right);
        return null;
    }

    let findin = (op) => {
        let str = "-+/*x";
        for(let i = 0; i < str.length; ++i) {
            if(str[i] === op)
                return true;
        }
        return false;
    }

    let equal_btn = document.getElementById("equal");
    equal_btn.addEventListener("click", () => {
        let expr = ans.innerHTML+"x";
        if(expr_status === "op") {
            alert("Expression isn't complete");
        } else {
            op_stk = [];
            num_stk = [];
            prev = -1;

            // expression is valid
            for(let i = 0; i < expr.length; ++i) {
                console.log(expr[i])
                if(findin(expr[i]) === true) {
                    let num = Number(expr.slice(prev+1, i));
                    num_stk.push(num)
                    prev = i;

                    while(op_stk.length > 0 && priority[op_stk[op_stk.length-1]] >= priority[expr[i]]) {
                        let right = num_stk.pop(), left = num_stk.pop(), out = solve(left, right, op_stk.pop());
                        if(out === null) {
                            alert("Divide by zero error");
                            return;
                        }
                        num_stk.push(out);
                    }
                    op_stk.push(expr[i]);
                }
                console.log(i, num_stk, op_stk);
            }

            ans.innerHTML = String(num_stk.pop());
            expr_status = "ans";
        }
    })
})