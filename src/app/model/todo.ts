export class Todo {
    constructor(
        public id: number,
        public taskName: string,
        public description: string,
        public dateTime: string,
        public project: string,
        public priority: string     
    ) { }
}