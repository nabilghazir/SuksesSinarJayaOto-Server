class ResponseDTO<T> {
    error: boolean;
    message: string | object; 
    data: T | null;

    constructor({ error, message, data }: { error: boolean, message: string | object, data: T | null }) {
        this.error = error;
        this.message = message;
        this.data = data;
    }
}

export default ResponseDTO