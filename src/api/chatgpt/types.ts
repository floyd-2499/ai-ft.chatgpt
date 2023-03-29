import { ResponseError } from "../types";

export interface Usage {
    completion_tokens : number
    prompt_tokens: number
    total_tokens: number
}

export interface Choices {
    finish_reason: string
    index: number
    logprobs: null
    text: string
}

export interface ChatResponseTypes {
    choices: Array<Choices>
    created: number
    id: string
    model: string
    object:string
    usage: Usage
}

export default interface ChatResponseStateTypes {
    loading: boolean
    chat?: Array<ChatResponseTypes>
    success?: boolean
    message?: string
    error?: ResponseError
}