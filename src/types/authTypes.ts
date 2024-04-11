export interface LoginUser{
    email:FormDataEntryValue | null,
    password:FormDataEntryValue | null
}

export interface SignupUser{
    email:FormDataEntryValue | null,
    name:FormDataEntryValue | null,
    username:FormDataEntryValue | null,
    password:FormDataEntryValue | null,
}

export interface ActionResponseState{
    success:boolean,
    message:string
}   