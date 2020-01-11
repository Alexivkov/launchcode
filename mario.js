
printPyramid(10);


/*
 * printPyramid
 *
 * Prints to the console a pyramid of '#' characters of the specified height
 * For example, if height is 5, the console will look like this:
 *          ##
 *         ###
 *        ####
 *       #####
 *      ######
 */
function printPyramid(height) {
    pre=" ".repeat(height)
    hashtag = "#"
    for(let i = 0; i < height; i++){
        hashtag += "#"
        pre = pre.substring(0, pre.length - 1)
        console.log(pre + hashtag);
    }


    // TODO
    // print that pyramid!

}
