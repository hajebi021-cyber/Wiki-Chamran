console.log("JS LOADED");

document.addEventListener("DOMContentLoaded", () => {

    const searchInput = document.getElementById("searchInput");
    const items = document.querySelectorAll(".person-tag");

    // اگر چیزی نبود، بیخیال
    if (!searchInput || items.length === 0) return;

    // 🔍 سرچ زنده
    searchInput.addEventListener("input", () => {

        const value = searchInput.value.toLowerCase().trim();

        items.forEach(item => {

            const text = item.textContent.toLowerCase();

            if (text.includes(value) || value === "") {
                item.style.display = "";
            } else {
                item.style.display = "none";
            }

        });

    });

    // 🚀 Enter برای رفتن به صفحه
    searchInput.addEventListener("keydown", (e) => {

        if (e.key === "Enter") {

            const value = searchInput.value.toLowerCase().trim();

            for (let item of items) {

                const text = item.textContent.toLowerCase();

                if (text.includes(value)) {

                    const page = item.getAttribute("data-page");

                    if (page) {
                        window.location.href = page;
                    }

                    return;
                }
            }

        }

    });

    // 🖱 کلیک روی افراد
    items.forEach(item => {

        item.addEventListener("click", () => {

            const page = item.dataset.page;

            if (page) {
                window.location.href = page;
            }

        });

        item.style.cursor = "pointer";

    });

});