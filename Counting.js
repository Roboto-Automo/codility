//counting frog jumps to cover all positions

function solution(X, A) {
    let coveredPositions = new Array(X + 1).fill(false); // Initialize an array to track covered positions
    let uncoveredCount = X; // Initialize count of uncovered positions

    for (let time = 0; time < A.length; time++) {
        let position = A[time];
        if (!coveredPositions[position]) {
            coveredPositions[position] = true;
            uncoveredCount--;
            if (uncoveredCount === 0) {
                return time;
            }
        }
    }

    return -1; // If all positions aren't covered before the end, return -1
}
