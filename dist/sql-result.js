var SQLResult = (function () {
    function SQLResult() {
        this.container = {};
        this.flagRows = new Array();
        this.row = 0;
        this.count = 0;
    }
    Object.defineProperty(SQLResult.prototype, "content", {
        get: function () {
            return this.data;
        },
        set: function (result) {
            this.data = JSON.parse(JSON.stringify(result.data));
            if (result.data != undefined && result.data.length > 0) {
                this.count = result.data.length;
                this.flagRows = result.flagRows;
            }
            this.container = result.container;
            this.selectBuffers = result.selectBuffers;
            if (result.insertBuffer != undefined) {
                this.insertBuffer = new SQLResult();
                this.insertBuffer.content = result.insertBuffer;
            }
            //		throw new Error('do not mutate the `.result` directly');
        },
        enumerable: true,
        configurable: true
    });
    SQLResult.prototype.get = function (prop) {
        return this.data[this.row][prop];
    };
    SQLResult.prototype.set = function (prop, value) {
        return this.data[this.row][prop] = value;
    };
    SQLResult.prototype.clone = function () {
        var clone = new SQLResult();
        clone.content = this;
        return clone;
    };
    SQLResult.prototype.cloneRow = function (row) {
        var clone = new SQLResult();
        clone.insertRow(this.data[row]);
        clone.insertBuffer = this.insertBuffer;
        clone.selectBuffers = this.selectBuffers;
        clone.container = this.container;
        return clone;
    };
    SQLResult.prototype.insertRow = function (result) {
        if (this.data == undefined) {
            this.data = new Array(result);
        }
        else {
            this.data.push(result);
        }
        this.flagRows.push(SQLResult.READ);
        this.count++;
    };
    SQLResult.prototype.getRowData = function (row) {
        return this.data[row];
    };
    SQLResult.prototype.setRow = function (row) {
        this.row = row;
    };
    SQLResult.prototype.getRow = function () {
        return this.row;
    };
    SQLResult.prototype.getCount = function () {
        return this.count;
    };
    SQLResult.prototype.setFirstRow = function () {
        this.row = 0;
    };
    SQLResult.prototype.next = function () {
        if (this.getRow() + 1 < this.getCount()) {
            this.setRow(this.getRow() + 1);
            return true;
        }
        else
            return false;
    };
    SQLResult.prototype.setFlagRow = function (flag, row) {
        if (row != undefined)
            this.flagRows[row] = flag;
        else
            this.flagRows[this.getRow()] = flag;
    };
    SQLResult.prototype.getFlagRow = function (row) {
        if (row != undefined)
            return this.flagRows[row];
        else
            return this.flagRows[this.getRow()];
    };
    SQLResult.READ = 1;
    SQLResult.UPDATE = 2;
    SQLResult.INSERT = 3;
    SQLResult.DELETE = 4;
    SQLResult.RESTORE = 5;
    return SQLResult;
}());
export { SQLResult };
//# sourceMappingURL=sql-result.js.map