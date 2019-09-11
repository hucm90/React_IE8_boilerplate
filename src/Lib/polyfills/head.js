if (!document.head) {
    document.head = {
        appendChild: function (newChild) {
            document.getElementsByTagName("head")[0].appendChild(newChild);
        }
    };
}

