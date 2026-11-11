var minimumCost = function(cost1, cost2, costBoth, need1, need2) {
    let a = (need1*cost1)+(need2*cost2);

    let b =Math.max(need1,need2)*costBoth;

    let min=Math.min(need1,need2);
    
    let c = (min * costBoth) +
            ((need1 - min) * cost1) +
            ((need2 - min) * cost2);
    
    return Math.min(a,b,c);
};