// Your code here
function saturdayFun(activity = "roller-skate"){
    return `This Saturday, I want to ${activity}!`
}

const mondayWork = function(activity = "go to the office"){
   return `This Monday, I will ${activity}.`
}

const wrapAdjective = (adj="*") => {
    const result = function (emphatic = "special") {
        return `You are ${adj}${emphatic}${adj}!`
    }
    
    return result
}

//calling the function example wrapAdjective("%")("a dedicated programmer")


/**
 *  NOTES
 * 
 * Find it difficult at times to comprehend what the test scripts are asking 
 * For instance wrapAdjective() assumed based on the reading that there would be 3+ functions
 * to be added. The test has pre-existing arguments to support the params of emphatic. 
 * My "*" default is the placeholder.
 */