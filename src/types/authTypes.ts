export interface LoginUser{
    email:FormDataEntryValue | null,
    password:FormDataEntryValue | null
}

export interface SignupUser{
    email:FormDataEntryValue | null,
    name:FormDataEntryValue | null,
    username:FormDataEntryValue | null,
    password:FormDataEntryValue | null,
    confirmPassword:FormDataEntryValue | null,
}

export interface ActionResponseState{
    success:boolean,
    message:string
}

export interface SignupActionState{
    success:boolean,
    errors:{
        name?:string,
        username?:string,
        email?:string,
        password?:string,
        confirmPassword?:string
    }
    message?:string | null
}