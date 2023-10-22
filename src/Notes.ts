class Notes{
    private static lastId: number = 0;
    public Id: number;
    public title: string;
    public description: string;

    constructor(title: string, description: string){
        Notes.lastId++;
        this.Id = Notes.lastId;
        this.title = title;
        this.description = description;
    }
}

export default Notes;