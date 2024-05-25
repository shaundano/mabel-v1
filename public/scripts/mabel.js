document.addEventListener("DOMContentLoaded", function() {
    const textInputContainer = document.getElementById("textInputContainer");

    textInputContainer.addEventListener("beforeinput", function(event) {
        let span;
        let content = event.data;

        if (event.inputType === "insertFromPaste") {
            // Prevent default paste behavior to handle custom insertion
            event.preventDefault();
            const text = (event.clipboardData || window.clipboardData).getData('text');
            const range = window.getSelection().getRangeAt(0);
            range.deleteContents();
            span = document.createElement("span");
            span.classList.add("pasted");
            span.textContent = text;
            range.insertNode(span);
            range.setStartAfter(span);
            range.setEndAfter(span);
            window.getSelection().removeAllRanges();
            window.getSelection().addRange(range);
        } else if (event.inputType === "deleteContentBackward") {
            // Allow backspace
            return true;
        } else if (content) {
            // Handle typed input
            event.preventDefault();
            span = document.createElement("span");
            span.classList.add("typed");
            span.textContent = content;
            const range = window.getSelection().getRangeAt(0);
            range.deleteContents();
            range.insertNode(span);
            range.setStartAfter(span);
            range.setEndAfter(span);
            window.getSelection().removeAllRanges();
            window.getSelection().addRange(range);
        }
    });

    textInputContainer.addEventListener("paste", function(event) {
        event.preventDefault();
        const text = (event.clipboardData || window.clipboardData).getData('text');
        const range = window.getSelection().getRangeAt(0);
        const span = document.createElement("span");
        span.classList.add("pasted");
        span.textContent = text;
        range.deleteContents();
        range.insertNode(span);
        range.setStartAfter(span);
        range.setEndAfter(span);
        window.getSelection().removeAllRanges();
        window.getSelection().addRange(range);
    });
});