/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {

    const map = new Map()

    for (let word of strs) {
        let count = new Array(26).fill(0)

        for (let char of word) {
            count[char.charCodeAt(0) - "a".charCodeAt(0)]++
        }

        const key = count.join('')

        if (!map.has(key)) {
            map.set(key, [])
        }
        console.log("before push", map)
        console.log("key", key)
        map.get(key).push(word)
        console.log("after push", map)
    }

    return Array.from(map.values())
};