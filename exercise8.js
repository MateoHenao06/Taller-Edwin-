function countCharacters(text) {
    const letters = text.replace(/[^a-zA-Z]/g, "").length;
    const numbers = text.replace(/[^0-9]/g, "").length;
    const spaces = text.split(" ").length - 1;

    console.log("Number of letters:", letters);
    console.log("Number of numbers:", numbers);
    console.log("Number of spaces:", spaces);
}
countCharacters("hello 123 wordl!");
