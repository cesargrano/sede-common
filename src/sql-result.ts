export class SQLResult {
	data: any;
	container = {};
	selectBuffers: any;
	insertBuffer: SQLResult;
	flagRows: Array<number> = new Array();

	static READ: number = 1;
	static UPDATE: number = 2;
	static INSERT: number = 3;
	static DELETE: number = 4;
	static RESTORE: number = 5;

	constructor() {
	}
	get content() {
		return this.data;
	}
	set content(result) {
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
	}
	get(prop: any) {
		return this.data[this.row][prop];
	}
	set(prop: string, value: any) {
		return this.data[this.row][prop] = value;
	}
	clone() {
		let clone = new SQLResult();
		clone.content = this;

		return clone;
	}
	cloneRow(row: number) {
		let clone = new SQLResult();
		clone.insertRow(this.data[row]);
		clone.insertBuffer = this.insertBuffer;
		clone.selectBuffers = this.selectBuffers;
		clone.container = this.container;
		return clone;
	}

	insertRow(result: any): void {
		if (this.data == undefined) {
			this.data = new Array(result);
		} else {
			this.data.push(result);
		}

		this.flagRows.push(SQLResult.READ);
		this.count++;
	}
	getRowData(row: number) {
		return this.data[row];
	}
	row: number = 0;
	setRow(row: number): void {
		this.row = row;
	}
	getRow(): number {
		return this.row;
	}

	count: number = 0;
	getCount(): number {
		return this.count;
	}

	setFirstRow(): void {
		this.row = 0;
	}
	next(): boolean {
		if(this.getRow() + 1 < this.getCount())
		{
			this.setRow(this.getRow() + 1);
			return true;
		}
		else
			return false;
	}

	setFlagRow(flag: number, row?: number): void {
		if (row != undefined)
			this.flagRows[row] = flag;
		else
			this.flagRows[this.getRow()] = flag;
	}
	getFlagRow(row?: number): number {
		if (row != undefined)
			return this.flagRows[row];
		else
			return this.flagRows[this.getRow()];
	}
}