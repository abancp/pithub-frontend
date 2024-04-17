export interface NewRepo{
    name:FormDataEntryValue | null,
    secure:FormDataEntryValue | null,
    description?:FormDataEntryValue | null,
    codeURL?:FormDataEntryValue | null,
    languages?:string[],
    liveURL?:FormDataEntryValue | null,
}
export interface CreateRepoActionState{
    success:boolean,
    message:string,
    username?:string,
    nameAvailable?:boolean
}
