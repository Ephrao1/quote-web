export class Quotes {
        showDetails: boolean;
        constructor(
            public quote: string,
            public author: string,
            public name: string,
            public submissionDate: Date,
            public upVote: number=0,
            public downVote: number=0,
        ){
            this.showDetails = false;
        }
}
