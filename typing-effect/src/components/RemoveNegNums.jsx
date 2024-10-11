

function RemoveNegNums() {
    const myNumbers = [4, 1, -20, -7, 5, 9, -6];

    function removeNeg(numbers, callback) {
        const myArray = [];
        for (const x of numbers) {
            if (callback(x)) {
                myArray.push(x);
            }
        }
        return myArray;
    }

    const posNumbers = removeNeg(myNumbers, (x) => x >= 0);

    return (
        <>
            <h1>Positive Numbers</h1>
            <ul>
                {posNumbers.map((x, index) => (
                    <li key={index}>{x}</li>
                ))}
            </ul>
        </>
    )
}

export default RemoveNegNums;