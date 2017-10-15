export class Sentmail {
    constructor(
        public recipient: string,
        public subject: string,
        public message_body: string,
        public attachment: string,
        public draft: string,
        public urgent: string,
        public sent_date: string
    ) { }
}
