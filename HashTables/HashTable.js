class HashTable {
    constructor(size) {
        this.values = new Array(size);
    }

    _hash(key, arrayLen){
        let total = 0;
        let WEIRD_PRIME = 53;
        for(let i =0; i < Math.min(key.length, 100); i++) {
            let char = key[i];
            let value = char.charCodeAt(0)-96;
            total = (total * WEIRD_PRIME + value)%arrayLen;
        }
        return total;
    }

// Insert in to hash table. Currently this will accept duplicate keys.
    set(key, value) {
        let index = this._hash(key, this.values.length);
        if(!this.values[index]){
            this.values[index] = [];
        }
        this.values[index].push([key, value]);
        return this;
    }

// Lookup hashtable.
    get(key) {
        let index = this._hash(key,this.values.length);
        if(this.values[index]){
            let elements = this.values[index]; // [[1,w],[2,r]]
            for(let i = 0; i < this.values[index].length; i++) {
                if(this.values[index][i][0] === key){
                    return this.values[index][i][1];
                }
            }
        }
        return undefined;
    }

// Return an array of all the keys in hashtable
    keys() {
        let allKeys = [];
        for(let i = 0; i < this.values.length; i++) {
            let idxContent = this.values[i];
            for(let j = 0; j < idxContent.length; j++) {
                if(!allKeys.includes(this.values[i][j][0])){
                    allKeys.push(this.values[i][j][0]);
                }
            }
        }
        return allKeys;
    }

// Return an array of all the values in hashtable
    allValues() {
        let allHTValues = [];
        for(let i = 0; i < this.values.length; i++) {
            let idxContent = this.values[i];
            for(let j = 0; j < idxContent.length; j++) {
                if(!allHTValues.includes(this.values[i][j][1])) {
                    allHTValues.push(this.values[i][j][1]);
                }
            }
        }
        return allHTValues;
    } 
}

ht = new HashTable(3);
ht.set("hello", "goodbye");
ht.set("tis the season", "fa la la la")
ht.set("Merry", "Christmas")
ht.set("Some Word", "JS")
   