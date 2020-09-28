function solve() {
    class Post {
        constructor(title, content) {
            this.title = title,
            this.content = content
        }
        toString() {
            let printLine = `Post: ${this.title}\nContent: ${this.content}`;
            return printLine;
        }
    }

    class SocialMediaPost extends Post {
        constructor(title, content, likes, dislikes) {
            super(title, content),
                this.likes = likes,
                this.dislikes = dislikes,
                this.comments = []
        }
        addComment(text) {
            this.comments.push(text);
        }
        toString() {
            let printLine = `Post: ${this.title}`
            printLine += `\nContent: ${this.content}`;
            printLine += `\nRating: ${this.likes - this.dislikes}`;
            if (this.comments.length) {
                printLine += `\nComments:`;
                for (let comment of this.comments) {
                    printLine += '\n * ';
                    printLine += comment;
                }
            }
            return printLine;
        }
    }

    class BlogPost extends Post {
        constructor(title, content, views) {
            super(title, content),
                this.views = views
        }
        view() {
            this.views++;
            return this;
        }
        toString() {
            let printLine = `Post: ${this.title}\nContent: ${this.content}`;
            printLine += `\nViews: ${this.views}`;
            return printLine;
        }
    }
    return {
        Post: Post,
        SocialMediaPost: SocialMediaPost,
        BlogPost: BlogPost
    }
}

