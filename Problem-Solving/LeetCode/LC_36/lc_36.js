//Valid Sudoku

/*
Determine if a 9 x 9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules:

Each row must contain the digits 1-9 without repetition.
Each column must contain the digits 1-9 without repetition.
Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without repetition.
Note:

A Sudoku board (partially filled) could be valid but is not necessarily solvable.
Only the filled cells need to be validated according to the mentioned rules.
*/

/*

Example 1

Input: board = 
[["5","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]]
Output: true


Example 2:

Input: board = 
[["8","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]]
Output: false
Explanation: Same as Example 1, except with the 5 in the top left corner being modified to 8. Since there are two 8's in the top left 3x3 sub-box, it is invalid.


*/

/**
 * @param {character[][]} board
 * @return {boolean}
 */


var isValidSudoku = function(board) {
    let rows=[]
    let columns=[]
    let blocks=[]
    
    let curr_block_x=0
    let curr_block_y=0

    let i,j


    
    for(i=0;i<9;i++){
        rows.push(new Map())
        for(j=0;j<9;j++){
            if (!columns[j]) {
                columns.push(new Map())
            }

            if (!blocks[curr_block_y]) {
                blocks.push([])
            }

            if(!blocks[curr_block_y][curr_block_x]){
                blocks[curr_block_y].push(new Map())
            }

            if (board[i][j] !== '.') {
                if (rows[i].has(board[i][j]) || columns[j].has(board[i][j]) || blocks[curr_block_y][curr_block_x].has(board[i][j])) {
                    return false
                } else {
                    rows[i].set(board[i][j], 1)
                    columns[j].set(board[i][j], 1)
                    blocks[curr_block_y][curr_block_x].set(board[i][j], 1)
                }
            }

            if ((j + 1) % 3 === 0) {
                curr_block_x += 1
            }

        }

        curr_block_x=0

        if((i+1)%3===0){
            curr_block_y+=1
        }


    }



    return true
};

console.log(isValidSudoku([
    ["5", "3", ".", ".", "7", ".", ".", ".", "."],
    ["6", ".", ".", "1", "9", "5", ".", ".", "."], 
    [".", "9", "8", ".", ".", ".", ".", "6", "."], 
    ["8", ".", ".", ".", "6", ".", ".", ".", "3"], 
    ["4", ".", ".", "8", "3", "3", ".", ".", "1"], 
    ["7", ".", ".", ".", "2", ".", ".", ".", "6"], 
    [".", "6", ".", ".", ".", ".", "2", "8", "."], 
    [".", ".", ".", "4", "1", "9", ".", ".", "5"], 
    [".", ".", ".", ".", "8", ".", ".", "7", "9"]
]))