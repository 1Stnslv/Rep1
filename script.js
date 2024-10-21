window.addEventListener('load', function() {
    function traverseDOM(node) {
        if (node) {
            const content = node.nodeType === Node.ELEMENT_NODE ? node.tagName : node.nodeValue.trim();
            const next = confirm(`Ви на вузлі: ${content}. Продовжити до наступного вузла? (OK - далі, Отмена - назад)`);

            if (next && node.firstChild) {
                traverseDOM(node.firstChild);
            } else if (!next && node.parentNode) {
                const back = confirm('Повернутися до попереднього вузла або завершити? (OK - повернутися, Отмена - завершити)');
                if (back) {
                    traverseDOM(node.parentNode);
                }
            } else if (node.nextSibling) {
                const nextSibling = confirm('Перейти до наступного вузла на цьому рівні? (OK - так, Отмена - завершити)');
                if (nextSibling) {
                    traverseDOM(node.nextSibling);
                }
            } else {
                alert('Немає більше вузлів для перегляду.');
            }
        }
    }

    const rootNode = document.body;
    traverseDOM(rootNode);
});
