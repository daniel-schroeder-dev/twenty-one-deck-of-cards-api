class SignupModal {
    constructor() {
        this.element = document.createElement("form");
        this.element.id = "signup-modal";
        this.element.classList.add("modal");
        this.element.textContent = "Tell us who you are!";
        this.element.addEventListener("submit", e => this.remove(e));

        this.usernameInputElement = document.createElement("input");
        this.usernameInputElement.placeholder = "Username";

        this.element.append(this.usernameInputElement);

        this.playGameButton = document.createElement("button");
        this.playGameButton.id = "play-game-button";
        this.playGameButton.textContent = "Play Twenty-One";

        this.element.append(this.playGameButton);
    }

    render() {
        document.querySelector("main").append(this.element);
    }

    remove(e) {
        e.preventDefault();
        const username = this.usernameInputElement.value;
        this.element.dispatchEvent(
            new CustomEvent("triggerGameBoard", { bubbles: true, detail: username })
        );
        this.element.remove();
    }
}

export { SignupModal };
