class TextScramble {
    constructor(el, phrases) {
        this.el = el;
        this.phrases = phrases;
        this.chars = '!<>-_\\/[]{}—=+*^?#________';
        this.update = this.update.bind(this);
        this.counter = 0;
    }

    start(speed = 800) {
        this.setText(this.phrases[this.counter]).then(() => {
            setTimeout(this.start.bind(this), speed);
        });

        this.counter = (this.counter + 1) % this.phrases.length;
    }

    setText(newText) {
        const oldText = this.el.innerText;
        const length = Math.max(oldText.length, newText.length);
        const promise = new Promise((resolve) => this.resolve = resolve);
        this.queue = [];

        for (let i = 0; i < length; i += 1) {
            const from = oldText[i] || '';
            const to = newText[i] || '';
            const start = Math.floor(Math.random() * 40);
            const end = start + Math.floor(Math.random() * 40);

            this.queue.push({ from, to, start, end });
        }

        cancelAnimationFrame(this.frameRequest);

        this.frame = 0;
        this.update();

        return promise;
    }

    update() {
        let output = '';
        let complete = 0;
        for (let i = 0, n = this.queue.length; i < n; i += 1) {
            let { from, to, start, end, char } = this.queue[i];

            if (this.frame >= end) {
                complete += 1;
                output += to;
            } else if (this.frame >= start) {
                if (!char || Math.random() < 0.28) {
                    char = this.randomChar();
                    this.queue[i].char = char;
                }

                output += `<span class="dud">${char}</span>`;
            } else {
                output += from;
            }
        }

        this.el.innerHTML = output;

        if (complete === this.queue.length) {
            this.resolve();
        } else {
            this.frameRequest = requestAnimationFrame(this.update);
            this.frame += 1;
        }
    }

    randomChar() {
        return this.chars[Math.floor(Math.random() * this.chars.length)];
    }
}


export default TextScramble;
