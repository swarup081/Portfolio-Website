var items_heads = document.getElementsByClassName("items_head");
var item_contents = document.getElementsByClassName("item_content");

function opentab(tabname, element) {
    for (let i = 0; i < items_heads.length; i++) {
        items_heads[i].classList.remove("active_link");
    }
    for (let i = 0; i < item_contents.length; i++) {
        item_contents[i].classList.remove("active-tab");
    }

    element.classList.add("active_link");
    document.getElementById(tabname).classList.add("active-tab");
}